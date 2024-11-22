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
 *         filename: {
 *             "key": "value"
 *         },
 *         date: {
 *             "key": "value"
 *         },
 *         type: ButtonclikrApi.PostExternalFeesRequestType.Fanf,
 *         lineNumber: {
 *             "key": "value"
 *         },
 *         amount: {
 *             "key": "value"
 *         },
 *         metadata: {
 *             "key": "value"
 *         }
 *     }
 */
export interface PostExternalFeesRequest {
    entity?: unknown;
    filename?: unknown;
    date?: unknown;
    /**
     * The type of third-party assessed fees.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - FANF - Visa Fixed Acquirer Network Fee (FanF)
     *
     * - MCLOCATION - Mastercard Merchant Location Fee
     *
     * - VISAINTEGRITY - Visa Transaction Integrity Fee (TIF)
     *
     * </details>
     *
     */
    type: ButtonclikrApi.PostExternalFeesRequestType;
    lineNumber?: unknown;
    amount?: unknown;
    metadata?: unknown;
}
