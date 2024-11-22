/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutParametersIdResponseResponse } from "./PutParametersIdResponseResponse";

export const PutParametersIdResponse: core.serialization.ObjectSchema<
    serializers.PutParametersIdResponse.Raw,
    ButtonclikrApi.PutParametersIdResponse
> = core.serialization.object({
    response: PutParametersIdResponseResponse.optional(),
});

export declare namespace PutParametersIdResponse {
    interface Raw {
        response?: PutParametersIdResponseResponse.Raw | null;
    }
}