/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutStatementsIdRequestStatus: core.serialization.Schema<
    serializers.PutStatementsIdRequestStatus.Raw,
    ButtonclikrApi.PutStatementsIdRequestStatus
> = core.serialization.enum_(["pending", "processing", "partiallyPaid", "paid", "partiallyCancelled", "cancelled"]);

export declare namespace PutStatementsIdRequestStatus {
    type Raw = "pending" | "processing" | "partiallyPaid" | "paid" | "partiallyCancelled" | "cancelled";
}