/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutFeeModifiersIdRequestMarkupUm } from "../../types/PutFeeModifiersIdRequestMarkupUm";
import { PutFeeModifiersIdRequestInactive } from "../../types/PutFeeModifiersIdRequestInactive";
import { PutFeeModifiersIdRequestFrozen } from "../../types/PutFeeModifiersIdRequestFrozen";

export const PutFeeModifiersIdRequest: core.serialization.Schema<
    serializers.PutFeeModifiersIdRequest.Raw,
    ButtonclikrApi.PutFeeModifiersIdRequest
> = core.serialization.object({
    fee: core.serialization.unknown(),
    entity: core.serialization.unknown().optional(),
    org: core.serialization.unknown().optional(),
    fromentity: core.serialization.unknown().optional(),
    markupUm: PutFeeModifiersIdRequestMarkupUm.optional(),
    markupAmount: core.serialization.unknown().optional(),
    inactive: PutFeeModifiersIdRequestInactive,
    frozen: PutFeeModifiersIdRequestFrozen,
});

export declare namespace PutFeeModifiersIdRequest {
    interface Raw {
        fee?: unknown;
        entity?: unknown | null;
        org?: unknown | null;
        fromentity?: unknown | null;
        markupUm?: PutFeeModifiersIdRequestMarkupUm.Raw | null;
        markupAmount?: unknown | null;
        inactive: PutFeeModifiersIdRequestInactive.Raw;
        frozen: PutFeeModifiersIdRequestFrozen.Raw;
    }
}
