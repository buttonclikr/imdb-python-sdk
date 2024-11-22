/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutReportResultsIdResponseResponseDetails } from "./PutReportResultsIdResponseResponseDetails";

export const PutReportResultsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutReportResultsIdResponseResponse.Raw,
    ButtonclikrApi.PutReportResultsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutReportResultsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutReportResultsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutReportResultsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
