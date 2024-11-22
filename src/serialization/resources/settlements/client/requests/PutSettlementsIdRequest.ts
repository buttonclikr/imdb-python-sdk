/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutSettlementsIdRequestPlatform } from "../../types/PutSettlementsIdRequestPlatform";
import { PutSettlementsIdRequestStatus } from "../../types/PutSettlementsIdRequestStatus";
import { PutSettlementsIdRequestInactive } from "../../types/PutSettlementsIdRequestInactive";
import { PutSettlementsIdRequestFrozen } from "../../types/PutSettlementsIdRequestFrozen";

export const PutSettlementsIdRequest: core.serialization.Schema<
    serializers.PutSettlementsIdRequest.Raw,
    ButtonclikrApi.PutSettlementsIdRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    payment: core.serialization.unknown(),
    platform: PutSettlementsIdRequestPlatform.optional(),
    ref: core.serialization.unknown().optional(),
    status: PutSettlementsIdRequestStatus,
    amount: core.serialization.unknown(),
    inactive: PutSettlementsIdRequestInactive,
    frozen: PutSettlementsIdRequestFrozen,
});

export declare namespace PutSettlementsIdRequest {
    interface Raw {
        login?: unknown;
        payment?: unknown;
        platform?: PutSettlementsIdRequestPlatform.Raw | null;
        ref?: unknown | null;
        status: PutSettlementsIdRequestStatus.Raw;
        amount?: unknown;
        inactive: PutSettlementsIdRequestInactive.Raw;
        frozen: PutSettlementsIdRequestFrozen.Raw;
    }
}
