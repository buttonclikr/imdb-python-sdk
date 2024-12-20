/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const BookingPaymentStatus: core.serialization.Schema<
    serializers.BookingPaymentStatus.Raw,
    ButtonclikrApi.BookingPaymentStatus
> = core.serialization.enum_(["pending", "succeeded", "failed"]);

export declare namespace BookingPaymentStatus {
    type Raw = "pending" | "succeeded" | "failed";
}
