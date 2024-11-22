/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAssessmentsIdResponseResponse } from "./GetAssessmentsIdResponseResponse";
import { GetAssessmentsIdResponseDetails } from "./GetAssessmentsIdResponseDetails";

export const GetAssessmentsIdResponse: core.serialization.ObjectSchema<
    serializers.GetAssessmentsIdResponse.Raw,
    ButtonclikrApi.GetAssessmentsIdResponse
> = core.serialization.object({
    response: GetAssessmentsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetAssessmentsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetAssessmentsIdResponse {
    interface Raw {
        response?: GetAssessmentsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetAssessmentsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
