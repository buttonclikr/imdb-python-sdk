/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetConfigurationsResponseResponse } from "./GetConfigurationsResponseResponse";

export const GetConfigurationsResponse: core.serialization.ObjectSchema<
    serializers.GetConfigurationsResponse.Raw,
    ButtonclikrApi.GetConfigurationsResponse
> = core.serialization.object({
    response: GetConfigurationsResponseResponse.optional(),
});

export declare namespace GetConfigurationsResponse {
    interface Raw {
        response?: GetConfigurationsResponseResponse.Raw | null;
    }
}