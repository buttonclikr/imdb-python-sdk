/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetPlansIdResponseResponse } from "./GetPlansIdResponseResponse";
import { GetPlansIdResponseDetails } from "./GetPlansIdResponseDetails";

export const GetPlansIdResponse: core.serialization.ObjectSchema<
    serializers.GetPlansIdResponse.Raw,
    ButtonclikrApi.GetPlansIdResponse
> = core.serialization.object({
    response: GetPlansIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetPlansIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetPlansIdResponse {
    interface Raw {
        response?: GetPlansIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetPlansIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}