/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostAssessmentsResponseResponse } from "./PostAssessmentsResponseResponse";

export const PostAssessmentsResponse: core.serialization.ObjectSchema<
    serializers.PostAssessmentsResponse.Raw,
    ButtonclikrApi.PostAssessmentsResponse
> = core.serialization.object({
    response: PostAssessmentsResponseResponse.optional(),
});

export declare namespace PostAssessmentsResponse {
    interface Raw {
        response?: PostAssessmentsResponseResponse.Raw | null;
    }
}
