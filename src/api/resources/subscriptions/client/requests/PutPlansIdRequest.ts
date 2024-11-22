/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         amount: {
 *             "key": "value"
 *         },
 *         billing: {
 *             "key": "value"
 *         },
 *         order: {
 *             "key": "value"
 *         },
 *         txnDescription: {
 *             "key": "value"
 *         },
 *         description: {
 *             "key": "value"
 *         },
 *         maxFailures: {
 *             "key": "value"
 *         },
 *         name: {
 *             "key": "value"
 *         },
 *         schedule: "string",
 *         scheduleFactor: {
 *             "key": "value"
 *         },
 *         um: ButtonclikrApi.PutPlansIdRequestUm.Actual,
 *         inactive: ButtonclikrApi.PutPlansIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutPlansIdRequestFrozen.Zero
 *     }
 */
export interface PutPlansIdRequest {
    amount?: unknown;
    billing?: unknown;
    order?: unknown;
    txnDescription?: unknown;
    description?: unknown;
    maxFailures?: unknown;
    name?: unknown;
    /** The scheduled interval that determines when the subscription related to this Plan is triggered, which can be daily, weekly, monthly, or annually. */
    schedule: string;
    scheduleFactor?: unknown;
    /**
     * The unit of measure for the amount on the plan.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - actual - An actual amount to charge, in cents.
     *
     * - percent - A percentage of another amount, in basis points.
     *
     * </details>
     *
     */
    um: ButtonclikrApi.PutPlansIdRequestUm;
    /** Whether this resource is marked as inactive or not. */
    inactive: ButtonclikrApi.PutPlansIdRequestInactive;
    /** Whether this resource is marked as frozen or not frozen. */
    frozen: ButtonclikrApi.PutPlansIdRequestFrozen;
}