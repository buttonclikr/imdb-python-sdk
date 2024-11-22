/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostFeesResponseDetailsPage } from "./PostFeesResponseDetailsPage";

export const PostFeesResponseDetails: core.serialization.ObjectSchema<
    serializers.PostFeesResponseDetails.Raw,
    ButtonclikrApi.PostFeesResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostFeesResponseDetailsPage.optional(),
});

export declare namespace PostFeesResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostFeesResponseDetailsPage.Raw | null;
    }
}