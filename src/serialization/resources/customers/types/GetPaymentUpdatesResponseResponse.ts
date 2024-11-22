/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetPaymentUpdatesResponseResponseDetails } from "./GetPaymentUpdatesResponseResponseDetails";

export const GetPaymentUpdatesResponseResponse: core.serialization.ObjectSchema<
    serializers.GetPaymentUpdatesResponseResponse.Raw,
    ButtonclikrApi.GetPaymentUpdatesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetPaymentUpdatesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetPaymentUpdatesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetPaymentUpdatesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
