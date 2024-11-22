/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteFeesIdResponseResponseDetails } from "./DeleteFeesIdResponseResponseDetails";

export const DeleteFeesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.DeleteFeesIdResponseResponse.Raw,
    ButtonclikrApi.DeleteFeesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: DeleteFeesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteFeesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: DeleteFeesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}