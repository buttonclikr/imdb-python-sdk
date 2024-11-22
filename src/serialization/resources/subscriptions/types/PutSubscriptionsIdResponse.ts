/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutSubscriptionsIdResponseResponse } from "./PutSubscriptionsIdResponseResponse";
import { PutSubscriptionsIdResponseDetails } from "./PutSubscriptionsIdResponseDetails";

export const PutSubscriptionsIdResponse: core.serialization.ObjectSchema<
    serializers.PutSubscriptionsIdResponse.Raw,
    ButtonclikrApi.PutSubscriptionsIdResponse
> = core.serialization.object({
    response: PutSubscriptionsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PutSubscriptionsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutSubscriptionsIdResponse {
    interface Raw {
        response?: PutSubscriptionsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PutSubscriptionsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}