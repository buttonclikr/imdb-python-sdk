/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         entity: {
 *             "key": "value"
 *         },
 *         forentity: {
 *             "key": "value"
 *         },
 *         start: {
 *             "key": "value"
 *         },
 *         end: {
 *             "key": "value"
 *         },
 *         share: {
 *             "key": "value"
 *         },
 *         event: ButtonclikrApi.PostRevShareSchedulesRequestEvent.Six,
 *         inactive: ButtonclikrApi.PostRevShareSchedulesRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PostRevShareSchedulesRequestFrozen.Zero
 *     }
 */
export interface PostRevShareSchedulesRequest {
    entity?: unknown;
    forentity?: unknown;
    start?: unknown;
    end?: unknown;
    share?: unknown;
    event: ButtonclikrApi.PostRevShareSchedulesRequestEvent;
    /** Whether this resource is marked as inactive. */
    inactive: ButtonclikrApi.PostRevShareSchedulesRequestInactive;
    /** Whether this resource is marked as frozen. */
    frozen: ButtonclikrApi.PostRevShareSchedulesRequestFrozen;
}