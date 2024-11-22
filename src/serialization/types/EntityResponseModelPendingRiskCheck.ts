/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const EntityResponseModelPendingRiskCheck: core.serialization.Schema<
    serializers.EntityResponseModelPendingRiskCheck.Raw,
    ButtonclikrApi.EntityResponseModelPendingRiskCheck
> = core.serialization.enum_(["pending", "successful", "failed", "manual"]);

export declare namespace EntityResponseModelPendingRiskCheck {
    type Raw = "pending" | "successful" | "failed" | "manual";
}
