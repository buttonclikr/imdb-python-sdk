/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutSubscriptionsIdResponseResponseDetails } from "./PutSubscriptionsIdResponseResponseDetails";

export const PutSubscriptionsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutSubscriptionsIdResponseResponse.Raw,
    ButtonclikrApi.PutSubscriptionsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutSubscriptionsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutSubscriptionsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutSubscriptionsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}