/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostChargebackDocumentsRequestType } from "../../types/PostChargebackDocumentsRequestType";
import { PostChargebackDocumentsRequestStatus } from "../../types/PostChargebackDocumentsRequestStatus";
import { PostChargebackDocumentsRequestInactive } from "../../types/PostChargebackDocumentsRequestInactive";
import { PostChargebackDocumentsRequestFrozen } from "../../types/PostChargebackDocumentsRequestFrozen";

export const PostChargebackDocumentsRequest: core.serialization.Schema<
    serializers.PostChargebackDocumentsRequest.Raw,
    ButtonclikrApi.PostChargebackDocumentsRequest
> = core.serialization.object({
    chargeback: core.serialization.unknown(),
    type: PostChargebackDocumentsRequestType.optional(),
    ref: core.serialization.unknown().optional(),
    description: core.serialization.unknown().optional(),
    status: PostChargebackDocumentsRequestStatus,
    name: core.serialization.unknown().optional(),
    inactive: PostChargebackDocumentsRequestInactive,
    frozen: PostChargebackDocumentsRequestFrozen,
});

export declare namespace PostChargebackDocumentsRequest {
    interface Raw {
        chargeback?: unknown;
        type?: PostChargebackDocumentsRequestType.Raw | null;
        ref?: unknown | null;
        description?: unknown | null;
        status: PostChargebackDocumentsRequestStatus.Raw;
        name?: unknown | null;
        inactive: PostChargebackDocumentsRequestInactive.Raw;
        frozen: PostChargebackDocumentsRequestFrozen.Raw;
    }
}
