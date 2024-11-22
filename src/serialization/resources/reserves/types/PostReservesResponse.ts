/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostReservesResponseResponse } from "./PostReservesResponseResponse";

export const PostReservesResponse: core.serialization.ObjectSchema<
    serializers.PostReservesResponse.Raw,
    ButtonclikrApi.PostReservesResponse
> = core.serialization.object({
    response: PostReservesResponseResponse.optional(),
});

export declare namespace PostReservesResponse {
    interface Raw {
        response?: PostReservesResponseResponse.Raw | null;
    }
}