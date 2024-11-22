/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of plan.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `recurring` - A recurring payment plan (subcription).
 *
 * - `installment` - A deferred payment installment plan.
 *
 * </details>
 */
export type PostPlansRequestType = "recurring" | "installment";

export const PostPlansRequestType = {
    Recurring: "recurring",
    Installment: "installment",
} as const;
