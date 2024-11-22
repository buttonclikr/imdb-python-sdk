/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostPlansRequestUm } from "../../types/PostPlansRequestUm";
import { PostPlansRequestType } from "../../types/PostPlansRequestType";
import { PostPlansRequestInactive } from "../../types/PostPlansRequestInactive";
import { PostPlansRequestFrozen } from "../../types/PostPlansRequestFrozen";

export const PostPlansRequest: core.serialization.Schema<
    serializers.PostPlansRequest.Raw,
    ButtonclikrApi.PostPlansRequest
> = core.serialization.object({
    amount: core.serialization.unknown(),
    billing: core.serialization.unknown().optional(),
    order: core.serialization.unknown().optional(),
    txnDescription: core.serialization.unknown().optional(),
    description: core.serialization.unknown().optional(),
    maxFailures: core.serialization.unknown().optional(),
    merchant: core.serialization.unknown(),
    name: core.serialization.unknown().optional(),
    schedule: core.serialization.string(),
    scheduleFactor: core.serialization.unknown(),
    um: PostPlansRequestUm,
    type: PostPlansRequestType,
    inactive: PostPlansRequestInactive,
    frozen: PostPlansRequestFrozen,
});

export declare namespace PostPlansRequest {
    interface Raw {
        amount?: unknown;
        billing?: unknown | null;
        order?: unknown | null;
        txnDescription?: unknown | null;
        description?: unknown | null;
        maxFailures?: unknown | null;
        merchant?: unknown;
        name?: unknown | null;
        schedule: string;
        scheduleFactor?: unknown;
        um: PostPlansRequestUm.Raw;
        type: PostPlansRequestType.Raw;
        inactive: PostPlansRequestInactive.Raw;
        frozen: PostPlansRequestFrozen.Raw;
    }
}