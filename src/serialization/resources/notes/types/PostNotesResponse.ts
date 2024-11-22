/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostNotesResponseResponse } from "./PostNotesResponseResponse";
import { PostNotesResponseDetails } from "./PostNotesResponseDetails";

export const PostNotesResponse: core.serialization.ObjectSchema<
    serializers.PostNotesResponse.Raw,
    ButtonclikrApi.PostNotesResponse
> = core.serialization.object({
    response: PostNotesResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PostNotesResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostNotesResponse {
    interface Raw {
        response?: PostNotesResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PostNotesResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
