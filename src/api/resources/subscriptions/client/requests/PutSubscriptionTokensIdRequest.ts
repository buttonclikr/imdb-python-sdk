/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         token: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PutSubscriptionTokensIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutSubscriptionTokensIdRequestFrozen.Zero
 *     }
 */
export interface PutSubscriptionTokensIdRequest {
    token?: unknown;
    /** Whether this resource is marked as inactive or not, whether it's active or inactive. */
    inactive: ButtonclikrApi.PutSubscriptionTokensIdRequestInactive;
    /** Whether this resource is marked as frozen or not frozen. */
    frozen: ButtonclikrApi.PutSubscriptionTokensIdRequestFrozen;
}
