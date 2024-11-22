/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostParametersRequestGooglePayEnabled: core.serialization.Schema<
    serializers.PostParametersRequestGooglePayEnabled.Raw,
    ButtonclikrApi.PostParametersRequestGooglePayEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostParametersRequestGooglePayEnabled {
    type Raw = "0" | "1";
}
