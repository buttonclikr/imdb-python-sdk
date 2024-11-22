/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutReportsIdResponseResponseDetailsPage } from "./PutReportsIdResponseResponseDetailsPage";

export const PutReportsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutReportsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutReportsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutReportsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutReportsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutReportsIdResponseResponseDetailsPage.Raw | null;
    }
}
