/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTxnReportsResponseResponseDetails } from "./GetTxnReportsResponseResponseDetails";

export const GetTxnReportsResponseResponse: core.serialization.ObjectSchema<
    serializers.GetTxnReportsResponseResponse.Raw,
    ButtonclikrApi.GetTxnReportsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetTxnReportsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetTxnReportsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetTxnReportsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
