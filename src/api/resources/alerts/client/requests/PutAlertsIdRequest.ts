/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         login: {
 *             "key": "value"
 *         },
 *         forlogin: {
 *             "key": "value"
 *         },
 *         team: {
 *             "key": "value"
 *         },
 *         division: {
 *             "key": "value"
 *         },
 *         partition: {
 *             "key": "value"
 *         },
 *         name: {
 *             "key": "value"
 *         },
 *         description: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PutAlertsIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutAlertsIdRequestFrozen.Zero
 *     }
 */
export interface PutAlertsIdRequest {
    login?: unknown;
    forlogin?: unknown;
    team?: unknown;
    division?: unknown;
    partition?: unknown;
    name?: unknown;
    description?: unknown;
    /**
     * Whether this resource is marked as inactive.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Active**
     *
     * - `1` - **Inactive**
     * </details>
     *
     */
    inactive: ButtonclikrApi.PutAlertsIdRequestInactive;
    /**
     * Whether this resource is marked as frozen.
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Not Frozen**
     *
     * - `1` - **Frozen**
     * </details>
     *
     */
    frozen: ButtonclikrApi.PutAlertsIdRequestFrozen;
}
