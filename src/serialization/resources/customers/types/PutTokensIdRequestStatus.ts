/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutTokensIdRequestStatus: core.serialization.Schema<
    serializers.PutTokensIdRequestStatus.Raw,
    ButtonclikrApi.PutTokensIdRequestStatus
> = core.serialization.enum_(["pending", "ready"]);

export declare namespace PutTokensIdRequestStatus {
    type Raw = "pending" | "ready";
}
