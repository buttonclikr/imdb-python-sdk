/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingModifiersIdResponseResponseDetails } from "./GetBillingModifiersIdResponseResponseDetails";

export const GetBillingModifiersIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetBillingModifiersIdResponseResponse.Raw,
    ButtonclikrApi.GetBillingModifiersIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetBillingModifiersIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetBillingModifiersIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetBillingModifiersIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
