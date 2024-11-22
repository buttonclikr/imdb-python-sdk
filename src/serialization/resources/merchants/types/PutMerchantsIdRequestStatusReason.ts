/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutMerchantsIdRequestStatusReason: core.serialization.Schema<
    serializers.PutMerchantsIdRequestStatusReason.Raw,
    ButtonclikrApi.PutMerchantsIdRequestStatusReason
> = core.serialization.enum_(["rejected", "fraud", "noResponse", "withdrawn"]);

export declare namespace PutMerchantsIdRequestStatusReason {
    type Raw = "rejected" | "fraud" | "noResponse" | "withdrawn";
}
