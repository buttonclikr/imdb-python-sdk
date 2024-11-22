/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutOrgsIdResponseResponseDetails } from "./PutOrgsIdResponseResponseDetails";

export const PutOrgsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutOrgsIdResponseResponse.Raw,
    ButtonclikrApi.PutOrgsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutOrgsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutOrgsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutOrgsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
