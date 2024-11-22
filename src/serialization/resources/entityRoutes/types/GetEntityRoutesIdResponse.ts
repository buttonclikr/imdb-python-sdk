/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityRoutesIdResponseResponse } from "./GetEntityRoutesIdResponseResponse";

export const GetEntityRoutesIdResponse: core.serialization.ObjectSchema<
    serializers.GetEntityRoutesIdResponse.Raw,
    ButtonclikrApi.GetEntityRoutesIdResponse
> = core.serialization.object({
    response: GetEntityRoutesIdResponseResponse.optional(),
});

export declare namespace GetEntityRoutesIdResponse {
    interface Raw {
        response?: GetEntityRoutesIdResponseResponse.Raw | null;
    }
}