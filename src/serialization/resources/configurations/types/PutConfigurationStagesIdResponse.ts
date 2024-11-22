/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutConfigurationStagesIdResponseResponse } from "./PutConfigurationStagesIdResponseResponse";

export const PutConfigurationStagesIdResponse: core.serialization.ObjectSchema<
    serializers.PutConfigurationStagesIdResponse.Raw,
    ButtonclikrApi.PutConfigurationStagesIdResponse
> = core.serialization.object({
    response: PutConfigurationStagesIdResponseResponse.optional(),
});

export declare namespace PutConfigurationStagesIdResponse {
    interface Raw {
        response?: PutConfigurationStagesIdResponseResponse.Raw | null;
    }
}