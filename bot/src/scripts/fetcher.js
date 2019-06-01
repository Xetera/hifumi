require("dotenv").config();

module.exports = function(query, fetch, qs) {
	return fetch(process.env.HIFUMI_HASURA_URL, {
		method: "POST",
		headers: {
			"X-Hasura-Admin-Secret": process.env.HIFUMI_HASURA_ACCESS_KEY
		},
		body: JSON.stringify({ query })
	})
		.then(r => r.json());
};
