/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteFacilitatorsIdResponseResponseDetails } from "./DeleteFacilitatorsIdResponseResponseDetails";

export const DeleteFacilitatorsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.DeleteFacilitatorsIdResponseResponse.Raw,
    ButtonclikrApi.DeleteFacilitatorsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: DeleteFacilitatorsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteFacilitatorsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: DeleteFacilitatorsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}