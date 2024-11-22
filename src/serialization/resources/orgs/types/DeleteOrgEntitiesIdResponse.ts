/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteOrgEntitiesIdResponseResponse } from "./DeleteOrgEntitiesIdResponseResponse";
import { DeleteOrgEntitiesIdResponseDetails } from "./DeleteOrgEntitiesIdResponseDetails";

export const DeleteOrgEntitiesIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteOrgEntitiesIdResponse.Raw,
    ButtonclikrApi.DeleteOrgEntitiesIdResponse
> = core.serialization.object({
    response: DeleteOrgEntitiesIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: DeleteOrgEntitiesIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteOrgEntitiesIdResponse {
    interface Raw {
        response?: DeleteOrgEntitiesIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: DeleteOrgEntitiesIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
