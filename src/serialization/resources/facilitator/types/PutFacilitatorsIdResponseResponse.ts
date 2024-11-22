/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutFacilitatorsIdResponseResponseDetails } from "./PutFacilitatorsIdResponseResponseDetails";

export const PutFacilitatorsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutFacilitatorsIdResponseResponse.Raw,
    ButtonclikrApi.PutFacilitatorsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutFacilitatorsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutFacilitatorsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutFacilitatorsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}