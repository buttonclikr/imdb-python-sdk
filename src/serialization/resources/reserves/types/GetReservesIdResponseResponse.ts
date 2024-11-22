/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetReservesIdResponseResponseDetails } from "./GetReservesIdResponseResponseDetails";

export const GetReservesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetReservesIdResponseResponse.Raw,
    ButtonclikrApi.GetReservesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetReservesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetReservesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetReservesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
