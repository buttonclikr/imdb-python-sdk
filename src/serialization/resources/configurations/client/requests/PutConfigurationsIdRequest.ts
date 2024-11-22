/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutConfigurationsIdRequestIntegration } from "../../types/PutConfigurationsIdRequestIntegration";
import { PutConfigurationsIdRequestName } from "../../types/PutConfigurationsIdRequestName";
import { PutConfigurationsIdRequestType } from "../../types/PutConfigurationsIdRequestType";
import { PutConfigurationsIdRequestInactive } from "../../types/PutConfigurationsIdRequestInactive";
import { PutConfigurationsIdRequestFrozen } from "../../types/PutConfigurationsIdRequestFrozen";

export const PutConfigurationsIdRequest: core.serialization.Schema<
    serializers.PutConfigurationsIdRequest.Raw,
    ButtonclikrApi.PutConfigurationsIdRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    entity: core.serialization.unknown().optional(),
    division: core.serialization.unknown().optional(),
    org: core.serialization.unknown().optional(),
    partition: core.serialization.unknown().optional(),
    integration: PutConfigurationsIdRequestIntegration,
    name: PutConfigurationsIdRequestName,
    type: PutConfigurationsIdRequestType,
    options: core.serialization.unknown().optional(),
    inactive: PutConfigurationsIdRequestInactive,
    frozen: PutConfigurationsIdRequestFrozen,
});

export declare namespace PutConfigurationsIdRequest {
    interface Raw {
        login?: unknown;
        entity?: unknown | null;
        division?: unknown | null;
        org?: unknown | null;
        partition?: unknown | null;
        integration: PutConfigurationsIdRequestIntegration.Raw;
        name: PutConfigurationsIdRequestName.Raw;
        type: PutConfigurationsIdRequestType.Raw;
        options?: unknown | null;
        inactive: PutConfigurationsIdRequestInactive.Raw;
        frozen: PutConfigurationsIdRequestFrozen.Raw;
    }
}