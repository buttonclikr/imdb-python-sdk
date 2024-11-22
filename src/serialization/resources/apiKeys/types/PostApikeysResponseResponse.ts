/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostApikeysResponseResponseDetails } from "./PostApikeysResponseResponseDetails";

export const PostApikeysResponseResponse: core.serialization.ObjectSchema<
    serializers.PostApikeysResponseResponse.Raw,
    ButtonclikrApi.PostApikeysResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostApikeysResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostApikeysResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostApikeysResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
