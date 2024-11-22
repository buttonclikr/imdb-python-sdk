/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingEventsResponseResponse } from "./GetBillingEventsResponseResponse";
import { GetBillingEventsResponseDetails } from "./GetBillingEventsResponseDetails";

export const GetBillingEventsResponse: core.serialization.ObjectSchema<
    serializers.GetBillingEventsResponse.Raw,
    ButtonclikrApi.GetBillingEventsResponse
> = core.serialization.object({
    response: GetBillingEventsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetBillingEventsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetBillingEventsResponse {
    interface Raw {
        response?: GetBillingEventsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetBillingEventsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
