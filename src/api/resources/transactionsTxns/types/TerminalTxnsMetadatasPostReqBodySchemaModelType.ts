/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of metadata associated with the Terminal transcation.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `amounts` - **Transaction Amounts**
 *
 * - `emv` - **EuroPay, Mastercard, Visa Transactions**
 *
 * - `network` - **Network Transactions**
 *
 * - `timeout` - **Transaction Timeouts**
 *
 * - `firstTxn` - **First Transaction**
 *
 * - `discretionary` - **Custom Transaction Field Value**
 *
 * </details>
 */
export type TerminalTxnsMetadatasPostReqBodySchemaModelType =
    | "amounts"
    | "emv"
    | "network"
    | "timeout"
    | "firstTxn"
    | "discretionary";

export const TerminalTxnsMetadatasPostReqBodySchemaModelType = {
    Amounts: "amounts",
    Emv: "emv",
    Network: "network",
    Timeout: "timeout",
    FirstTxn: "firstTxn",
    Discretionary: "discretionary",
} as const;
