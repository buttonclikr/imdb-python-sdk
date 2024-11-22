/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostChargebackMessagesRequestStatus: core.serialization.Schema<
    serializers.PostChargebackMessagesRequestStatus.Raw,
    ButtonclikrApi.PostChargebackMessagesRequestStatus
> = core.serialization.enum_(["requested", "processing", "failed", "denied", "processed"]);

export declare namespace PostChargebackMessagesRequestStatus {
    type Raw = "requested" | "processing" | "failed" | "denied" | "processed";
}