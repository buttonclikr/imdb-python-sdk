/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetOrgEntitiesResponseResponse } from "./GetOrgEntitiesResponseResponse";
import { GetOrgEntitiesResponseDetails } from "./GetOrgEntitiesResponseDetails";

export const GetOrgEntitiesResponse: core.serialization.ObjectSchema<
    serializers.GetOrgEntitiesResponse.Raw,
    ButtonclikrApi.GetOrgEntitiesResponse
> = core.serialization.object({
    response: GetOrgEntitiesResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetOrgEntitiesResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetOrgEntitiesResponse {
    interface Raw {
        response?: GetOrgEntitiesResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetOrgEntitiesResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
