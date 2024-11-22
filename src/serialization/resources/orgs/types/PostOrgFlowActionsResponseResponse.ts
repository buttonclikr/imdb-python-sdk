/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostOrgFlowActionsResponseResponseDetails } from "./PostOrgFlowActionsResponseResponseDetails";

export const PostOrgFlowActionsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostOrgFlowActionsResponseResponse.Raw,
    ButtonclikrApi.PostOrgFlowActionsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostOrgFlowActionsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostOrgFlowActionsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostOrgFlowActionsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}