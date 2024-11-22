/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostTxnSessionsResponseResponseDetailsPage } from "./PostTxnSessionsResponseResponseDetailsPage";

export const PostTxnSessionsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostTxnSessionsResponseResponseDetails.Raw,
    ButtonclikrApi.PostTxnSessionsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostTxnSessionsResponseResponseDetailsPage.optional(),
});

export declare namespace PostTxnSessionsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostTxnSessionsResponseResponseDetailsPage.Raw | null;
    }
}
