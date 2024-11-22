/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackStatusesResponseResponse } from "./GetChargebackStatusesResponseResponse";
import { GetChargebackStatusesResponseDetails } from "./GetChargebackStatusesResponseDetails";

export const GetChargebackStatusesResponse: core.serialization.ObjectSchema<
    serializers.GetChargebackStatusesResponse.Raw,
    ButtonclikrApi.GetChargebackStatusesResponse
> = core.serialization.object({
    response: GetChargebackStatusesResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetChargebackStatusesResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetChargebackStatusesResponse {
    interface Raw {
        response?: GetChargebackStatusesResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetChargebackStatusesResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
