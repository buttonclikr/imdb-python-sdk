/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         decision: {
 *             "key": "value"
 *         },
 *         name: {
 *             "key": "value"
 *         },
 *         description: {
 *             "key": "value"
 *         },
 *         type: ButtonclikrApi.PutDecisionRulesIdRequestType.Less,
 *         value: ButtonclikrApi.PutDecisionRulesIdRequestValue.Aed,
 *         grouping: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PutDecisionRulesIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutDecisionRulesIdRequestFrozen.Zero
 *     }
 */
export interface PutDecisionRulesIdRequest {
    decision?: unknown;
    name?: unknown;
    description?: unknown;
    /** The type of logic to apply with this Decision Rule. */
    type: ButtonclikrApi.PutDecisionRulesIdRequestType;
    /** The value to compare against when evaluating this Decision Rule. */
    value: ButtonclikrApi.PutDecisionRulesIdRequestValue;
    grouping?: unknown;
    /** Whether this resource is marked as inactive or not. */
    inactive: ButtonclikrApi.PutDecisionRulesIdRequestInactive;
    /** Whether this resource is marked as frozen or not frozen. */
    frozen: ButtonclikrApi.PutDecisionRulesIdRequestFrozen;
}
