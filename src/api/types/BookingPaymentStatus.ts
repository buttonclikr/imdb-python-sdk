/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of the payment, one of `pending`, `succeeded`, or `failed`.
 */
export type BookingPaymentStatus = "pending" | "succeeded" | "failed";

export const BookingPaymentStatus = {
    Pending: "pending",
    Succeeded: "succeeded",
    Failed: "failed",
} as const;
