/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const TxnsPostReqBodySchemaModelUnauthReason: core.serialization.Schema<
    serializers.TxnsPostReqBodySchemaModelUnauthReason.Raw,
    ButtonclikrApi.TxnsPostReqBodySchemaModelUnauthReason
> = core.serialization.enum_([
    "incomplete",
    "timeout",
    "clerkCancelled",
    "customerCancelled",
    "misdispense",
    "hardwareFailure",
    "suspectedFraud",
]);

export declare namespace TxnsPostReqBodySchemaModelUnauthReason {
    type Raw =
        | "incomplete"
        | "timeout"
        | "clerkCancelled"
        | "customerCancelled"
        | "misdispense"
        | "hardwareFailure"
        | "suspectedFraud";
}