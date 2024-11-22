/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingEventsIdResponseResponse } from "./GetBillingEventsIdResponseResponse";
import { GetBillingEventsIdResponseDetails } from "./GetBillingEventsIdResponseDetails";

export const GetBillingEventsIdResponse: core.serialization.ObjectSchema<
    serializers.GetBillingEventsIdResponse.Raw,
    ButtonclikrApi.GetBillingEventsIdResponse
> = core.serialization.object({
    response: GetBillingEventsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetBillingEventsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetBillingEventsIdResponse {
    interface Raw {
        response?: GetBillingEventsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetBillingEventsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}