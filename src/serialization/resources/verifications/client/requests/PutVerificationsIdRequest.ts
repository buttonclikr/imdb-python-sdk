/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutVerificationsIdRequestGenerated } from "../../types/PutVerificationsIdRequestGenerated";

export const PutVerificationsIdRequest: core.serialization.Schema<
    serializers.PutVerificationsIdRequest.Raw,
    ButtonclikrApi.PutVerificationsIdRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    decision: core.serialization.unknown(),
    level: core.serialization.unknown(),
    fromCache: core.serialization.unknown().optional(),
    additionalOptions: core.serialization.unknown().optional(),
    options: core.serialization.unknown().optional(),
    score: core.serialization.unknown().optional(),
    description: core.serialization.unknown().optional(),
    ref: core.serialization.unknown().optional(),
    generated: PutVerificationsIdRequestGenerated,
});

export declare namespace PutVerificationsIdRequest {
    interface Raw {
        login?: unknown;
        decision?: unknown;
        level?: unknown;
        fromCache?: unknown | null;
        additionalOptions?: unknown | null;
        options?: unknown | null;
        score?: unknown | null;
        description?: unknown | null;
        ref?: unknown | null;
        generated: PutVerificationsIdRequestGenerated.Raw;
    }
}