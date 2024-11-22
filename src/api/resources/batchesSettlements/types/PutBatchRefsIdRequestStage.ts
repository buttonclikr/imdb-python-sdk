/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The stage of the Batch file that this reference code relates to, valid values are: 'all': Applies to batch files that contains all types of txns., 'debit': Applies to batch files that contains only debit txns., 'credit': Applies to batch files that contains only credit txns.
 */
export type PutBatchRefsIdRequestStage = "all" | "debit" | "credit";

export const PutBatchRefsIdRequestStage = {
    All: "all",
    Debit: "debit",
    Credit: "credit",
} as const;