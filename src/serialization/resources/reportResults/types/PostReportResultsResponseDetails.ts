/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostReportResultsResponseDetailsPage } from "./PostReportResultsResponseDetailsPage";

export const PostReportResultsResponseDetails: core.serialization.ObjectSchema<
    serializers.PostReportResultsResponseDetails.Raw,
    ButtonclikrApi.PostReportResultsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostReportResultsResponseDetailsPage.optional(),
});

export declare namespace PostReportResultsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostReportResultsResponseDetailsPage.Raw | null;
    }
}
