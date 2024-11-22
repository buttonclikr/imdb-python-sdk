/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteReportsIdResponseDetailsPage } from "./DeleteReportsIdResponseDetailsPage";

export const DeleteReportsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteReportsIdResponseDetails.Raw,
    ButtonclikrApi.DeleteReportsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteReportsIdResponseDetailsPage.optional(),
});

export declare namespace DeleteReportsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteReportsIdResponseDetailsPage.Raw | null;
    }
}