/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetApikeysResponseResponseDetails } from "./GetApikeysResponseResponseDetails";

export const GetApikeysResponseResponse: core.serialization.ObjectSchema<
    serializers.GetApikeysResponseResponse.Raw,
    ButtonclikrApi.GetApikeysResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetApikeysResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetApikeysResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetApikeysResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
