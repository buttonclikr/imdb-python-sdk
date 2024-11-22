/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostConfigurationStagesResponseResponseDetails } from "./PostConfigurationStagesResponseResponseDetails";

export const PostConfigurationStagesResponseResponse: core.serialization.ObjectSchema<
    serializers.PostConfigurationStagesResponseResponse.Raw,
    ButtonclikrApi.PostConfigurationStagesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostConfigurationStagesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostConfigurationStagesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostConfigurationStagesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}