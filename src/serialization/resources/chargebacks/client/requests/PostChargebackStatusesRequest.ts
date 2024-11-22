/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostChargebackStatusesRequestStatus } from "../../types/PostChargebackStatusesRequestStatus";

export const PostChargebackStatusesRequest: core.serialization.Schema<
    serializers.PostChargebackStatusesRequest.Raw,
    ButtonclikrApi.PostChargebackStatusesRequest
> = core.serialization.object({
    chargeback: core.serialization.unknown(),
    chargebackMessage: core.serialization.unknown().optional(),
    status: PostChargebackStatusesRequestStatus,
});

export declare namespace PostChargebackStatusesRequest {
    interface Raw {
        chargeback?: unknown;
        chargebackMessage?: unknown | null;
        status: PostChargebackStatusesRequestStatus.Raw;
    }
}