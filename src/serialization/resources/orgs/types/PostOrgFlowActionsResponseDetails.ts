/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostOrgFlowActionsResponseDetailsPage } from "./PostOrgFlowActionsResponseDetailsPage";

export const PostOrgFlowActionsResponseDetails: core.serialization.ObjectSchema<
    serializers.PostOrgFlowActionsResponseDetails.Raw,
    ButtonclikrApi.PostOrgFlowActionsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostOrgFlowActionsResponseDetailsPage.optional(),
});

export declare namespace PostOrgFlowActionsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostOrgFlowActionsResponseDetailsPage.Raw | null;
    }
}