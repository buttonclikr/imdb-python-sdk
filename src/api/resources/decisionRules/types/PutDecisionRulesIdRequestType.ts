/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of logic to apply with this Decision Rule.
 */
export type PutDecisionRulesIdRequestType =
    | "less"
    | "equal"
    | "notEqual"
    | "greater"
    | "swiped"
    | "signed"
    | "type"
    | "origin"
    | "method"
    | "cvvResult"
    | "avsResult"
    | "3dsResult"
    | "related"
    | "relatedDelay"
    | "relatedFloor"
    | "relatedCeil"
    | "mcc"
    | "merchantCountry"
    | "issuerCountry"
    | "international"
    | "platform"
    | "methodType"
    | "emv"
    | "misuse"
    | "bin"
    | "primary"
    | "fundingCurrencyEqual"
    | "fundingCurrencyNotEqual"
    | "fundingCurrencyMismatch"
    | "settledCurrencyMismatch"
    | "imported"
    | "subscription"
    | "publicAuth"
    | "clientIp"
    | "debtRepayment";

export const PutDecisionRulesIdRequestType = {
    Less: "less",
    Equal: "equal",
    NotEqual: "notEqual",
    Greater: "greater",
    Swiped: "swiped",
    Signed: "signed",
    Type: "type",
    Origin: "origin",
    Method: "method",
    CvvResult: "cvvResult",
    AvsResult: "avsResult",
    ThreeDsResult: "3dsResult",
    Related: "related",
    RelatedDelay: "relatedDelay",
    RelatedFloor: "relatedFloor",
    RelatedCeil: "relatedCeil",
    Mcc: "mcc",
    MerchantCountry: "merchantCountry",
    IssuerCountry: "issuerCountry",
    International: "international",
    Platform: "platform",
    MethodType: "methodType",
    Emv: "emv",
    Misuse: "misuse",
    Bin: "bin",
    Primary: "primary",
    FundingCurrencyEqual: "fundingCurrencyEqual",
    FundingCurrencyNotEqual: "fundingCurrencyNotEqual",
    FundingCurrencyMismatch: "fundingCurrencyMismatch",
    SettledCurrencyMismatch: "settledCurrencyMismatch",
    Imported: "imported",
    Subscription: "subscription",
    PublicAuth: "publicAuth",
    ClientIp: "clientIp",
    DebtRepayment: "debtRepayment",
} as const;
