/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of account verification you want to perform.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `debit` - **Makes two challenge debits (debit1 and debit2).**
 *
 * - `credentials` - **Uses a bank account credential (username/password).**
 *
 * </details>
 */
export type AccountVerificationResourceModelType = "debit" | "credential";

export const AccountVerificationResourceModelType = {
    Debit: "debit",
    Credential: "credential",
} as const;