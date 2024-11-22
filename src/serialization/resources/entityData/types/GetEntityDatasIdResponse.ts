/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityDatasIdResponseResponse } from "./GetEntityDatasIdResponseResponse";
import { GetEntityDatasIdResponseDetails } from "./GetEntityDatasIdResponseDetails";

export const GetEntityDatasIdResponse: core.serialization.ObjectSchema<
    serializers.GetEntityDatasIdResponse.Raw,
    ButtonclikrApi.GetEntityDatasIdResponse
> = core.serialization.object({
    response: GetEntityDatasIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetEntityDatasIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetEntityDatasIdResponse {
    interface Raw {
        response?: GetEntityDatasIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetEntityDatasIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}