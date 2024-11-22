/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteFeeModifiersIdResponseResponseDetails } from "./DeleteFeeModifiersIdResponseResponseDetails";

export const DeleteFeeModifiersIdResponseResponse: core.serialization.ObjectSchema<
    serializers.DeleteFeeModifiersIdResponseResponse.Raw,
    ButtonclikrApi.DeleteFeeModifiersIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: DeleteFeeModifiersIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteFeeModifiersIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: DeleteFeeModifiersIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}