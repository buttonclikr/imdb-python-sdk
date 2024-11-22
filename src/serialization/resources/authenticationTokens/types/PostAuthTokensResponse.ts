/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostAuthTokensResponseResponse } from "./PostAuthTokensResponseResponse";
import { PostAuthTokensResponseDetails } from "./PostAuthTokensResponseDetails";

export const PostAuthTokensResponse: core.serialization.ObjectSchema<
    serializers.PostAuthTokensResponse.Raw,
    ButtonclikrApi.PostAuthTokensResponse
> = core.serialization.object({
    response: PostAuthTokensResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PostAuthTokensResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostAuthTokensResponse {
    interface Raw {
        response?: PostAuthTokensResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PostAuthTokensResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
