import axios from "axios";
export const getUser = (id: string) =>
  axios.post(process.env.YUN_HASURA_URL!, {
    query: `
    query UserQuery($id: String!){
      user_by_pk(user_id: $id) {
        user_id
      }
    }
  `,
    variables: JSON.stringify({
      id
    })
  });
