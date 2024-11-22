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
 *         name: {
 *             "key": "value"
 *         },
 *         email: {
 *             "key": "value"
 *         },
 *         minPasswordLength: {
 *             "key": "value"
 *         },
 *         minPasswordComplexity: ButtonclikrApi.PutDivisionsIdRequestMinPasswordComplexity.One,
 *         changeManagementEnabled: ButtonclikrApi.PutDivisionsIdRequestChangeManagementEnabled.Zero
 *     }
 */
export interface PutDivisionsIdRequest {
    login?: unknown;
    name?: unknown;
    email?: unknown;
    minPasswordLength?: unknown;
    minPasswordComplexity?: ButtonclikrApi.PutDivisionsIdRequestMinPasswordComplexity;
    changeManagementEnabled?: ButtonclikrApi.PutDivisionsIdRequestChangeManagementEnabled;
}