/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutStatementsIdRequestStatus } from "../../types/PutStatementsIdRequestStatus";
import { PutStatementsIdRequestCurrency } from "../../types/PutStatementsIdRequestCurrency";

export const PutStatementsIdRequest: core.serialization.Schema<
    serializers.PutStatementsIdRequest.Raw,
    ButtonclikrApi.PutStatementsIdRequest
> = core.serialization.object({
    billing: core.serialization.unknown(),
    entity: core.serialization.unknown(),
    start: core.serialization.unknown().optional(),
    finish: core.serialization.unknown().optional(),
    forentity: core.serialization.unknown(),
    status: PutStatementsIdRequestStatus,
    totalPaid: core.serialization.unknown().optional(),
    total: core.serialization.unknown().optional(),
    currency: PutStatementsIdRequestCurrency.optional(),
});

export declare namespace PutStatementsIdRequest {
    interface Raw {
        billing?: unknown;
        entity?: unknown;
        start?: unknown | null;
        finish?: unknown | null;
        forentity?: unknown;
        status: PutStatementsIdRequestStatus.Raw;
        totalPaid?: unknown | null;
        total?: unknown | null;
        currency?: PutStatementsIdRequestCurrency.Raw | null;
    }
}
