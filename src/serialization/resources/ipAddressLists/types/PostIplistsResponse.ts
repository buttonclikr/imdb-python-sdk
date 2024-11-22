/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostIplistsResponseResponse } from "./PostIplistsResponseResponse";
import { PostIplistsResponseDetails } from "./PostIplistsResponseDetails";

export const PostIplistsResponse: core.serialization.ObjectSchema<
    serializers.PostIplistsResponse.Raw,
    ButtonclikrApi.PostIplistsResponse
> = core.serialization.object({
    response: PostIplistsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PostIplistsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostIplistsResponse {
    interface Raw {
        response?: PostIplistsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PostIplistsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}