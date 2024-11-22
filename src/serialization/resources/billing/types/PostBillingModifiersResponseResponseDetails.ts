/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostBillingModifiersResponseResponseDetailsPage } from "./PostBillingModifiersResponseResponseDetailsPage";

export const PostBillingModifiersResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostBillingModifiersResponseResponseDetails.Raw,
    ButtonclikrApi.PostBillingModifiersResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostBillingModifiersResponseResponseDetailsPage.optional(),
});

export declare namespace PostBillingModifiersResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostBillingModifiersResponseResponseDetailsPage.Raw | null;
    }
}