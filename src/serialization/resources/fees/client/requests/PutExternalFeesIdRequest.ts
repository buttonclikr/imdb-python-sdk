/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutExternalFeesIdRequestType } from "../../types/PutExternalFeesIdRequestType";

export const PutExternalFeesIdRequest: core.serialization.Schema<
    serializers.PutExternalFeesIdRequest.Raw,
    ButtonclikrApi.PutExternalFeesIdRequest
> = core.serialization.object({
    entity: core.serialization.unknown(),
    filename: core.serialization.unknown(),
    date: core.serialization.unknown(),
    type: PutExternalFeesIdRequestType,
    lineNumber: core.serialization.unknown(),
    amount: core.serialization.unknown(),
    metadata: core.serialization.unknown(),
});

export declare namespace PutExternalFeesIdRequest {
    interface Raw {
        entity?: unknown;
        filename?: unknown;
        date?: unknown;
        type: PutExternalFeesIdRequestType.Raw;
        lineNumber?: unknown;
        amount?: unknown;
        metadata?: unknown;
    }
}