/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteMappingsIdResponseResponseDetails } from "./DeleteMappingsIdResponseResponseDetails";

export const DeleteMappingsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.DeleteMappingsIdResponseResponse.Raw,
    ButtonclikrApi.DeleteMappingsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: DeleteMappingsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteMappingsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: DeleteMappingsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
