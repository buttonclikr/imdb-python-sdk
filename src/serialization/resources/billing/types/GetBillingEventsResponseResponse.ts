/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingEventsResponseResponseDetails } from "./GetBillingEventsResponseResponseDetails";

export const GetBillingEventsResponseResponse: core.serialization.ObjectSchema<
    serializers.GetBillingEventsResponseResponse.Raw,
    ButtonclikrApi.GetBillingEventsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetBillingEventsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetBillingEventsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetBillingEventsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}