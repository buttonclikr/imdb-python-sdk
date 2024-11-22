/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutAlertsIdResponseResponse } from "./PutAlertsIdResponseResponse";
import { PutAlertsIdResponseDetails } from "./PutAlertsIdResponseDetails";

export const PutAlertsIdResponse: core.serialization.ObjectSchema<
    serializers.PutAlertsIdResponse.Raw,
    ButtonclikrApi.PutAlertsIdResponse
> = core.serialization.object({
    response: PutAlertsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PutAlertsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutAlertsIdResponse {
    interface Raw {
        response?: PutAlertsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PutAlertsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}