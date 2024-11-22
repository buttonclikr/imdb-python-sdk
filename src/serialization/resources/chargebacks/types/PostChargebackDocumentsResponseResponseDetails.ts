/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostChargebackDocumentsResponseResponseDetailsPage } from "./PostChargebackDocumentsResponseResponseDetailsPage";

export const PostChargebackDocumentsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostChargebackDocumentsResponseResponseDetails.Raw,
    ButtonclikrApi.PostChargebackDocumentsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostChargebackDocumentsResponseResponseDetailsPage.optional(),
});

export declare namespace PostChargebackDocumentsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostChargebackDocumentsResponseResponseDetailsPage.Raw | null;
    }
}