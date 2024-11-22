/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFundOriginsIdResponseResponse } from "./GetFundOriginsIdResponseResponse";

export const GetFundOriginsIdResponse: core.serialization.ObjectSchema<
    serializers.GetFundOriginsIdResponse.Raw,
    ButtonclikrApi.GetFundOriginsIdResponse
> = core.serialization.object({
    response: GetFundOriginsIdResponseResponse.optional(),
});

export declare namespace GetFundOriginsIdResponse {
    interface Raw {
        response?: GetFundOriginsIdResponseResponse.Raw | null;
    }
}
