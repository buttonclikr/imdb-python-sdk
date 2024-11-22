/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostDecisionsRequestApplication } from "../../types/PostDecisionsRequestApplication";
import { PostDecisionsRequestType } from "../../types/PostDecisionsRequestType";
import { PostDecisionsRequestTarget } from "../../types/PostDecisionsRequestTarget";
import { PostDecisionsRequestAction } from "../../types/PostDecisionsRequestAction";
import { PostDecisionsRequestValue } from "../../types/PostDecisionsRequestValue";
import { PostDecisionsRequestPeriod } from "../../types/PostDecisionsRequestPeriod";
import { PostDecisionsRequestUseCache } from "../../types/PostDecisionsRequestUseCache";
import { PostDecisionsRequestInactive } from "../../types/PostDecisionsRequestInactive";
import { PostDecisionsRequestFrozen } from "../../types/PostDecisionsRequestFrozen";

export const PostDecisionsRequest: core.serialization.Schema<
    serializers.PostDecisionsRequest.Raw,
    ButtonclikrApi.PostDecisionsRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    org: core.serialization.unknown().optional(),
    entity: core.serialization.unknown().optional(),
    decision: core.serialization.unknown().optional(),
    division: core.serialization.unknown().optional(),
    partition: core.serialization.unknown().optional(),
    application: PostDecisionsRequestApplication,
    level: core.serialization.unknown(),
    type: PostDecisionsRequestType,
    target: PostDecisionsRequestTarget,
    action: PostDecisionsRequestAction,
    sequence: core.serialization.unknown().optional(),
    amount: core.serialization.unknown().optional(),
    value: PostDecisionsRequestValue,
    period: PostDecisionsRequestPeriod,
    periodFactor: core.serialization.unknown(),
    schedule: core.serialization.unknown().optional(),
    scheduleFactor: core.serialization.unknown(),
    start: core.serialization.unknown(),
    finish: core.serialization.unknown().optional(),
    low: core.serialization.unknown(),
    high: core.serialization.unknown().optional(),
    useCache: PostDecisionsRequestUseCache,
    cacheTime: core.serialization.unknown().optional(),
    options: core.serialization.unknown().optional(),
    additionalOptions: core.serialization.unknown().optional(),
    errorMessage: core.serialization.unknown().optional(),
    reason: core.serialization.unknown().optional(),
    inactive: PostDecisionsRequestInactive,
    frozen: PostDecisionsRequestFrozen,
});

export declare namespace PostDecisionsRequest {
    interface Raw {
        login?: unknown;
        org?: unknown | null;
        entity?: unknown | null;
        decision?: unknown | null;
        division?: unknown | null;
        partition?: unknown | null;
        application: PostDecisionsRequestApplication.Raw;
        level?: unknown;
        type: PostDecisionsRequestType.Raw;
        target: PostDecisionsRequestTarget.Raw;
        action: PostDecisionsRequestAction.Raw;
        sequence?: unknown | null;
        amount?: unknown | null;
        value: PostDecisionsRequestValue.Raw;
        period: PostDecisionsRequestPeriod.Raw;
        periodFactor?: unknown;
        schedule?: unknown | null;
        scheduleFactor?: unknown;
        start?: unknown;
        finish?: unknown | null;
        low?: unknown;
        high?: unknown | null;
        useCache: PostDecisionsRequestUseCache.Raw;
        cacheTime?: unknown | null;
        options?: unknown | null;
        additionalOptions?: unknown | null;
        errorMessage?: unknown | null;
        reason?: unknown | null;
        inactive: PostDecisionsRequestInactive.Raw;
        frozen: PostDecisionsRequestFrozen.Raw;
    }
}