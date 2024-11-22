/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const DisbursementRefsModelStage: core.serialization.Schema<
    serializers.DisbursementRefsModelStage.Raw,
    ButtonclikrApi.DisbursementRefsModelStage
> = core.serialization.enum_(["create", "approve", "split", "failed"]);

export declare namespace DisbursementRefsModelStage {
    type Raw = "create" | "approve" | "split" | "failed";
}