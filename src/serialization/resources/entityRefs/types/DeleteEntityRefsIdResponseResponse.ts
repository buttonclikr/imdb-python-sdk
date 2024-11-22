/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteEntityRefsIdResponseResponseDetails } from "./DeleteEntityRefsIdResponseResponseDetails";

export const DeleteEntityRefsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.DeleteEntityRefsIdResponseResponse.Raw,
    ButtonclikrApi.DeleteEntityRefsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: DeleteEntityRefsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteEntityRefsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: DeleteEntityRefsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
