/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostOrgsResponseDetailsPage } from "./PostOrgsResponseDetailsPage";

export const PostOrgsResponseDetails: core.serialization.ObjectSchema<
    serializers.PostOrgsResponseDetails.Raw,
    ButtonclikrApi.PostOrgsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostOrgsResponseDetailsPage.optional(),
});

export declare namespace PostOrgsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostOrgsResponseDetailsPage.Raw | null;
    }
}
