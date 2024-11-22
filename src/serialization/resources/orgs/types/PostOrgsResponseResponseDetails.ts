/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostOrgsResponseResponseDetailsPage } from "./PostOrgsResponseResponseDetailsPage";

export const PostOrgsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostOrgsResponseResponseDetails.Raw,
    ButtonclikrApi.PostOrgsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostOrgsResponseResponseDetailsPage.optional(),
});

export declare namespace PostOrgsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostOrgsResponseResponseDetailsPage.Raw | null;
    }
}
