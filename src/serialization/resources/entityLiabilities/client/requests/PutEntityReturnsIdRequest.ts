/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutEntityReturnsIdRequestInactive } from "../../types/PutEntityReturnsIdRequestInactive";
import { PutEntityReturnsIdRequestFrozen } from "../../types/PutEntityReturnsIdRequestFrozen";
import { PutEntityReturnsIdRequestPayment } from "../../types/PutEntityReturnsIdRequestPayment";

export const PutEntityReturnsIdRequest: core.serialization.Schema<
    serializers.PutEntityReturnsIdRequest.Raw,
    ButtonclikrApi.PutEntityReturnsIdRequest
> = core.serialization.object({
    login: core.serialization.unknown(),
    inactive: PutEntityReturnsIdRequestInactive,
    frozen: PutEntityReturnsIdRequestFrozen,
    payment: PutEntityReturnsIdRequestPayment.optional(),
});

export declare namespace PutEntityReturnsIdRequest {
    interface Raw {
        login?: unknown;
        inactive: PutEntityReturnsIdRequestInactive.Raw;
        frozen: PutEntityReturnsIdRequestFrozen.Raw;
        payment?: PutEntityReturnsIdRequestPayment.Raw | null;
    }
}
