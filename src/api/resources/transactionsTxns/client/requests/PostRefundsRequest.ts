/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         entry: "entry",
 *         amount: 1
 *     }
 */
export interface PostRefundsRequest {
    /** The identifier of the Entries resource that is being refunded. */
    entry: string;
    /**
     * A description of this Refund.
     * This field is stored as a text string and must be between 0 and 100 characters long.
     */
    description?: string;
    /**
     * The amount of this Refund.
     * This field is specified as an integer in cents.
     * This field is optional. If it is not set, then the API uses the amount that is specified in the related Entry resource.
     */
    amount: number;
}