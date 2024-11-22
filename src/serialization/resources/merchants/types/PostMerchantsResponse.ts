/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostMerchantsResponseResponse } from "./PostMerchantsResponseResponse";

export const PostMerchantsResponse: core.serialization.ObjectSchema<
    serializers.PostMerchantsResponse.Raw,
    ButtonclikrApi.PostMerchantsResponse
> = core.serialization.object({
    response: PostMerchantsResponseResponse.optional(),
});

export declare namespace PostMerchantsResponse {
    interface Raw {
        response?: PostMerchantsResponseResponse.Raw | null;
    }
}