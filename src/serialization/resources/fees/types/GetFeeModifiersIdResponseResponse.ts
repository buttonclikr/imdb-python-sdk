/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFeeModifiersIdResponseResponseDetails } from "./GetFeeModifiersIdResponseResponseDetails";

export const GetFeeModifiersIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetFeeModifiersIdResponseResponse.Raw,
    ButtonclikrApi.GetFeeModifiersIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetFeeModifiersIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetFeeModifiersIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetFeeModifiersIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
