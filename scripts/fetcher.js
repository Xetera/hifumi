require("dotenv").config();

module.exports = function(query, fetch, qs) {
	return fetch(`https://db.hifumi.io/v1alpha1/graphql`, {
		method: "POST",
		headers: {
			"X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
		},
		body: JSON.stringify({ query })
	})
		.then(r => r.json());
};
