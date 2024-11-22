/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetVendorsIdResponseResponseDetails } from "./GetVendorsIdResponseResponseDetails";

export const GetVendorsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetVendorsIdResponseResponse.Raw,
    ButtonclikrApi.GetVendorsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetVendorsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetVendorsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetVendorsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
