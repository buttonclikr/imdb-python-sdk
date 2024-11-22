/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostValueAddedServicesResponseResponseDetails } from "./PostValueAddedServicesResponseResponseDetails";

export const PostValueAddedServicesResponseResponse: core.serialization.ObjectSchema<
    serializers.PostValueAddedServicesResponseResponse.Raw,
    ButtonclikrApi.PostValueAddedServicesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostValueAddedServicesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostValueAddedServicesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostValueAddedServicesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}