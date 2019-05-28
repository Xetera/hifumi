import gql from "graphql-tag";

export const upsertImageQ = gql`
  mutation($objects: [images_insert_input!]! $on_conflict: images_on_conflict) {
    insert_images(objects: $objects on_conflict: $on_conflict) {
      returning {
        id
      }
    }
  }
`;

export const upsertImageChannelQ = gql`
  mutation($objects: [image_channels_insert_input!]! $on_conflict: image_channels_on_conflict) {
    insert_image_channels(objects: $objects on_conflict: $on_conflict) {
      returning {
        id
      }
    }
  }
`;
