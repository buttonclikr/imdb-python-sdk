/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostFilesResponseResponseDetailsPage } from "./PostFilesResponseResponseDetailsPage";

export const PostFilesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostFilesResponseResponseDetails.Raw,
    ButtonclikrApi.PostFilesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostFilesResponseResponseDetailsPage.optional(),
});

export declare namespace PostFilesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostFilesResponseResponseDetailsPage.Raw | null;
    }
}