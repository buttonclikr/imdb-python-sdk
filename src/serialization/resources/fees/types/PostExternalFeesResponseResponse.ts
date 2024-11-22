/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostExternalFeesResponseResponseDetails } from "./PostExternalFeesResponseResponseDetails";

export const PostExternalFeesResponseResponse: core.serialization.ObjectSchema<
    serializers.PostExternalFeesResponseResponse.Raw,
    ButtonclikrApi.PostExternalFeesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostExternalFeesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostExternalFeesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostExternalFeesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
