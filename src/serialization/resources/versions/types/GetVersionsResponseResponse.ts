/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetVersionsResponseResponseDetails } from "./GetVersionsResponseResponseDetails";

export const GetVersionsResponseResponse: core.serialization.ObjectSchema<
    serializers.GetVersionsResponseResponse.Raw,
    ButtonclikrApi.GetVersionsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetVersionsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetVersionsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetVersionsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
