/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         fee: {
 *             "key": "value"
 *         },
 *         entity: {
 *             "key": "value"
 *         },
 *         org: {
 *             "key": "value"
 *         },
 *         fromentity: {
 *             "key": "value"
 *         },
 *         markupUm: ButtonclikrApi.PutFeeModifiersIdRequestMarkupUm.One,
 *         markupAmount: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PutFeeModifiersIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutFeeModifiersIdRequestFrozen.Zero
 *     }
 */
export interface PutFeeModifiersIdRequest {
    fee?: unknown;
    entity?: unknown;
    org?: unknown;
    fromentity?: unknown;
    /**
     * The unit of measure for the markup amount for the Fee.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *   - `1` - **Fixed Amount.** Specified in the 'markupAmount' field as an integer in cents.
     *
     *   - `2` - **Percentage** Specified in the 'markupAmount' field in basis points.
     *
     *   - `3` - **TBD**
     *
     * </details>
     *
     */
    markupUm?: ButtonclikrApi.PutFeeModifiersIdRequestMarkupUm;
    markupAmount?: unknown;
    /** Whether this resource is marked as inactive or not, whether it's active or inactive. */
    inactive: ButtonclikrApi.PutFeeModifiersIdRequestInactive;
    /** Whether this resource is marked as frozen or not frozen. */
    frozen: ButtonclikrApi.PutFeeModifiersIdRequestFrozen;
}