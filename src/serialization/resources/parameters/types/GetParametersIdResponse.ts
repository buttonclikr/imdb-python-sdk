/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetParametersIdResponseResponse } from "./GetParametersIdResponseResponse";

export const GetParametersIdResponse: core.serialization.ObjectSchema<
    serializers.GetParametersIdResponse.Raw,
    ButtonclikrApi.GetParametersIdResponse
> = core.serialization.object({
    response: GetParametersIdResponseResponse.optional(),
});

export declare namespace GetParametersIdResponse {
    interface Raw {
        response?: GetParametersIdResponseResponse.Raw | null;
    }
}
