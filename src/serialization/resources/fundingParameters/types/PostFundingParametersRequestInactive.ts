/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostFundingParametersRequestInactive: core.serialization.Schema<
    serializers.PostFundingParametersRequestInactive.Raw,
    ButtonclikrApi.PostFundingParametersRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostFundingParametersRequestInactive {
    type Raw = "0" | "1";
}