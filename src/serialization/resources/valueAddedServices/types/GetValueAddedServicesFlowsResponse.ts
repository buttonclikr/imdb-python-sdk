/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetValueAddedServicesFlowsResponseResponse } from "./GetValueAddedServicesFlowsResponseResponse";

export const GetValueAddedServicesFlowsResponse: core.serialization.ObjectSchema<
    serializers.GetValueAddedServicesFlowsResponse.Raw,
    ButtonclikrApi.GetValueAddedServicesFlowsResponse
> = core.serialization.object({
    response: GetValueAddedServicesFlowsResponseResponse.optional(),
});

export declare namespace GetValueAddedServicesFlowsResponse {
    interface Raw {
        response?: GetValueAddedServicesFlowsResponseResponse.Raw | null;
    }
}