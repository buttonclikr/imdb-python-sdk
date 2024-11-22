/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostFeeModifiersResponseResponseDetailsPage } from "./PostFeeModifiersResponseResponseDetailsPage";

export const PostFeeModifiersResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostFeeModifiersResponseResponseDetails.Raw,
    ButtonclikrApi.PostFeeModifiersResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostFeeModifiersResponseResponseDetailsPage.optional(),
});

export declare namespace PostFeeModifiersResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostFeeModifiersResponseResponseDetailsPage.Raw | null;
    }
}
