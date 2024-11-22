/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetPaymentUpdateGroupsResponseResponse } from "./GetPaymentUpdateGroupsResponseResponse";

export const GetPaymentUpdateGroupsResponse: core.serialization.ObjectSchema<
    serializers.GetPaymentUpdateGroupsResponse.Raw,
    ButtonclikrApi.GetPaymentUpdateGroupsResponse
> = core.serialization.object({
    response: GetPaymentUpdateGroupsResponseResponse.optional(),
});

export declare namespace GetPaymentUpdateGroupsResponse {
    interface Raw {
        response?: GetPaymentUpdateGroupsResponseResponse.Raw | null;
    }
}
