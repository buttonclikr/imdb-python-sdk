/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostDecisionActionsResponseResponseDetailsPage } from "./PostDecisionActionsResponseResponseDetailsPage";

export const PostDecisionActionsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostDecisionActionsResponseResponseDetails.Raw,
    ButtonclikrApi.PostDecisionActionsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostDecisionActionsResponseResponseDetailsPage.optional(),
});

export declare namespace PostDecisionActionsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostDecisionActionsResponseResponseDetailsPage.Raw | null;
    }
}
