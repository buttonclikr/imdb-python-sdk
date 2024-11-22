/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of bank issuer number (BIN) that allows for resulting transactions.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `CREDIT` - **Credit BIN Type.**
 *
 * - `DEBIT` - **Debit BIN Type.**
 *
 * </details>
 */
export type TerminalTxnsPostReqBodySchemaModelBinType = "CREDIT" | "DEBIT";

export const TerminalTxnsPostReqBodySchemaModelBinType = {
    Credit: "CREDIT",
    Debit: "DEBIT",
} as const;
