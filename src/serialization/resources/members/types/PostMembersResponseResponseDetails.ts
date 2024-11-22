/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostMembersResponseResponseDetailsPage } from "./PostMembersResponseResponseDetailsPage";

export const PostMembersResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostMembersResponseResponseDetails.Raw,
    ButtonclikrApi.PostMembersResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostMembersResponseResponseDetailsPage.optional(),
});

export declare namespace PostMembersResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostMembersResponseResponseDetailsPage.Raw | null;
    }
}