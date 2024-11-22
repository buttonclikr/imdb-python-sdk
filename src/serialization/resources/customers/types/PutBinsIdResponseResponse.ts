/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutBinsIdResponseResponseDetails } from "./PutBinsIdResponseResponseDetails";

export const PutBinsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutBinsIdResponseResponse.Raw,
    ButtonclikrApi.PutBinsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutBinsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutBinsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutBinsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
