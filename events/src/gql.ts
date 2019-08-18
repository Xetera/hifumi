import { createClient } from "./graphql/createClient";
import { images_set_input, images_bool_exp } from "./graphql/schema";

export const client = createClient({
  fetcher: ({ query, variables }: { query: any; variables: any }, fetch: any) =>
    fetch(process.env.HIFUMI_HASURA_URL!, {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: {
        "X-Hasura-Admin-Secret": process.env.HIFUMI_HASURA_ACCESS_KEY!,
      },
    }).then((r: any) => r.json()),
});

export const updateImage = (set: images_set_input, id: number) =>
  client.mutation({
    update_images: [
      {
        _set: set,
        where: {
          id: {
            _eq: id,
          },
        },
      },
      {
        affected_rows: 1,
      },
    ],
  });
