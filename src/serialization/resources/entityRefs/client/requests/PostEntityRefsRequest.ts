/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostEntityRefsRequestStage } from "../../types/PostEntityRefsRequestStage";
import { PostEntityRefsRequestStaging } from "../../types/PostEntityRefsRequestStaging";
import { PostEntityRefsRequestPlatform } from "../../types/PostEntityRefsRequestPlatform";
import { PostEntityRefsRequestCurrency } from "../../types/PostEntityRefsRequestCurrency";
import { PostEntityRefsRequestFundingCurrency } from "../../types/PostEntityRefsRequestFundingCurrency";
import { Inactive } from "../../../../types/Inactive";
import { Frozen } from "../../../../types/Frozen";

export const PostEntityRefsRequest: core.serialization.Schema<
    serializers.PostEntityRefsRequest.Raw,
    ButtonclikrApi.PostEntityRefsRequest
> = core.serialization.object({
    entity: core.serialization.string(),
    member: core.serialization.string(),
    entityRoute: core.serialization.string().optional(),
    ref: core.serialization.string(),
    stage: PostEntityRefsRequestStage,
    staging: PostEntityRefsRequestStaging,
    platform: PostEntityRefsRequestPlatform,
    currency: PostEntityRefsRequestCurrency.optional(),
    fundingCurrency: PostEntityRefsRequestFundingCurrency.optional(),
    default: core.serialization.number(),
    fbo: core.serialization.string().optional(),
    options: core.serialization.string().optional(),
    inactive: Inactive,
    frozen: Frozen,
});

export declare namespace PostEntityRefsRequest {
    interface Raw {
        entity: string;
        member: string;
        entityRoute?: string | null;
        ref: string;
        stage: PostEntityRefsRequestStage.Raw;
        staging: PostEntityRefsRequestStaging.Raw;
        platform: PostEntityRefsRequestPlatform.Raw;
        currency?: PostEntityRefsRequestCurrency.Raw | null;
        fundingCurrency?: PostEntityRefsRequestFundingCurrency.Raw | null;
        default: number;
        fbo?: string | null;
        options?: string | null;
        inactive: Inactive.Raw;
        frozen: Frozen.Raw;
    }
}
