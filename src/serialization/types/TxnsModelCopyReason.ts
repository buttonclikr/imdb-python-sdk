/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const TxnsModelCopyReason: core.serialization.Schema<
    serializers.TxnsModelCopyReason.Raw,
    ButtonclikrApi.TxnsModelCopyReason
> = core.serialization.enum_(["resubmission", "reauthorization"]);

export declare namespace TxnsModelCopyReason {
    type Raw = "resubmission" | "reauthorization";
}
