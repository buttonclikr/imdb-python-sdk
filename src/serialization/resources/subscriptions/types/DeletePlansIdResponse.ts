/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeletePlansIdResponseResponse } from "./DeletePlansIdResponseResponse";
import { DeletePlansIdResponseDetails } from "./DeletePlansIdResponseDetails";

export const DeletePlansIdResponse: core.serialization.ObjectSchema<
    serializers.DeletePlansIdResponse.Raw,
    ButtonclikrApi.DeletePlansIdResponse
> = core.serialization.object({
    response: DeletePlansIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: DeletePlansIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeletePlansIdResponse {
    interface Raw {
        response?: DeletePlansIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: DeletePlansIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
