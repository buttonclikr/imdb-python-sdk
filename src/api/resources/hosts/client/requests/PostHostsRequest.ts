/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         partition: {
 *             "key": "value"
 *         },
 *         division: {
 *             "key": "value"
 *         },
 *         api: {
 *             "key": "value"
 *         },
 *         portal: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PostHostsRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PostHostsRequestFrozen.Zero
 *     }
 */
export interface PostHostsRequest {
    partition?: unknown;
    division?: unknown;
    api?: unknown;
    portal?: unknown;
    /** Whether this resource is marked as inactive. */
    inactive: ButtonclikrApi.PostHostsRequestInactive;
    /** Whether this resource is marked as frozen. */
    frozen: ButtonclikrApi.PostHostsRequestFrozen;
}
