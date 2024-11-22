/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         bin: {
 *             "key": "value"
 *         },
 *         method: ButtonclikrApi.PostBinsRequestMethod.One,
 *         type: ButtonclikrApi.PostBinsRequestType.Credit,
 *         category: ButtonclikrApi.PostBinsRequestCategory.Classic,
 *         name: {
 *             "key": "value"
 *         },
 *         address: {
 *             "key": "value"
 *         },
 *         city: {
 *             "key": "value"
 *         },
 *         state: "string",
 *         country: ButtonclikrApi.PostBinsRequestCountry.Abw,
 *         zip: {
 *             "key": "value"
 *         },
 *         locationType: ButtonclikrApi.PostBinsRequestLocationType.Branch,
 *         newBin: {
 *             "key": "value"
 *         },
 *         website: {
 *             "key": "value"
 *         },
 *         phone: {
 *             "key": "value"
 *         },
 *         transferEnabled: ButtonclikrApi.PostBinsRequestTransferEnabled.Zero,
 *         numberLength: {
 *             "key": "value"
 *         },
 *         debitOverCreditEnabled: ButtonclikrApi.PostBinsRequestDebitOverCreditEnabled.Zero,
 *         billPayEnabled: ButtonclikrApi.PostBinsRequestBillPayEnabled.Zero,
 *         pinlessSupport: ButtonclikrApi.PostBinsRequestPinlessSupport.None,
 *         inactive: ButtonclikrApi.PostBinsRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PostBinsRequestFrozen.Zero
 *     }
 */
export interface PostBinsRequest {
    bin?: unknown;
    /** The method used to make this payment. */
    method: ButtonclikrApi.PostBinsRequestMethod;
    /** The type of the card used in the Transaction. */
    type?: ButtonclikrApi.PostBinsRequestType;
    category?: ButtonclikrApi.PostBinsRequestCategory;
    name?: unknown;
    address?: unknown;
    city?: unknown;
    state?: string;
    /** The country of the bank that issued the card used in the Transaction. */
    country?: ButtonclikrApi.PostBinsRequestCountry;
    zip?: unknown;
    locationType?: ButtonclikrApi.PostBinsRequestLocationType;
    newBin?: unknown;
    website?: unknown;
    phone?: unknown;
    transferEnabled: ButtonclikrApi.PostBinsRequestTransferEnabled;
    numberLength?: unknown;
    debitOverCreditEnabled: ButtonclikrApi.PostBinsRequestDebitOverCreditEnabled;
    billPayEnabled: ButtonclikrApi.PostBinsRequestBillPayEnabled;
    pinlessSupport?: ButtonclikrApi.PostBinsRequestPinlessSupport;
    /** Whether this resource is marked as inactive. */
    inactive: ButtonclikrApi.PostBinsRequestInactive;
    /** Whether this resource is marked as frozen. */
    frozen: ButtonclikrApi.PostBinsRequestFrozen;
}
