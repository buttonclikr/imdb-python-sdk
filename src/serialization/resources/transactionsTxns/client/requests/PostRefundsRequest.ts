/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";

export const PostRefundsRequest: core.serialization.Schema<
    serializers.PostRefundsRequest.Raw,
    ButtonclikrApi.PostRefundsRequest
> = core.serialization.object({
    entry: core.serialization.string(),
    description: core.serialization.string().optional(),
    amount: core.serialization.number(),
});

export declare namespace PostRefundsRequest {
    interface Raw {
        entry: string;
        description?: string | null;
        amount: number;
    }
}
