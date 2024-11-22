/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostChargebacksRequestCycle: core.serialization.Schema<
    serializers.PostChargebacksRequestCycle.Raw,
    ButtonclikrApi.PostChargebacksRequestCycle
> = core.serialization.enum_([
    "retrieval",
    "first",
    "arbitration",
    "reversal",
    "representment",
    "preArbitration",
    "arbitrationLost",
    "arbitrationSplit",
    "arbitrationWon",
    "issuerAcceptPreArbitration",
    "issuerDeclinedPreArbitration",
    "responseToIssuerPreArbitration",
    "merchantAcceptedPreArbitration",
    "merchantDeclinedPreArbitration",
    "preCompliance",
    "compliance",
]);

export declare namespace PostChargebacksRequestCycle {
    type Raw =
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
}
