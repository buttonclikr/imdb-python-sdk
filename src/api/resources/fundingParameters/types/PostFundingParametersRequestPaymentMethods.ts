/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The payment methods that the fundingParameter should apply to.
 */
export type PostFundingParametersRequestPaymentMethods =
    | "amex"
    | "visa"
    | "masterCard"
    | "diners"
    | "discover"
    | "paypal"
    | "debit"
    | "checking"
    | "savings"
    | "corpChecking"
    | "corpSavings"
    | "gift"
    | "ebt"
    | "wic"
    | "Accel"
    | "ATH"
    | "AFFN"
    | "Culiance"
    | "Interlink"
    | "Jeanie"
    | "Maestro"
    | "NYCE"
    | "Pulse"
    | "Shazam"
    | "Star"
    | "Interac";

export const PostFundingParametersRequestPaymentMethods = {
    Amex: "amex",
    Visa: "visa",
    MasterCard: "masterCard",
    Diners: "diners",
    Discover: "discover",
    Paypal: "paypal",
    Debit: "debit",
    Checking: "checking",
    Savings: "savings",
    CorpChecking: "corpChecking",
    CorpSavings: "corpSavings",
    Gift: "gift",
    Ebt: "ebt",
    Wic: "wic",
    Accel: "Accel",
    Ath: "ATH",
    Affn: "AFFN",
    Culiance: "Culiance",
    Interlink: "Interlink",
    Jeanie: "Jeanie",
    Maestro: "Maestro",
    Nyce: "NYCE",
    Pulse: "Pulse",
    Shazam: "Shazam",
    Star: "Star",
    Interac: "Interac",
} as const;
