/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetLoginsIdResponseResponse } from "./GetLoginsIdResponseResponse";
import { GetLoginsIdResponseDetails } from "./GetLoginsIdResponseDetails";

export const GetLoginsIdResponse: core.serialization.ObjectSchema<
    serializers.GetLoginsIdResponse.Raw,
    ButtonclikrApi.GetLoginsIdResponse
> = core.serialization.object({
    response: GetLoginsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetLoginsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetLoginsIdResponse {
    interface Raw {
        response?: GetLoginsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetLoginsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}