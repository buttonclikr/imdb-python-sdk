/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const ChangeRequestStatus: core.serialization.Schema<
    serializers.ChangeRequestStatus.Raw,
    ButtonclikrApi.ChangeRequestStatus
> = core.serialization.enum_(["pending", "manualReview", "approved", "declined"]);

export declare namespace ChangeRequestStatus {
    type Raw = "pending" | "manualReview" | "approved" | "declined";
}