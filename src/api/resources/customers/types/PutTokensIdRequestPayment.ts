/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The payment method that is associated with this Token.
 */
export interface PutTokensIdRequestPayment {
    /** The method used to make this payment. */
    method: string;
    number?: unknown;
    routing?: unknown;
    expiration?: unknown;
    cvv?: unknown;
    track?: unknown;
}
