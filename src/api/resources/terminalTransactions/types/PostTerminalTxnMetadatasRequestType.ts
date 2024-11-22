/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PostTerminalTxnMetadatasRequestType =
    | "amounts"
    | "emv"
    | "network"
    | "timeout"
    | "firstTxn"
    | "discretionary";

export const PostTerminalTxnMetadatasRequestType = {
    Amounts: "amounts",
    Emv: "emv",
    Network: "network",
    Timeout: "timeout",
    FirstTxn: "firstTxn",
    Discretionary: "discretionary",
} as const;