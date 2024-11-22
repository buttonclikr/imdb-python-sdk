/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { Inactive } from "../../../../types/Inactive";
import { Frozen } from "../../../../types/Frozen";

export const PostFacilitatorsRequest: core.serialization.Schema<
    serializers.PostFacilitatorsRequest.Raw,
    ButtonclikrApi.PostFacilitatorsRequest
> = core.serialization.object({
    entity: core.serialization.string(),
    prefix: core.serialization.string(),
    partition: core.serialization.string(),
    gatewayName: core.serialization.string().optional(),
    tcMerchant: core.serialization.string().optional(),
    tcVendor: core.serialization.string().optional(),
    chargebackNotificationEmail: core.serialization.string().optional(),
    inactive: Inactive,
    frozen: Frozen,
});

export declare namespace PostFacilitatorsRequest {
    interface Raw {
        entity: string;
        prefix: string;
        partition: string;
        gatewayName?: string | null;
        tcMerchant?: string | null;
        tcVendor?: string | null;
        chargebackNotificationEmail?: string | null;
        inactive: Inactive.Raw;
        frozen: Frozen.Raw;
    }
}
