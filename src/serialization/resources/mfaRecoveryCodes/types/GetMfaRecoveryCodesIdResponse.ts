/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMfaRecoveryCodesIdResponseResponse } from "./GetMfaRecoveryCodesIdResponseResponse";

export const GetMfaRecoveryCodesIdResponse: core.serialization.ObjectSchema<
    serializers.GetMfaRecoveryCodesIdResponse.Raw,
    ButtonclikrApi.GetMfaRecoveryCodesIdResponse
> = core.serialization.object({
    response: GetMfaRecoveryCodesIdResponseResponse.optional(),
});

export declare namespace GetMfaRecoveryCodesIdResponse {
    interface Raw {
        response?: GetMfaRecoveryCodesIdResponseResponse.Raw | null;
    }
}
