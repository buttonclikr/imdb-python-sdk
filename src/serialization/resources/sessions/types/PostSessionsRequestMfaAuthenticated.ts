/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostSessionsRequestMfaAuthenticated: core.serialization.Schema<
    serializers.PostSessionsRequestMfaAuthenticated.Raw,
    ButtonclikrApi.PostSessionsRequestMfaAuthenticated
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostSessionsRequestMfaAuthenticated {
    type Raw = "0" | "1";
}
