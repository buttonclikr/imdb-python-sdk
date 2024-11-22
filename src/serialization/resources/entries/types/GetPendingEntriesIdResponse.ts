/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetPendingEntriesIdResponseResponse } from "./GetPendingEntriesIdResponseResponse";
import { GetPendingEntriesIdResponseDetails } from "./GetPendingEntriesIdResponseDetails";

export const GetPendingEntriesIdResponse: core.serialization.ObjectSchema<
    serializers.GetPendingEntriesIdResponse.Raw,
    ButtonclikrApi.GetPendingEntriesIdResponse
> = core.serialization.object({
    response: GetPendingEntriesIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetPendingEntriesIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetPendingEntriesIdResponse {
    interface Raw {
        response?: GetPendingEntriesIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetPendingEntriesIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}