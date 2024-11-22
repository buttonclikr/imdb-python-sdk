/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetValueAddedServicesFlowsIdResponseResponseDetails } from "./GetValueAddedServicesFlowsIdResponseResponseDetails";

export const GetValueAddedServicesFlowsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetValueAddedServicesFlowsIdResponseResponse.Raw,
    ButtonclikrApi.GetValueAddedServicesFlowsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetValueAddedServicesFlowsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetValueAddedServicesFlowsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetValueAddedServicesFlowsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
