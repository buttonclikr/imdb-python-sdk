/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The current status of the statement.
 */
export type PostStatementsRequestStatus =
    | "pending"
    | "processing"
    | "partiallyPaid"
    | "paid"
    | "partiallyCancelled"
    | "cancelled";

export const PostStatementsRequestStatus = {
    Pending: "pending",
    Processing: "processing",
    PartiallyPaid: "partiallyPaid",
    Paid: "paid",
    PartiallyCancelled: "partiallyCancelled",
    Cancelled: "cancelled",
} as const;