/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutInvoicesIdRequestStatus: core.serialization.Schema<
    serializers.PutInvoicesIdRequestStatus.Raw,
    ButtonclikrApi.PutInvoicesIdRequestStatus
> = core.serialization.enum_([
    "pending",
    "cancelled",
    "expired",
    "viewed",
    "paid",
    "confirmed",
    "refunded",
    "rejected",
]);

export declare namespace PutInvoicesIdRequestStatus {
    type Raw = "pending" | "cancelled" | "expired" | "viewed" | "paid" | "confirmed" | "refunded" | "rejected";
}
