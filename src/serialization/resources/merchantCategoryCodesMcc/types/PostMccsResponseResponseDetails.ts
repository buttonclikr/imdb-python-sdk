/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostMccsResponseResponseDetailsPage } from "./PostMccsResponseResponseDetailsPage";

export const PostMccsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostMccsResponseResponseDetails.Raw,
    ButtonclikrApi.PostMccsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostMccsResponseResponseDetailsPage.optional(),
});

export declare namespace PostMccsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostMccsResponseResponseDetailsPage.Raw | null;
    }
}
