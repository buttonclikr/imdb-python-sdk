/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         entity: "string",
 *         tcAcceptSignature: "string"
 *     }
 */
export interface PutEntityDatasIdRequest {
    /** The Entity associated with this EntityData. */
    entity: string;
    /** The Base64 encoded image of the signature captured at the time of creating the Entity. */
    tcAcceptSignature: string;
}