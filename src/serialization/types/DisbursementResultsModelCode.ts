/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const DisbursementResultsModelCode: core.serialization.Schema<
    serializers.DisbursementResultsModelCode.Raw,
    ButtonclikrApi.DisbursementResultsModelCode
> = core.serialization.enum_([
    "pending",
    "internal",
    "nsf",
    "badAccount",
    "unauthorized",
    "general",
    "noc",
    "parameter",
    "sameDay",
    "transferDetails",
    "platform",
]);

export declare namespace DisbursementResultsModelCode {
    type Raw =
        | "pending"
        | "internal"
        | "nsf"
        | "badAccount"
        | "unauthorized"
        | "general"
        | "noc"
        | "parameter"
        | "sameDay"
        | "transferDetails"
        | "platform";
}