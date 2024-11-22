/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetPendingEntriesIdResponseResponseDetails } from "./GetPendingEntriesIdResponseResponseDetails";

export const GetPendingEntriesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetPendingEntriesIdResponseResponse.Raw,
    ButtonclikrApi.GetPendingEntriesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetPendingEntriesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetPendingEntriesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetPendingEntriesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}