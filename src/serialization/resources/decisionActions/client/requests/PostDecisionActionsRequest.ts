/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostDecisionActionsRequestAction } from "../../types/PostDecisionActionsRequestAction";
import { PostDecisionActionsRequestApplication } from "../../types/PostDecisionActionsRequestApplication";
import { PostDecisionActionsRequestScoreType } from "../../types/PostDecisionActionsRequestScoreType";
import { PostDecisionActionsRequestType } from "../../types/PostDecisionActionsRequestType";
import { PostDecisionActionsRequestInactive } from "../../types/PostDecisionActionsRequestInactive";
import { PostDecisionActionsRequestFrozen } from "../../types/PostDecisionActionsRequestFrozen";

export const PostDecisionActionsRequest: core.serialization.Schema<
    serializers.PostDecisionActionsRequest.Raw,
    ButtonclikrApi.PostDecisionActionsRequest
> = core.serialization.object({
    decision: core.serialization.unknown(),
    action: PostDecisionActionsRequestAction.optional(),
    application: PostDecisionActionsRequestApplication.optional(),
    scoreType: PostDecisionActionsRequestScoreType.optional(),
    type: PostDecisionActionsRequestType.optional(),
    field: core.serialization.unknown().optional(),
    data: core.serialization.unknown().optional(),
    message: core.serialization.unknown().optional(),
    code: core.serialization.unknown().optional(),
    score: core.serialization.unknown().optional(),
    grouping: core.serialization.unknown().optional(),
    inactive: PostDecisionActionsRequestInactive,
    frozen: PostDecisionActionsRequestFrozen,
});

export declare namespace PostDecisionActionsRequest {
    interface Raw {
        decision?: unknown;
        action?: PostDecisionActionsRequestAction.Raw | null;
        application?: PostDecisionActionsRequestApplication.Raw | null;
        scoreType?: PostDecisionActionsRequestScoreType.Raw | null;
        type?: PostDecisionActionsRequestType.Raw | null;
        field?: unknown | null;
        data?: unknown | null;
        message?: unknown | null;
        code?: unknown | null;
        score?: unknown | null;
        grouping?: unknown | null;
        inactive: PostDecisionActionsRequestInactive.Raw;
        frozen: PostDecisionActionsRequestFrozen.Raw;
    }
}