/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query search($first: Int!, $query: String!) {\n    search(first: $first, type:USER, query: $query) {\n      nodes {\n        __typename\n        ... on User {\n          id\n          name\n          login\n        }\n      }\n    }\n  }\n": typeof types.SearchDocument,
    "\n  query userRepo($login: String!) {\n    user(login:$login) {\n      repositories(first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {\n        nodes {\n          __typename\n          id\n          name\n          description\n          stargazerCount\n          url\n        }\n      }\n    }\n  }\n": typeof types.UserRepoDocument,
};
const documents: Documents = {
    "\n  query search($first: Int!, $query: String!) {\n    search(first: $first, type:USER, query: $query) {\n      nodes {\n        __typename\n        ... on User {\n          id\n          name\n          login\n        }\n      }\n    }\n  }\n": types.SearchDocument,
    "\n  query userRepo($login: String!) {\n    user(login:$login) {\n      repositories(first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {\n        nodes {\n          __typename\n          id\n          name\n          description\n          stargazerCount\n          url\n        }\n      }\n    }\n  }\n": types.UserRepoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query search($first: Int!, $query: String!) {\n    search(first: $first, type:USER, query: $query) {\n      nodes {\n        __typename\n        ... on User {\n          id\n          name\n          login\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').SearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userRepo($login: String!) {\n    user(login:$login) {\n      repositories(first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {\n        nodes {\n          __typename\n          id\n          name\n          description\n          stargazerCount\n          url\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').UserRepoDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
