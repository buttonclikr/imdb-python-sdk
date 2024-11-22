/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebacksIdResponseResponseDetails } from "./GetChargebacksIdResponseResponseDetails";

export const GetChargebacksIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetChargebacksIdResponseResponse.Raw,
    ButtonclikrApi.GetChargebacksIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetChargebacksIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetChargebacksIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetChargebacksIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
