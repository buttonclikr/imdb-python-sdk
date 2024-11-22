/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const DisbursementRefsModelPlatform: core.serialization.Schema<
    serializers.DisbursementRefsModelPlatform.Raw,
    ButtonclikrApi.DisbursementRefsModelPlatform
> = core.serialization.enum_([
    "ELAVON",
    "VANTIV",
    "VCORE",
    "TDBANK",
    "TDBANKCA",
    "WELLSACH",
    "WELLSFARGO",
    "WFSINGLE",
    "WORLDPAY",
]);

export declare namespace DisbursementRefsModelPlatform {
    type Raw =
        | "ELAVON"
        | "VANTIV"
        | "VCORE"
        | "TDBANK"
        | "TDBANKCA"
        | "WELLSACH"
        | "WELLSFARGO"
        | "WFSINGLE"
        | "WORLDPAY";
}