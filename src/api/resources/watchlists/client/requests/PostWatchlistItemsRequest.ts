/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         watchlist: {
 *             "key": "value"
 *         },
 *         type: ButtonclikrApi.PostWatchlistItemsRequestType.Entity,
 *         name: {
 *             "key": "value"
 *         },
 *         title: {
 *             "key": "value"
 *         },
 *         first: {
 *             "key": "value"
 *         },
 *         middle: {
 *             "key": "value"
 *         },
 *         last: {
 *             "key": "value"
 *         },
 *         ein: {
 *             "key": "value"
 *         },
 *         ssn: {
 *             "key": "value"
 *         },
 *         dob: {
 *             "key": "value"
 *         },
 *         dl: {
 *             "key": "value"
 *         },
 *         dlstate: "string",
 *         email: {
 *             "key": "value"
 *         },
 *         website: {
 *             "key": "value"
 *         },
 *         ipAddress: {
 *             "key": "value"
 *         },
 *         payment: {
 *             method: ButtonclikrApi.PostWatchlistItemsRequestPaymentMethod.One,
 *             number: {
 *                 "key": "value"
 *             },
 *             routing: {
 *                 "key": "value"
 *             }
 *         },
 *         bin: {
 *             "key": "value"
 *         },
 *         last4: {
 *             "key": "value"
 *         },
 *         keyword: {
 *             "key": "value"
 *         },
 *         ref: {
 *             "key": "value"
 *         },
 *         custom: {
 *             "key": "value"
 *         },
 *         notes: {
 *             "key": "value"
 *         },
 *         address1: {
 *             "key": "value"
 *         },
 *         address2: {
 *             "key": "value"
 *         },
 *         city: {
 *             "key": "value"
 *         },
 *         state: "string",
 *         zip: {
 *             "key": "value"
 *         },
 *         country: ButtonclikrApi.PostWatchlistItemsRequestCountry.Abw,
 *         phone: {
 *             "key": "value"
 *         },
 *         fax: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PostWatchlistItemsRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PostWatchlistItemsRequestFrozen.Zero
 *     }
 */
export interface PostWatchlistItemsRequest {
    watchlist?: unknown;
    /** The type of WatchlistItem. */
    type: ButtonclikrApi.PostWatchlistItemsRequestType;
    name?: unknown;
    title?: unknown;
    first?: unknown;
    middle?: unknown;
    last?: unknown;
    ein?: unknown;
    ssn?: unknown;
    dob?: unknown;
    dl?: unknown;
    /**
     * The U.S. state of the driver's license to match.
     * Valid values are any U.S. state's 2 character postal abbreviation.
     */
    dlstate?: string;
    email?: unknown;
    website?: unknown;
    ipAddress?: unknown;
    payment: ButtonclikrApi.PostWatchlistItemsRequestPayment;
    bin?: unknown;
    last4?: unknown;
    keyword?: unknown;
    ref?: unknown;
    custom?: unknown;
    notes?: unknown;
    address1?: unknown;
    address2?: unknown;
    city?: unknown;
    /**
     * The U.S. state to match.
     * Valid values are any U.S. state's 2 character postal abbreviation.
     */
    state?: string;
    zip?: unknown;
    /** The country in the address to match. Currently, this field only accepts the value 'USA'. */
    country?: ButtonclikrApi.PostWatchlistItemsRequestCountry;
    phone?: unknown;
    fax?: unknown;
    /** Whether this resource is marked as inactive. */
    inactive: ButtonclikrApi.PostWatchlistItemsRequestInactive;
    /** Whether this resource is marked as frozen. */
    frozen: ButtonclikrApi.PostWatchlistItemsRequestFrozen;
}
