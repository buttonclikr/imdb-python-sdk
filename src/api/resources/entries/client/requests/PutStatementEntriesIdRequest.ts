/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         billing: {
 *             "key": "value"
 *         },
 *         statement: {
 *             "key": "value"
 *         },
 *         entity: {
 *             "key": "value"
 *         },
 *         onentity: {
 *             "key": "value"
 *         },
 *         forentity: {
 *             "key": "value"
 *         },
 *         fee: {
 *             "key": "value"
 *         },
 *         profitShare: {
 *             "key": "value"
 *         },
 *         event: ButtonclikrApi.PutStatementEntriesIdRequestEvent.One,
 *         eventId: {
 *             "key": "value"
 *         },
 *         originalEvent: ButtonclikrApi.PutStatementEntriesIdRequestOriginalEvent.One,
 *         originalEventId: {
 *             "key": "value"
 *         },
 *         description: {
 *             "key": "value"
 *         },
 *         amount: {
 *             "key": "value"
 *         },
 *         deductedFromBalance: ButtonclikrApi.PutStatementEntriesIdRequestDeductedFromBalance.Zero
 *     }
 */
export interface PutStatementEntriesIdRequest {
    billing?: unknown;
    statement?: unknown;
    entity?: unknown;
    onentity?: unknown;
    forentity?: unknown;
    fee?: unknown;
    profitShare?: unknown;
    /** The type of event that triggered this StatementEntry resource. */
    event?: ButtonclikrApi.PutStatementEntriesIdRequestEvent;
    eventId?: unknown;
    originalEvent?: ButtonclikrApi.PutStatementEntriesIdRequestOriginalEvent;
    originalEventId?: unknown;
    description?: unknown;
    amount?: unknown;
    deductedFromBalance: ButtonclikrApi.PutStatementEntriesIdRequestDeductedFromBalance;
}