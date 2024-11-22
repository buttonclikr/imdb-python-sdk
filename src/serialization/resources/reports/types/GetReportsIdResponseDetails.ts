/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetReportsIdResponseDetailsPage } from "./GetReportsIdResponseDetailsPage";

export const GetReportsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetReportsIdResponseDetails.Raw,
    ButtonclikrApi.GetReportsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetReportsIdResponseDetailsPage.optional(),
});

export declare namespace GetReportsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetReportsIdResponseDetailsPage.Raw | null;
    }
}
