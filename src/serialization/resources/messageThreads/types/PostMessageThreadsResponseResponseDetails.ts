/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostMessageThreadsResponseResponseDetailsPage } from "./PostMessageThreadsResponseResponseDetailsPage";

export const PostMessageThreadsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostMessageThreadsResponseResponseDetails.Raw,
    ButtonclikrApi.PostMessageThreadsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostMessageThreadsResponseResponseDetailsPage.optional(),
});

export declare namespace PostMessageThreadsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostMessageThreadsResponseResponseDetailsPage.Raw | null;
    }
}
