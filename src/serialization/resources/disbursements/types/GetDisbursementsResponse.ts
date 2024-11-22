/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDisbursementsResponseResponse } from "./GetDisbursementsResponseResponse";

export const GetDisbursementsResponse: core.serialization.ObjectSchema<
    serializers.GetDisbursementsResponse.Raw,
    ButtonclikrApi.GetDisbursementsResponse
> = core.serialization.object({
    response: GetDisbursementsResponseResponse.optional(),
});

export declare namespace GetDisbursementsResponse {
    interface Raw {
        response?: GetDisbursementsResponseResponse.Raw | null;
    }
}