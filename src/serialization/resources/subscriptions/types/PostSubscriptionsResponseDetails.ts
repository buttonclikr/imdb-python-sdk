/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostSubscriptionsResponseDetailsPage } from "./PostSubscriptionsResponseDetailsPage";

export const PostSubscriptionsResponseDetails: core.serialization.ObjectSchema<
    serializers.PostSubscriptionsResponseDetails.Raw,
    ButtonclikrApi.PostSubscriptionsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostSubscriptionsResponseDetailsPage.optional(),
});

export declare namespace PostSubscriptionsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostSubscriptionsResponseDetailsPage.Raw | null;
    }
}