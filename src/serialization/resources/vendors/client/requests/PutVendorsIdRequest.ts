/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutVendorsIdRequestInactive } from "../../types/PutVendorsIdRequestInactive";
import { PutVendorsIdRequestFrozen } from "../../types/PutVendorsIdRequestFrozen";

export const PutVendorsIdRequest: core.serialization.Schema<
    serializers.PutVendorsIdRequest.Raw,
    ButtonclikrApi.PutVendorsIdRequest
> = core.serialization.object({
    entity: core.serialization.unknown(),
    division: core.serialization.unknown().optional(),
    inactive: PutVendorsIdRequestInactive,
    frozen: PutVendorsIdRequestFrozen,
});

export declare namespace PutVendorsIdRequest {
    interface Raw {
        entity?: unknown;
        division?: unknown | null;
        inactive: PutVendorsIdRequestInactive.Raw;
        frozen: PutVendorsIdRequestFrozen.Raw;
    }
}
