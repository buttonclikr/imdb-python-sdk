/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCustomersIdResponseResponse } from "./GetCustomersIdResponseResponse";

export const GetCustomersIdResponse: core.serialization.ObjectSchema<
    serializers.GetCustomersIdResponse.Raw,
    ButtonclikrApi.GetCustomersIdResponse
> = core.serialization.object({
    response: GetCustomersIdResponseResponse.optional(),
});

export declare namespace GetCustomersIdResponse {
    interface Raw {
        response?: GetCustomersIdResponseResponse.Raw | null;
    }
}