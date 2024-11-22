/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostIplistsResponseResponseDetails } from "./PostIplistsResponseResponseDetails";

export const PostIplistsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostIplistsResponseResponse.Raw,
    ButtonclikrApi.PostIplistsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostIplistsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostIplistsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostIplistsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}