/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostBinsRequestMethod } from "../../types/PostBinsRequestMethod";
import { PostBinsRequestType } from "../../types/PostBinsRequestType";
import { PostBinsRequestCategory } from "../../types/PostBinsRequestCategory";
import { PostBinsRequestCountry } from "../../types/PostBinsRequestCountry";
import { PostBinsRequestLocationType } from "../../types/PostBinsRequestLocationType";
import { PostBinsRequestTransferEnabled } from "../../types/PostBinsRequestTransferEnabled";
import { PostBinsRequestDebitOverCreditEnabled } from "../../types/PostBinsRequestDebitOverCreditEnabled";
import { PostBinsRequestBillPayEnabled } from "../../types/PostBinsRequestBillPayEnabled";
import { PostBinsRequestPinlessSupport } from "../../types/PostBinsRequestPinlessSupport";
import { PostBinsRequestInactive } from "../../types/PostBinsRequestInactive";
import { PostBinsRequestFrozen } from "../../types/PostBinsRequestFrozen";

export const PostBinsRequest: core.serialization.Schema<
    serializers.PostBinsRequest.Raw,
    ButtonclikrApi.PostBinsRequest
> = core.serialization.object({
    bin: core.serialization.unknown(),
    method: PostBinsRequestMethod,
    type: PostBinsRequestType.optional(),
    category: PostBinsRequestCategory.optional(),
    name: core.serialization.unknown().optional(),
    address: core.serialization.unknown().optional(),
    city: core.serialization.unknown().optional(),
    state: core.serialization.string().optional(),
    country: PostBinsRequestCountry.optional(),
    zip: core.serialization.unknown().optional(),
    locationType: PostBinsRequestLocationType.optional(),
    newBin: core.serialization.unknown().optional(),
    website: core.serialization.unknown().optional(),
    phone: core.serialization.unknown().optional(),
    transferEnabled: PostBinsRequestTransferEnabled,
    numberLength: core.serialization.unknown().optional(),
    debitOverCreditEnabled: PostBinsRequestDebitOverCreditEnabled,
    billPayEnabled: PostBinsRequestBillPayEnabled,
    pinlessSupport: PostBinsRequestPinlessSupport.optional(),
    inactive: PostBinsRequestInactive,
    frozen: PostBinsRequestFrozen,
});

export declare namespace PostBinsRequest {
    interface Raw {
        bin?: unknown;
        method: PostBinsRequestMethod.Raw;
        type?: PostBinsRequestType.Raw | null;
        category?: PostBinsRequestCategory.Raw | null;
        name?: unknown | null;
        address?: unknown | null;
        city?: unknown | null;
        state?: string | null;
        country?: PostBinsRequestCountry.Raw | null;
        zip?: unknown | null;
        locationType?: PostBinsRequestLocationType.Raw | null;
        newBin?: unknown | null;
        website?: unknown | null;
        phone?: unknown | null;
        transferEnabled: PostBinsRequestTransferEnabled.Raw;
        numberLength?: unknown | null;
        debitOverCreditEnabled: PostBinsRequestDebitOverCreditEnabled.Raw;
        billPayEnabled: PostBinsRequestBillPayEnabled.Raw;
        pinlessSupport?: PostBinsRequestPinlessSupport.Raw | null;
        inactive: PostBinsRequestInactive.Raw;
        frozen: PostBinsRequestFrozen.Raw;
    }
}
