/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutBillingEventsIdResponseResponseDetails } from "./PutBillingEventsIdResponseResponseDetails";

export const PutBillingEventsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutBillingEventsIdResponseResponse.Raw,
    ButtonclikrApi.PutBillingEventsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutBillingEventsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutBillingEventsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutBillingEventsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}