/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetConfigurationStagesResponseResponseDetails } from "./GetConfigurationStagesResponseResponseDetails";

export const GetConfigurationStagesResponseResponse: core.serialization.ObjectSchema<
    serializers.GetConfigurationStagesResponseResponse.Raw,
    ButtonclikrApi.GetConfigurationStagesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetConfigurationStagesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetConfigurationStagesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetConfigurationStagesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}