/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutFundingParametersIdRequestPlatform: core.serialization.Schema<
    serializers.PutFundingParametersIdRequestPlatform.Raw,
    ButtonclikrApi.PutFundingParametersIdRequestPlatform
> = core.serialization.enum_([
    "APPLE",
    "ELAVON",
    "FIRSTDATA",
    "GOOGLE",
    "VANTIV",
    "VCORE",
    "WELLSACH",
    "WELLSFARGO",
    "WFSINGLE",
    "WORLDPAY",
    "TDBANKCA",
    "all",
]);

export declare namespace PutFundingParametersIdRequestPlatform {
    type Raw =
        | "APPLE"
        | "ELAVON"
        | "FIRSTDATA"
        | "GOOGLE"
        | "VANTIV"
        | "VCORE"
        | "WELLSACH"
        | "WELLSFARGO"
        | "WFSINGLE"
        | "WORLDPAY"
        | "TDBANKCA"
        | "all";
}
