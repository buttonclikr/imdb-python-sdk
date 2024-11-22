/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAlertTriggersResponseResponseDetails } from "./GetAlertTriggersResponseResponseDetails";

export const GetAlertTriggersResponseResponse: core.serialization.ObjectSchema<
    serializers.GetAlertTriggersResponseResponse.Raw,
    ButtonclikrApi.GetAlertTriggersResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetAlertTriggersResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetAlertTriggersResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetAlertTriggersResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
