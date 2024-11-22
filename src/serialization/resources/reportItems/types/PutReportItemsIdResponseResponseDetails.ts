/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutReportItemsIdResponseResponseDetailsPage } from "./PutReportItemsIdResponseResponseDetailsPage";

export const PutReportItemsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutReportItemsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutReportItemsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutReportItemsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutReportItemsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutReportItemsIdResponseResponseDetailsPage.Raw | null;
    }
}
