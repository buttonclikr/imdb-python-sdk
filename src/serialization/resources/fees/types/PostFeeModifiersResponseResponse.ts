/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostFeeModifiersResponseResponseDetails } from "./PostFeeModifiersResponseResponseDetails";

export const PostFeeModifiersResponseResponse: core.serialization.ObjectSchema<
    serializers.PostFeeModifiersResponseResponse.Raw,
    ButtonclikrApi.PostFeeModifiersResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostFeeModifiersResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostFeeModifiersResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostFeeModifiersResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}