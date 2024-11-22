/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetRequestTokensIdResponseResponse } from "./GetRequestTokensIdResponseResponse";

export const GetRequestTokensIdResponse: core.serialization.ObjectSchema<
    serializers.GetRequestTokensIdResponse.Raw,
    ButtonclikrApi.GetRequestTokensIdResponse
> = core.serialization.object({
    response: GetRequestTokensIdResponseResponse.optional(),
});

export declare namespace GetRequestTokensIdResponse {
    interface Raw {
        response?: GetRequestTokensIdResponseResponse.Raw | null;
    }
}