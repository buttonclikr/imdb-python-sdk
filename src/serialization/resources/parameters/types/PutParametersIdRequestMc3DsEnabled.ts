/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutParametersIdRequestMc3DsEnabled: core.serialization.Schema<
    serializers.PutParametersIdRequestMc3DsEnabled.Raw,
    ButtonclikrApi.PutParametersIdRequestMc3DsEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutParametersIdRequestMc3DsEnabled {
    type Raw = "0" | "1";
}