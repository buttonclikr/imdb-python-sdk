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
 *         payment: {
 *             method: ButtonclikrApi.PostPaymentUpdateGroupsRequestPaymentMethod.One,
 *             number: {
 *                 "key": "value"
 *             }
 *         },
 *         processing: {
 *             "key": "value"
 *         },
 *         processed: {
 *             "key": "value"
 *         },
 *         numberUpdated: ButtonclikrApi.PostPaymentUpdateGroupsRequestNumberUpdated.Zero,
 *         expirationUpdated: ButtonclikrApi.PostPaymentUpdateGroupsRequestExpirationUpdated.Zero
 *     }
 */
export interface PostPaymentUpdateGroupsRequest {
    entity?: unknown;
    /** The payment associated with this PaymentUpdate. */
    payment: ButtonclikrApi.PostPaymentUpdateGroupsRequestPayment;
    processing?: unknown;
    processed?: unknown;
    numberUpdated?: ButtonclikrApi.PostPaymentUpdateGroupsRequestNumberUpdated;
    expirationUpdated?: ButtonclikrApi.PostPaymentUpdateGroupsRequestExpirationUpdated;
}
