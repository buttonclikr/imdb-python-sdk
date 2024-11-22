/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostChargebackDocumentsRequestStatus: core.serialization.Schema<
    serializers.PostChargebackDocumentsRequestStatus.Raw,
    ButtonclikrApi.PostChargebackDocumentsRequestStatus
> = core.serialization.enum_(["created", "processed", "failed"]);

export declare namespace PostChargebackDocumentsRequestStatus {
    type Raw = "created" | "processed" | "failed";
}
