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
 *         first: {
 *             "key": "value"
 *         },
 *         middle: {
 *             "key": "value"
 *         },
 *         last: {
 *             "key": "value"
 *         },
 *         description: {
 *             "key": "value"
 *         },
 *         email: {
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
 *         country: ButtonclikrApi.PostContactsRequestCountry.Abw,
 *         phone: {
 *             "key": "value"
 *         },
 *         fax: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PostContactsRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PostContactsRequestFrozen.Zero
 *     }
 */
export interface PostContactsRequest {
    entity?: unknown;
    first?: unknown;
    middle?: unknown;
    last?: unknown;
    description?: unknown;
    email?: unknown;
    address1?: unknown;
    address2?: unknown;
    city?: unknown;
    /** The state associated with this Contact or Transaction. If in the U.S. this is specified as the 2 character postal abbreviation for the state, if outside of the U.S. the full state name. This field is stored as a text string and must be between 2 and 100 characters long. */
    state?: string;
    zip?: unknown;
    /** The countries associated with this Contact or Transaction. Valid values for this field are the 3-letter ISO codes for the countries. */
    country?: ButtonclikrApi.PostContactsRequestCountry;
    phone?: unknown;
    fax?: unknown;
    /** Whether this resource is marked as inactive. Valid Values: `0` - Active, `1` - Inactive. */
    inactive: ButtonclikrApi.PostContactsRequestInactive;
    /** Whether this resource is marked as frozen. Valid Values: `0` - Not Frozen, `1` - Frozen. */
    frozen: ButtonclikrApi.PostContactsRequestFrozen;
}
