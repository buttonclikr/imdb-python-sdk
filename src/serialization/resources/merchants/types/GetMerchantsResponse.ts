/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMerchantsResponseResponse } from "./GetMerchantsResponseResponse";

export const GetMerchantsResponse: core.serialization.ObjectSchema<
    serializers.GetMerchantsResponse.Raw,
    ButtonclikrApi.GetMerchantsResponse
> = core.serialization.object({
    response: GetMerchantsResponseResponse.optional(),
});

export declare namespace GetMerchantsResponse {
    interface Raw {
        response?: GetMerchantsResponseResponse.Raw | null;
    }
}
