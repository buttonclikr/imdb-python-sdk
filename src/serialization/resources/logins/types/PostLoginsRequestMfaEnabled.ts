/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostLoginsRequestMfaEnabled: core.serialization.Schema<
    serializers.PostLoginsRequestMfaEnabled.Raw,
    ButtonclikrApi.PostLoginsRequestMfaEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostLoginsRequestMfaEnabled {
    type Raw = "0" | "1";
}