/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PostChargebacksRequestCycle =
    | "retrieval"
    | "first"
    | "arbitration"
    | "reversal"
    | "representment"
    | "preArbitration"
    | "arbitrationLost"
    | "arbitrationSplit"
    | "arbitrationWon"
    | "issuerAcceptPreArbitration"
    | "issuerDeclinedPreArbitration"
    | "responseToIssuerPreArbitration"
    | "merchantAcceptedPreArbitration"
    | "merchantDeclinedPreArbitration"
    | "preCompliance"
    | "compliance";

export const PostChargebacksRequestCycle = {
    Retrieval: "retrieval",
    First: "first",
    Arbitration: "arbitration",
    Reversal: "reversal",
    Representment: "representment",
    PreArbitration: "preArbitration",
    ArbitrationLost: "arbitrationLost",
    ArbitrationSplit: "arbitrationSplit",
    ArbitrationWon: "arbitrationWon",
    IssuerAcceptPreArbitration: "issuerAcceptPreArbitration",
    IssuerDeclinedPreArbitration: "issuerDeclinedPreArbitration",
    ResponseToIssuerPreArbitration: "responseToIssuerPreArbitration",
    MerchantAcceptedPreArbitration: "merchantAcceptedPreArbitration",
    MerchantDeclinedPreArbitration: "merchantDeclinedPreArbitration",
    PreCompliance: "preCompliance",
    Compliance: "compliance",
} as const;
