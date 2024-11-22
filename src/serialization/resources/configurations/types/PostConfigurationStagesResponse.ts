/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostConfigurationStagesResponseResponse } from "./PostConfigurationStagesResponseResponse";

export const PostConfigurationStagesResponse: core.serialization.ObjectSchema<
    serializers.PostConfigurationStagesResponse.Raw,
    ButtonclikrApi.PostConfigurationStagesResponse
> = core.serialization.object({
    response: PostConfigurationStagesResponseResponse.optional(),
});

export declare namespace PostConfigurationStagesResponse {
    interface Raw {
        response?: PostConfigurationStagesResponseResponse.Raw | null;
    }
}
