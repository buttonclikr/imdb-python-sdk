/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutFeeModifiersIdResponseResponse } from "./PutFeeModifiersIdResponseResponse";
import { PutFeeModifiersIdResponseDetails } from "./PutFeeModifiersIdResponseDetails";

export const PutFeeModifiersIdResponse: core.serialization.ObjectSchema<
    serializers.PutFeeModifiersIdResponse.Raw,
    ButtonclikrApi.PutFeeModifiersIdResponse
> = core.serialization.object({
    response: PutFeeModifiersIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PutFeeModifiersIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutFeeModifiersIdResponse {
    interface Raw {
        response?: PutFeeModifiersIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PutFeeModifiersIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
