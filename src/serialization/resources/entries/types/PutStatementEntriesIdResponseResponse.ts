/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutStatementEntriesIdResponseResponseDetails } from "./PutStatementEntriesIdResponseResponseDetails";

export const PutStatementEntriesIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutStatementEntriesIdResponseResponse.Raw,
    ButtonclikrApi.PutStatementEntriesIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutStatementEntriesIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutStatementEntriesIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutStatementEntriesIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}