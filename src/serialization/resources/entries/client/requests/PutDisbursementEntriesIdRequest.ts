/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutDisbursementEntriesIdRequestEvent } from "../../types/PutDisbursementEntriesIdRequestEvent";

export const PutDisbursementEntriesIdRequest: core.serialization.Schema<
    serializers.PutDisbursementEntriesIdRequest.Raw,
    ButtonclikrApi.PutDisbursementEntriesIdRequest
> = core.serialization.object({
    disbursement: core.serialization.unknown(),
    entry: core.serialization.unknown().optional(),
    pendingEntry: core.serialization.unknown().optional(),
    reserveEntry: core.serialization.unknown().optional(),
    event: PutDisbursementEntriesIdRequestEvent,
    eventId: core.serialization.unknown().optional(),
    amount: core.serialization.unknown(),
    amountUsed: core.serialization.unknown(),
    description: core.serialization.unknown().optional(),
});

export declare namespace PutDisbursementEntriesIdRequest {
    interface Raw {
        disbursement?: unknown;
        entry?: unknown | null;
        pendingEntry?: unknown | null;
        reserveEntry?: unknown | null;
        event: PutDisbursementEntriesIdRequestEvent.Raw;
        eventId?: unknown | null;
        amount?: unknown;
        amountUsed?: unknown;
        description?: unknown | null;
    }
}