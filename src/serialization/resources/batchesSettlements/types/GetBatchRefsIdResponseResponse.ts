/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBatchRefsIdResponseResponseDetails } from "./GetBatchRefsIdResponseResponseDetails";

export const GetBatchRefsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetBatchRefsIdResponseResponse.Raw,
    ButtonclikrApi.GetBatchRefsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetBatchRefsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetBatchRefsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetBatchRefsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}