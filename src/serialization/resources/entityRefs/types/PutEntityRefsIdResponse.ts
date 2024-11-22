/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutEntityRefsIdResponseResponse } from "./PutEntityRefsIdResponseResponse";
import { PutEntityRefsIdResponseDetails } from "./PutEntityRefsIdResponseDetails";

export const PutEntityRefsIdResponse: core.serialization.ObjectSchema<
    serializers.PutEntityRefsIdResponse.Raw,
    ButtonclikrApi.PutEntityRefsIdResponse
> = core.serialization.object({
    response: PutEntityRefsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PutEntityRefsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutEntityRefsIdResponse {
    interface Raw {
        response?: PutEntityRefsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PutEntityRefsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
