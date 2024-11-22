/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostFilesResponseResponseDetails } from "./PostFilesResponseResponseDetails";

export const PostFilesResponseResponse: core.serialization.ObjectSchema<
    serializers.PostFilesResponseResponse.Raw,
    ButtonclikrApi.PostFilesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostFilesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostFilesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostFilesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
