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
 *         division: {
 *             "key": "value"
 *         },
 *         org: {
 *             "key": "value"
 *         },
 *         partition: {
 *             "key": "value"
 *         },
 *         locked: ButtonclikrApi.PutInvoiceParametersIdRequestLocked.Zero,
 *         type: ButtonclikrApi.PutInvoiceParametersIdRequestType.Apikey,
 *         value: ButtonclikrApi.PutInvoiceParametersIdRequestValue.Abw,
 *         inactive: ButtonclikrApi.PutInvoiceParametersIdRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PutInvoiceParametersIdRequestFrozen.Zero
 *     }
 */
export interface PutInvoiceParametersIdRequest {
    login?: unknown;
    entity?: unknown;
    division?: unknown;
    org?: unknown;
    partition?: unknown;
    /**
     * Whether this invoiceParameter is locked or not, if it is locked then the value of this type of invoiceParameter will prevail.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0`  - **Not locked.**
     * - `1`  - **Locked.**
     * </details>
     */
    locked: ButtonclikrApi.PutInvoiceParametersIdRequestLocked;
    /**
     * The type of invoiceParameter that we will be configuring is the type of Transaction.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *    - `1`  - **Credit Card Only: Sale Transaction.** Processes a sale and charges the customer.
     *
     *    - `2`  - **Credit Card Only: Auth Transaction.** Authorizes and holds the requested total on the credit card.
     *
     *    - `3`  - **Credit Card Only: Capture Transaction.** Finalizes a prior Auth Transaction and charges the customer.
     *
     *    - `4`  - **Credit Card Only: Reverse Authorization.** Reverses a prior Auth or Sale Transaction and releases the credit hold.
     *
     *    - `5`  - **Credit Card Only: Refund Transaction.** Refunds a prior Capture or Sale Transaction (total may be specified for a partial refund).
     *
     *    - `7`  - **Echeck Only: Echeck Sale Transaction.** Sale Transaction for ECheck payment.
     *
     *    - `8`  - **Echeck Only: ECheck Refund Transaction.** Refund Transaction for prior ECheck Sale Transaction.
     *
     *    - `11`  - **Echeck Only: Echeck Redeposit Transaction.** Attempt to redeposit a prior failed eCheck Sale Transaction.
     *
     *    - `12`  - **Echeck Only: Echeck Account Verification Transaction.** Attempt to verify eCheck payment details.
     *
     *
     *
     *
     * </details>
     */
    type: ButtonclikrApi.PutInvoiceParametersIdRequestType;
    /** The value of this type of invoiceParameter. */
    value: ButtonclikrApi.PutInvoiceParametersIdRequestValue;
    /** Whether this resource is marked as inactive or not, whether it's active or inactive. */
    inactive: ButtonclikrApi.PutInvoiceParametersIdRequestInactive;
    /** Whether this resource is marked as frozen or not frozen. */
    frozen: ButtonclikrApi.PutInvoiceParametersIdRequestFrozen;
}