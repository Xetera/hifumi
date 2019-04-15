import { Client, ClientOptions } from "graphql-typed-client"
import {
  mutation_root,
  mutation_rootPromiseChain,
  mutation_rootRequest,
  query_root,
  query_rootPromiseChain,
  query_rootRequest,
  subscription_root,
  subscription_rootObservableChain,
  subscription_rootRequest,
} from "./schema"
export declare const createClient: (
  options: ClientOptions,
) => Client<
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  mutation_rootRequest,
  mutation_rootPromiseChain,
  mutation_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root
>
