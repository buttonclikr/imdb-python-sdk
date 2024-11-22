/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostFacilitatorsResponseResponseDetails } from "./PostFacilitatorsResponseResponseDetails";

export const PostFacilitatorsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostFacilitatorsResponseResponse.Raw,
    ButtonclikrApi.PostFacilitatorsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostFacilitatorsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostFacilitatorsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostFacilitatorsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
