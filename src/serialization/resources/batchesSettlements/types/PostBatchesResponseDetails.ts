/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostBatchesResponseDetailsPage } from "./PostBatchesResponseDetailsPage";

export const PostBatchesResponseDetails: core.serialization.ObjectSchema<
    serializers.PostBatchesResponseDetails.Raw,
    ButtonclikrApi.PostBatchesResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostBatchesResponseDetailsPage.optional(),
});

export declare namespace PostBatchesResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostBatchesResponseDetailsPage.Raw | null;
    }
}
