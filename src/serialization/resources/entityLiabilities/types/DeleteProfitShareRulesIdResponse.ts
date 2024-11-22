/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteProfitShareRulesIdResponseResponse } from "./DeleteProfitShareRulesIdResponseResponse";
import { DeleteProfitShareRulesIdResponseDetails } from "./DeleteProfitShareRulesIdResponseDetails";

export const DeleteProfitShareRulesIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteProfitShareRulesIdResponse.Raw,
    ButtonclikrApi.DeleteProfitShareRulesIdResponse
> = core.serialization.object({
    response: DeleteProfitShareRulesIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: DeleteProfitShareRulesIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteProfitShareRulesIdResponse {
    interface Raw {
        response?: DeleteProfitShareRulesIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: DeleteProfitShareRulesIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
