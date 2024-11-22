/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDisbursementEntitiesLogIdResponseResponse } from "./GetDisbursementEntitiesLogIdResponseResponse";

export const GetDisbursementEntitiesLogIdResponse: core.serialization.ObjectSchema<
    serializers.GetDisbursementEntitiesLogIdResponse.Raw,
    ButtonclikrApi.GetDisbursementEntitiesLogIdResponse
> = core.serialization.object({
    response: GetDisbursementEntitiesLogIdResponseResponse.optional(),
});

export declare namespace GetDisbursementEntitiesLogIdResponse {
    interface Raw {
        response?: GetDisbursementEntitiesLogIdResponseResponse.Raw | null;
    }
}
