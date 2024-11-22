/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutAggregationsIdRequestType: core.serialization.Schema<
    serializers.PutAggregationsIdRequestType.Raw,
    ButtonclikrApi.PutAggregationsIdRequestType
> = core.serialization.enum_([
    "entityEntryEventMerchant",
    "merchantTxnApprovedAll",
    "merchantTxnCapturedAll",
    "merchantTxnFailedAll",
]);

export declare namespace PutAggregationsIdRequestType {
    type Raw =
        | "entityEntryEventMerchant"
        | "merchantTxnApprovedAll"
        | "merchantTxnCapturedAll"
        | "merchantTxnFailedAll";
}
