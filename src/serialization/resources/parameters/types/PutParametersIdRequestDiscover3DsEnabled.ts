/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutParametersIdRequestDiscover3DsEnabled: core.serialization.Schema<
    serializers.PutParametersIdRequestDiscover3DsEnabled.Raw,
    ButtonclikrApi.PutParametersIdRequestDiscover3DsEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutParametersIdRequestDiscover3DsEnabled {
    type Raw = "0" | "1";
}