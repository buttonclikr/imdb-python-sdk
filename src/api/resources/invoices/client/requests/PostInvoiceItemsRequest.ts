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
 *         item: {
 *             "key": "value"
 *         },
 *         description: {
 *             "key": "value"
 *         },
 *         custom: {
 *             "key": "value"
 *         },
 *         price: {
 *             "key": "value"
 *         },
 *         um: {
 *             "key": "value"
 *         },
 *         commodityCode: {
 *             "key": "value"
 *         },
 *         productCode: {
 *             "key": "value"
 *         },
 *         inactive: ButtonclikrApi.PostInvoiceItemsRequestInactive.Zero,
 *         frozen: ButtonclikrApi.PostInvoiceItemsRequestFrozen.Zero
 *     }
 */
export interface PostInvoiceItemsRequest {
    login?: unknown;
    item?: unknown;
    description?: unknown;
    custom?: unknown;
    price?: unknown;
    um?: unknown;
    commodityCode?: unknown;
    productCode?: unknown;
    /** Whether this resource is marked as inactive. Valid Values: `0` - Active, `1` - Inactive. */
    inactive: ButtonclikrApi.PostInvoiceItemsRequestInactive;
    /** Whether this resource is marked as frozen. Valid Values: `0` - Not Frozen, `1` - Frozen. */
    frozen: ButtonclikrApi.PostInvoiceItemsRequestFrozen;
}
