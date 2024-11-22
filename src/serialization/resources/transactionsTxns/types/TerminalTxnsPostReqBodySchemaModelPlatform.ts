/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const TerminalTxnsPostReqBodySchemaModelPlatform: core.serialization.Schema<
    serializers.TerminalTxnsPostReqBodySchemaModelPlatform.Raw,
    ButtonclikrApi.TerminalTxnsPostReqBodySchemaModelPlatform
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
]);

export declare namespace TerminalTxnsPostReqBodySchemaModelPlatform {
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
        | "TDBANKCA";
}
