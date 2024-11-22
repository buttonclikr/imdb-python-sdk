/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteDisbursementEntriesIdResponseResponseDetailsPage } from "./DeleteDisbursementEntriesIdResponseResponseDetailsPage";

export const DeleteDisbursementEntriesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteDisbursementEntriesIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteDisbursementEntriesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteDisbursementEntriesIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteDisbursementEntriesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteDisbursementEntriesIdResponseResponseDetailsPage.Raw | null;
    }
}
