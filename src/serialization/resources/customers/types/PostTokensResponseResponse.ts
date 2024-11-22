/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostTokensResponseResponseDetails } from "./PostTokensResponseResponseDetails";

export const PostTokensResponseResponse: core.serialization.ObjectSchema<
    serializers.PostTokensResponseResponse.Raw,
    ButtonclikrApi.PostTokensResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostTokensResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostTokensResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostTokensResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
