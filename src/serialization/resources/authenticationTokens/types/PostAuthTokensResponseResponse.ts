/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostAuthTokensResponseResponseDetails } from "./PostAuthTokensResponseResponseDetails";

export const PostAuthTokensResponseResponse: core.serialization.ObjectSchema<
    serializers.PostAuthTokensResponseResponse.Raw,
    ButtonclikrApi.PostAuthTokensResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostAuthTokensResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostAuthTokensResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostAuthTokensResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
