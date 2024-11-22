/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetValueAddedServicesFlowsResponseResponseDetails } from "./GetValueAddedServicesFlowsResponseResponseDetails";

export const GetValueAddedServicesFlowsResponseResponse: core.serialization.ObjectSchema<
    serializers.GetValueAddedServicesFlowsResponseResponse.Raw,
    ButtonclikrApi.GetValueAddedServicesFlowsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetValueAddedServicesFlowsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetValueAddedServicesFlowsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetValueAddedServicesFlowsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}