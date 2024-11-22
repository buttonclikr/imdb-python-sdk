/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFeeModifiersResponseResponse } from "./GetFeeModifiersResponseResponse";
import { GetFeeModifiersResponseDetails } from "./GetFeeModifiersResponseDetails";

export const GetFeeModifiersResponse: core.serialization.ObjectSchema<
    serializers.GetFeeModifiersResponse.Raw,
    ButtonclikrApi.GetFeeModifiersResponse
> = core.serialization.object({
    response: GetFeeModifiersResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetFeeModifiersResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetFeeModifiersResponse {
    interface Raw {
        response?: GetFeeModifiersResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetFeeModifiersResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
