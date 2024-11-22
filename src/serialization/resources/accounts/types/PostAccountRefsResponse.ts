/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostAccountRefsResponseResponse } from "./PostAccountRefsResponseResponse";

export const PostAccountRefsResponse: core.serialization.ObjectSchema<
    serializers.PostAccountRefsResponse.Raw,
    ButtonclikrApi.PostAccountRefsResponse
> = core.serialization.object({
    response: PostAccountRefsResponseResponse.optional(),
});

export declare namespace PostAccountRefsResponse {
    interface Raw {
        response?: PostAccountRefsResponseResponse.Raw | null;
    }
}