/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostTerminalRefsRequestPlatform: core.serialization.Schema<
    serializers.PostTerminalRefsRequestPlatform.Raw,
    ButtonclikrApi.PostTerminalRefsRequestPlatform
> = core.serialization.enum_(["ELAVON", "FIRSTDATA", "VCORE", "VANTIV", "WELLSFARGO", "SOUNDPAYMENTS", "bigbux"]);

export declare namespace PostTerminalRefsRequestPlatform {
    type Raw = "ELAVON" | "FIRSTDATA" | "VCORE" | "VANTIV" | "WELLSFARGO" | "SOUNDPAYMENTS" | "bigbux";
}
