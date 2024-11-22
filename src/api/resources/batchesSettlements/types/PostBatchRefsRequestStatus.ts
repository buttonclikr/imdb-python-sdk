/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of the batchRef can be one of 'created' - when the BatchRef is created, 'failed' - a batch ref that failed processing, or 'processed'- a batch ref that processed successfully.
 */
export type PostBatchRefsRequestStatus = "created" | "failed" | "processed";

export const PostBatchRefsRequestStatus = {
    Created: "created",
    Failed: "failed",
    Processed: "processed",
} as const;
