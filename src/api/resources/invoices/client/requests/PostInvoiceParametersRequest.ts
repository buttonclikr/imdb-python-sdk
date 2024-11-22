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
 *         locked: ButtonclikrApi.PostInvoiceParametersRequestLocked.Zero,
 *         type: ButtonclikrApi.PostInvoiceParametersRequestType.Apikey,
 *         value: ButtonclikrApi.PostInvoiceParametersRequestValue.Abw,
 *         inactive: ButtonclikrApi.PostInvoiceParametersRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PostInvoiceParametersRequestFrozen.Zero
 *     }
 */
export interface PostInvoiceParametersRequest {
    login?: unknown;
    entity?: unknown;
    division?: unknown;
    org?: unknown;
    partition?: unknown;
    /** Whether this invoiceParameter is locked. If locked, it defaults to the value of the invoiceParameter. Valid Values: `0` - Not locked; `1` - Locked. */
    locked: ButtonclikrApi.PostInvoiceParametersRequestLocked;
    /** The type of Transaction. Valid Values: `1` - Credit Card Only: Sale Transaction, processes a sale and charges the customer; `2` - Credit Card Only: Auth Transaction, authorizes and holds the requested total on the credit card; `3` - Credit Card Only: Capture Transaction, finalizes a prior Auth Transaction and charges the customer; `4` - Credit Card Only: Reverse Authorization, reverses a prior Auth or Sale Transaction and releases the credit hold; `5` - Credit Card Only: Refund Transaction, refunds a prior Capture or Sale Transaction (total may be specified for a partial refund); `7` - Echeck Only: Echeck Sale Transaction, sale transaction for ECheck payment; `8` - Echeck Only: ECheck Refund Transaction, refund transaction for prior ECheck Sale Transaction; `11` - Echeck Only: Echeck Redeposit Transaction, attempt to redeposit a prior failed eCheck Sale Transaction; `12` - Echeck Only: Echeck Account Verification Transaction, attempt to verify eCheck payment details. */
    type: ButtonclikrApi.PostInvoiceParametersRequestType;
    /** The value of this type of invoiceParameter. */
    value: ButtonclikrApi.PostInvoiceParametersRequestValue;
    /** Whether this resource is marked as inactive. Valid Values: `0` - Active, `1` - Inactive. */
    inactive: ButtonclikrApi.PostInvoiceParametersRequestInactive;
    /** Whether this resource is marked as frozen. Valid Values: `0` - Not Frozen, `1` - Frozen. */
    frozen: ButtonclikrApi.PostInvoiceParametersRequestFrozen;
}