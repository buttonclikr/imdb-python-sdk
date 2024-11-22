/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetValueAddedServicesIdResponseResponse } from "./GetValueAddedServicesIdResponseResponse";

export const GetValueAddedServicesIdResponse: core.serialization.ObjectSchema<
    serializers.GetValueAddedServicesIdResponse.Raw,
    ButtonclikrApi.GetValueAddedServicesIdResponse
> = core.serialization.object({
    response: GetValueAddedServicesIdResponseResponse.optional(),
});

export declare namespace GetValueAddedServicesIdResponse {
    interface Raw {
        response?: GetValueAddedServicesIdResponseResponse.Raw | null;
    }
}
