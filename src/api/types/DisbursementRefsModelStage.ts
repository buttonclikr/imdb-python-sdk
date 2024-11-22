/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The stage of the Disbursement reference.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `create` - Funding is sent to the processor (based on prior split setup).
 *
 * - `approve` - Funding approved by the processor.
 *
 * - `split` - Disbursement amount is split for processing.
 *
 * - `failed` - Funding failed.
 *
 * </details>
 */
export type DisbursementRefsModelStage = "create" | "approve" | "split" | "failed";

export const DisbursementRefsModelStage = {
    Create: "create",
    Approve: "approve",
    Split: "split",
    Failed: "failed",
} as const;
