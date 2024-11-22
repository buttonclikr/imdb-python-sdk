/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetOrgEntitiesIdResponseResponseDetails } from "./GetOrgEntitiesIdResponseResponseDetails";

export const GetOrgEntitiesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetOrgEntitiesIdResponseResponse.Raw,
    ButtonclikrApi.GetOrgEntitiesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetOrgEntitiesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetOrgEntitiesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetOrgEntitiesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
