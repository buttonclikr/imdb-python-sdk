/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostParametersRequestMc3DsEnabled: core.serialization.Schema<
    serializers.PostParametersRequestMc3DsEnabled.Raw,
    ButtonclikrApi.PostParametersRequestMc3DsEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostParametersRequestMc3DsEnabled {
    type Raw = "0" | "1";
}
