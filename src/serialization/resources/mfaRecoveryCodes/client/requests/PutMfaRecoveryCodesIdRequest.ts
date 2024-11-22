/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutMfaRecoveryCodesIdRequestUsed } from "../../types/PutMfaRecoveryCodesIdRequestUsed";

export const PutMfaRecoveryCodesIdRequest: core.serialization.Schema<
    serializers.PutMfaRecoveryCodesIdRequest.Raw,
    ButtonclikrApi.PutMfaRecoveryCodesIdRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    code: core.serialization.unknown(),
    used: PutMfaRecoveryCodesIdRequestUsed,
});

export declare namespace PutMfaRecoveryCodesIdRequest {
    interface Raw {
        login?: unknown;
        code?: unknown;
        used: PutMfaRecoveryCodesIdRequestUsed.Raw;
    }
}