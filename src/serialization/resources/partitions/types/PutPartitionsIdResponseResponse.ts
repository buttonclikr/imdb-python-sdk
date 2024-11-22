/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutPartitionsIdResponseResponseDetails } from "./PutPartitionsIdResponseResponseDetails";

export const PutPartitionsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutPartitionsIdResponseResponse.Raw,
    ButtonclikrApi.PutPartitionsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutPartitionsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutPartitionsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutPartitionsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
