/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of entity that holds the account. This can be either `individual` or `company`.
 */
export type BookingPaymentSourceBankAccountAccountType = "individual" | "company";

export const BookingPaymentSourceBankAccountAccountType = {
    Individual: "individual",
    Company: "company",
} as const;