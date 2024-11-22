/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Report Results Status
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `pending` - **Report Results Pending.**
 *
 * - `processed` - **Report Results Complete.**
 *
 * </details>
 */
export type PostReportResultsRequestStatus = "pending" | "processed";

export const PostReportResultsRequestStatus = {
    Pending: "pending",
    Processed: "processed",
} as const;