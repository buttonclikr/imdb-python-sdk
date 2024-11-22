/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostSessionsIdResponseResponseDetailsPage } from "./PostSessionsIdResponseResponseDetailsPage";

export const PostSessionsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostSessionsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PostSessionsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostSessionsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PostSessionsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostSessionsIdResponseResponseDetailsPage.Raw | null;
    }
}
