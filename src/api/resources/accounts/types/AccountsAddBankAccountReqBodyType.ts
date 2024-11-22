/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of financial account, debit, credit or both.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `all` - **Debit/Checking + Credit**
 *
 * - `credit` - **Credit-Only**
 *
 * - `debit` - **Debit/Checking-Only**
 *
 * </details>
 */
export type AccountsAddBankAccountReqBodyType = "all" | "credit" | "debit";

export const AccountsAddBankAccountReqBodyType = {
    All: "all",
    Credit: "credit",
    Debit: "debit",
} as const;