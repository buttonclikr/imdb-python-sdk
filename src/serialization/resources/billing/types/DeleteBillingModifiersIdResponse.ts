/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteBillingModifiersIdResponseResponse } from "./DeleteBillingModifiersIdResponseResponse";
import { DeleteBillingModifiersIdResponseDetails } from "./DeleteBillingModifiersIdResponseDetails";

export const DeleteBillingModifiersIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteBillingModifiersIdResponse.Raw,
    ButtonclikrApi.DeleteBillingModifiersIdResponse
> = core.serialization.object({
    response: DeleteBillingModifiersIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: DeleteBillingModifiersIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace DeleteBillingModifiersIdResponse {
    interface Raw {
        response?: DeleteBillingModifiersIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: DeleteBillingModifiersIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}