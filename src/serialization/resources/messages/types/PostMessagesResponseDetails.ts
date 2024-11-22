/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostMessagesResponseDetailsPage } from "./PostMessagesResponseDetailsPage";

export const PostMessagesResponseDetails: core.serialization.ObjectSchema<
    serializers.PostMessagesResponseDetails.Raw,
    ButtonclikrApi.PostMessagesResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostMessagesResponseDetailsPage.optional(),
});

export declare namespace PostMessagesResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostMessagesResponseDetailsPage.Raw | null;
    }
}