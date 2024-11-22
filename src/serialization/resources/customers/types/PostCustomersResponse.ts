/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostCustomersResponseResponse } from "./PostCustomersResponseResponse";

export const PostCustomersResponse: core.serialization.ObjectSchema<
    serializers.PostCustomersResponse.Raw,
    ButtonclikrApi.PostCustomersResponse
> = core.serialization.object({
    response: PostCustomersResponseResponse.optional(),
});

export declare namespace PostCustomersResponse {
    interface Raw {
        response?: PostCustomersResponseResponse.Raw | null;
    }
}