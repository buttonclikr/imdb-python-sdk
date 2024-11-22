/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutVendorsIdResponseResponseDetails } from "./PutVendorsIdResponseResponseDetails";

export const PutVendorsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutVendorsIdResponseResponse.Raw,
    ButtonclikrApi.PutVendorsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutVendorsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutVendorsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutVendorsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
