/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTeamsResponseResponse } from "./GetTeamsResponseResponse";
import { GetTeamsResponseDetails } from "./GetTeamsResponseDetails";

export const GetTeamsResponse: core.serialization.ObjectSchema<
    serializers.GetTeamsResponse.Raw,
    ButtonclikrApi.GetTeamsResponse
> = core.serialization.object({
    response: GetTeamsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetTeamsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetTeamsResponse {
    interface Raw {
        response?: GetTeamsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetTeamsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}