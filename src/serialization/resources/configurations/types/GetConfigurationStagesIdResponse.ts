/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetConfigurationStagesIdResponseResponse } from "./GetConfigurationStagesIdResponseResponse";

export const GetConfigurationStagesIdResponse: core.serialization.ObjectSchema<
    serializers.GetConfigurationStagesIdResponse.Raw,
    ButtonclikrApi.GetConfigurationStagesIdResponse
> = core.serialization.object({
    response: GetConfigurationStagesIdResponseResponse.optional(),
});

export declare namespace GetConfigurationStagesIdResponse {
    interface Raw {
        response?: GetConfigurationStagesIdResponseResponse.Raw | null;
    }
}