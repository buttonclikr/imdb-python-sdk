/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostTxnSessionsResponseResponseDetails } from "./PostTxnSessionsResponseResponseDetails";

export const PostTxnSessionsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostTxnSessionsResponseResponse.Raw,
    ButtonclikrApi.PostTxnSessionsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostTxnSessionsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostTxnSessionsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostTxnSessionsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
