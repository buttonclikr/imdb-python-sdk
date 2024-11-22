/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteEntityRefsIdResponseResponse } from "./DeleteEntityRefsIdResponseResponse";
import { DeleteEntityRefsIdResponseDetails } from "./DeleteEntityRefsIdResponseDetails";

export const DeleteEntityRefsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteEntityRefsIdResponse.Raw,
    ButtonclikrApi.DeleteEntityRefsIdResponse
> = core.serialization.object({
    response: DeleteEntityRefsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: DeleteEntityRefsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteEntityRefsIdResponse {
    interface Raw {
        response?: DeleteEntityRefsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: DeleteEntityRefsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}