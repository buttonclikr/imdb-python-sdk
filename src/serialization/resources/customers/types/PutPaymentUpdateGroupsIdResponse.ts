/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutPaymentUpdateGroupsIdResponseResponse } from "./PutPaymentUpdateGroupsIdResponseResponse";

export const PutPaymentUpdateGroupsIdResponse: core.serialization.ObjectSchema<
    serializers.PutPaymentUpdateGroupsIdResponse.Raw,
    ButtonclikrApi.PutPaymentUpdateGroupsIdResponse
> = core.serialization.object({
    response: PutPaymentUpdateGroupsIdResponseResponse.optional(),
});

export declare namespace PutPaymentUpdateGroupsIdResponse {
    interface Raw {
        response?: PutPaymentUpdateGroupsIdResponseResponse.Raw | null;
    }
}
