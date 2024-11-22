/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutReportItemsIdResponseResponseDetails } from "./PutReportItemsIdResponseResponseDetails";

export const PutReportItemsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.PutReportItemsIdResponseResponse.Raw,
    ButtonclikrApi.PutReportItemsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PutReportItemsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutReportItemsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PutReportItemsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
