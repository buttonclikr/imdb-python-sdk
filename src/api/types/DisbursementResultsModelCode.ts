/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The code identifying the disbursement result.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `pending` - Disbursement processing is pending account verification.
 *
 * - `internal` - Failed. Internal note and/or failure.
 *
 * - `nsf` - Failed.Disbursement return due to insufficient funds.
 *
 * - `badAccount` - Failed. Disbursement return due to incorrect payment account information.
 *
 * - `unauthorized` - Failed. Disbursement return due to customer dispute of authorization.
 *
 * - `general` - General note and/or failure.
 *
 * - `noc` - Notice of change.
 *
 * - `parameter` - Disbursement processing withheld due to parameter configuration.
 *
 * - `sameDay` - Failed. Same-day processing note and/or failure.
 *
 * - `transferDetails` - Trace number note and/or data.
 *
 * - `platform` - Failed. Processor note and/or failure.
 *
 * </details>
 */
export type DisbursementResultsModelCode =
    | "pending"
    | "internal"
    | "nsf"
    | "badAccount"
    | "unauthorized"
    | "general"
    | "noc"
    | "parameter"
    | "sameDay"
    | "transferDetails"
    | "platform";

export const DisbursementResultsModelCode = {
    Pending: "pending",
    Internal: "internal",
    Nsf: "nsf",
    BadAccount: "badAccount",
    Unauthorized: "unauthorized",
    General: "general",
    Noc: "noc",
    Parameter: "parameter",
    SameDay: "sameDay",
    TransferDetails: "transferDetails",
    Platform: "platform",
} as const;
