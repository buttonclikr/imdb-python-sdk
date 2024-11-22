/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteFeeRulesIdResponseResponseDetails } from "./DeleteFeeRulesIdResponseResponseDetails";

export const DeleteFeeRulesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.DeleteFeeRulesIdResponseResponse.Raw,
    ButtonclikrApi.DeleteFeeRulesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: DeleteFeeRulesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteFeeRulesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: DeleteFeeRulesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}