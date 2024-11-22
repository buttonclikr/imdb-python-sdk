/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutBatchesIdResponseResponseDetailsPage } from "./PutBatchesIdResponseResponseDetailsPage";

export const PutBatchesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutBatchesIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutBatchesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutBatchesIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutBatchesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutBatchesIdResponseResponseDetailsPage.Raw | null;
    }
}
