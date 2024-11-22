/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCustomersResponseResponse } from "./GetCustomersResponseResponse";

export const GetCustomersResponse: core.serialization.ObjectSchema<
    serializers.GetCustomersResponse.Raw,
    ButtonclikrApi.GetCustomersResponse
> = core.serialization.object({
    response: GetCustomersResponseResponse.optional(),
});

export declare namespace GetCustomersResponse {
    interface Raw {
        response?: GetCustomersResponseResponse.Raw | null;
    }
}