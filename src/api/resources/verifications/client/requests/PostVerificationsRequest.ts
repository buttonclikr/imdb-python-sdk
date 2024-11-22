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
 *         entity: {
 *             "key": "value"
 *         },
 *         member: {
 *             "key": "value"
 *         },
 *         txn: {
 *             "key": "value"
 *         },
 *         terminalTxn: {
 *             "key": "value"
 *         },
 *         account: {
 *             "key": "value"
 *         },
 *         decision: {
 *             "key": "value"
 *         },
 *         type: ButtonclikrApi.PostVerificationsRequestType.AccountBalance,
 *         level: {
 *             "key": "value"
 *         },
 *         fromCache: {
 *             "key": "value"
 *         },
 *         additionalOptions: {
 *             "key": "value"
 *         },
 *         options: {
 *             "key": "value"
 *         },
 *         value: {
 *             "key": "value"
 *         },
 *         score: {
 *             "key": "value"
 *         },
 *         description: {
 *             "key": "value"
 *         },
 *         ref: {
 *             "key": "value"
 *         },
 *         generated: ButtonclikrApi.PostVerificationsRequestGenerated.Zero
 *     }
 */
export interface PostVerificationsRequest {
    login?: unknown;
    entity?: unknown;
    member?: unknown;
    txn?: unknown;
    terminalTxn?: unknown;
    account?: unknown;
    decision?: unknown;
    /** The type of check to perform on the Entity, Member or Txn. */
    type: ButtonclikrApi.PostVerificationsRequestType;
    level?: unknown;
    fromCache?: unknown;
    additionalOptions?: unknown;
    options?: unknown;
    value?: unknown;
    score?: unknown;
    description?: unknown;
    ref?: unknown;
    generated: ButtonclikrApi.PostVerificationsRequestGenerated;
}