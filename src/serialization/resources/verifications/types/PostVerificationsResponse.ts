/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostVerificationsResponseResponse } from "./PostVerificationsResponseResponse";

export const PostVerificationsResponse: core.serialization.ObjectSchema<
    serializers.PostVerificationsResponse.Raw,
    ButtonclikrApi.PostVerificationsResponse
> = core.serialization.object({
    response: PostVerificationsResponseResponse.optional(),
});

export declare namespace PostVerificationsResponse {
    interface Raw {
        response?: PostVerificationsResponseResponse.Raw | null;
    }
}