/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as http from "../http.js";
import type * as http_actions_index from "../http_actions/index.js";
import type * as http_actions_snippets_add from "../http_actions/snippets/add.js";
import type * as http_actions_users_clerk_users_webhook from "../http_actions/users/clerk_users_webhook.js";
import type * as seed from "../seed.js";
import type * as snippets_add from "../snippets/add.js";
import type * as snippets_read from "../snippets/read.js";
import type * as snippets_remove from "../snippets/remove.js";
import type * as snippets_update from "../snippets/update.js";
import type * as tables_fileTypes from "../tables/fileTypes.js";
import type * as tables_index from "../tables/index.js";
import type * as tables_snippetVersions from "../tables/snippetVersions.js";
import type * as tables_snippets from "../tables/snippets.js";
import type * as tables_tags from "../tables/tags.js";
import type * as tables_users from "../tables/users.js";
import type * as users_create from "../users/create.js";
import type * as users_delete from "../users/delete.js";
import type * as users_update from "../users/update.js";
import type * as users_user from "../users/user.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  http: typeof http;
  "http_actions/index": typeof http_actions_index;
  "http_actions/snippets/add": typeof http_actions_snippets_add;
  "http_actions/users/clerk_users_webhook": typeof http_actions_users_clerk_users_webhook;
  seed: typeof seed;
  "snippets/add": typeof snippets_add;
  "snippets/read": typeof snippets_read;
  "snippets/remove": typeof snippets_remove;
  "snippets/update": typeof snippets_update;
  "tables/fileTypes": typeof tables_fileTypes;
  "tables/index": typeof tables_index;
  "tables/snippetVersions": typeof tables_snippetVersions;
  "tables/snippets": typeof tables_snippets;
  "tables/tags": typeof tables_tags;
  "tables/users": typeof tables_users;
  "users/create": typeof users_create;
  "users/delete": typeof users_delete;
  "users/update": typeof users_update;
  "users/user": typeof users_user;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
