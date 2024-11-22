/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetRevShareSchedulesResponseResponseDetails } from "./GetRevShareSchedulesResponseResponseDetails";

export const GetRevShareSchedulesResponseResponse: core.serialization.ObjectSchema<
    serializers.GetRevShareSchedulesResponseResponse.Raw,
    ButtonclikrApi.GetRevShareSchedulesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetRevShareSchedulesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetRevShareSchedulesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetRevShareSchedulesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}