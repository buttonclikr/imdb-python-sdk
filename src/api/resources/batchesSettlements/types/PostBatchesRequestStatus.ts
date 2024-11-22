/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The current status of this Batch, which can be `open` - This Batch can accept more Transactions, or `closed` - This Batch is closed to new Transactions and is ready to be sent to the processor.
 */
export type PostBatchesRequestStatus = "open" | "closed";

export const PostBatchesRequestStatus = {
    Open: "open",
    Closed: "closed",
} as const;
