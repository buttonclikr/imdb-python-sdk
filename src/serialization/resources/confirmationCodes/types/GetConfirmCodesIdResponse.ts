/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetConfirmCodesIdResponseResponse } from "./GetConfirmCodesIdResponseResponse";
import { GetConfirmCodesIdResponseDetails } from "./GetConfirmCodesIdResponseDetails";

export const GetConfirmCodesIdResponse: core.serialization.ObjectSchema<
    serializers.GetConfirmCodesIdResponse.Raw,
    ButtonclikrApi.GetConfirmCodesIdResponse
> = core.serialization.object({
    response: GetConfirmCodesIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetConfirmCodesIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetConfirmCodesIdResponse {
    interface Raw {
        response?: GetConfirmCodesIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetConfirmCodesIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
