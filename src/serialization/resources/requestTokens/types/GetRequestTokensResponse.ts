/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetRequestTokensResponseResponse } from "./GetRequestTokensResponseResponse";

export const GetRequestTokensResponse: core.serialization.ObjectSchema<
    serializers.GetRequestTokensResponse.Raw,
    ButtonclikrApi.GetRequestTokensResponse
> = core.serialization.object({
    response: GetRequestTokensResponseResponse.optional(),
});

export declare namespace GetRequestTokensResponse {
    interface Raw {
        response?: GetRequestTokensResponseResponse.Raw | null;
    }
}