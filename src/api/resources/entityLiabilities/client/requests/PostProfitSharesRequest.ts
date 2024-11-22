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
 *         forentity: {
 *             "key": "value"
 *         },
 *         org: {
 *             "key": "value"
 *         },
 *         division: {
 *             "key": "value"
 *         },
 *         partition: {
 *             "key": "value"
 *         },
 *         type: ButtonclikrApi.PostProfitSharesRequestType.Income,
 *         name: {
 *             "key": "value"
 *         },
 *         description: {
 *             "key": "value"
 *         },
 *         amount: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PostProfitSharesRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PostProfitSharesRequestFrozen.Zero
 *     }
 */
export interface PostProfitSharesRequest {
    login?: unknown;
    entity?: unknown;
    forentity?: unknown;
    org?: unknown;
    division?: unknown;
    partition?: unknown;
    /**
     * Indicates if the Profit Share should be processed when there is an income, expense or both.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *   - `income` - Profit Share processing for income-only.
     *
     *   - `expense` - Profit Share processing for expense-only.
     *
     *   - `both` - Profit Share processing for both income and expense.
     *
     * </details>
     *
     */
    type: ButtonclikrApi.PostProfitSharesRequestType;
    name?: unknown;
    description?: unknown;
    amount?: unknown;
    /** Whether this resource is marked as inactive. Valid Values: `0` - Active, `1` - Inactive. */
    inactive: ButtonclikrApi.PostProfitSharesRequestInactive;
    /** Whether this resource is marked as frozen. Valid Values: `0` - Not Frozen, `1` - Frozen. */
    frozen: ButtonclikrApi.PostProfitSharesRequestFrozen;
}
