/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PutBinsIdRequestMethod } from "../../types/PutBinsIdRequestMethod";
import { PutBinsIdRequestType } from "../../types/PutBinsIdRequestType";
import { PutBinsIdRequestCategory } from "../../types/PutBinsIdRequestCategory";
import { PutBinsIdRequestCountry } from "../../types/PutBinsIdRequestCountry";
import { PutBinsIdRequestLocationType } from "../../types/PutBinsIdRequestLocationType";
import { PutBinsIdRequestTransferEnabled } from "../../types/PutBinsIdRequestTransferEnabled";
import { PutBinsIdRequestDebitOverCreditEnabled } from "../../types/PutBinsIdRequestDebitOverCreditEnabled";
import { PutBinsIdRequestBillPayEnabled } from "../../types/PutBinsIdRequestBillPayEnabled";
import { PutBinsIdRequestPinlessSupport } from "../../types/PutBinsIdRequestPinlessSupport";
import { PutBinsIdRequestInactive } from "../../types/PutBinsIdRequestInactive";
import { PutBinsIdRequestFrozen } from "../../types/PutBinsIdRequestFrozen";

export const PutBinsIdRequest: core.serialization.Schema<
    serializers.PutBinsIdRequest.Raw,
    ButtonclikrApi.PutBinsIdRequest
> = core.serialization.object({
    bin: core.serialization.unknown(),
    method: PutBinsIdRequestMethod,
    type: PutBinsIdRequestType.optional(),
    category: PutBinsIdRequestCategory.optional(),
    name: core.serialization.unknown().optional(),
    address: core.serialization.unknown().optional(),
    city: core.serialization.unknown().optional(),
    state: core.serialization.string().optional(),
    country: PutBinsIdRequestCountry.optional(),
    zip: core.serialization.unknown().optional(),
    locationType: PutBinsIdRequestLocationType.optional(),
    newBin: core.serialization.unknown().optional(),
    website: core.serialization.unknown().optional(),
    phone: core.serialization.unknown().optional(),
    transferEnabled: PutBinsIdRequestTransferEnabled,
    numberLength: core.serialization.unknown().optional(),
    debitOverCreditEnabled: PutBinsIdRequestDebitOverCreditEnabled,
    billPayEnabled: PutBinsIdRequestBillPayEnabled,
    pinlessSupport: PutBinsIdRequestPinlessSupport.optional(),
    inactive: PutBinsIdRequestInactive,
    frozen: PutBinsIdRequestFrozen,
});

export declare namespace PutBinsIdRequest {
    interface Raw {
        bin?: unknown;
        method: PutBinsIdRequestMethod.Raw;
        type?: PutBinsIdRequestType.Raw | null;
        category?: PutBinsIdRequestCategory.Raw | null;
        name?: unknown | null;
        address?: unknown | null;
        city?: unknown | null;
        state?: string | null;
        country?: PutBinsIdRequestCountry.Raw | null;
        zip?: unknown | null;
        locationType?: PutBinsIdRequestLocationType.Raw | null;
        newBin?: unknown | null;
        website?: unknown | null;
        phone?: unknown | null;
        transferEnabled: PutBinsIdRequestTransferEnabled.Raw;
        numberLength?: unknown | null;
        debitOverCreditEnabled: PutBinsIdRequestDebitOverCreditEnabled.Raw;
        billPayEnabled: PutBinsIdRequestBillPayEnabled.Raw;
        pinlessSupport?: PutBinsIdRequestPinlessSupport.Raw | null;
        inactive: PutBinsIdRequestInactive.Raw;
        frozen: PutBinsIdRequestFrozen.Raw;
    }
}