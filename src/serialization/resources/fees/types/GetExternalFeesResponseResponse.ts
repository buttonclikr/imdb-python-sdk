/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetExternalFeesResponseResponseDetails } from "./GetExternalFeesResponseResponseDetails";

export const GetExternalFeesResponseResponse: core.serialization.ObjectSchema<
    serializers.GetExternalFeesResponseResponse.Raw,
    ButtonclikrApi.GetExternalFeesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetExternalFeesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetExternalFeesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetExternalFeesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}