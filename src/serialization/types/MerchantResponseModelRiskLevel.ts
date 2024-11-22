/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const MerchantResponseModelRiskLevel: core.serialization.Schema<
    serializers.MerchantResponseModelRiskLevel.Raw,
    ButtonclikrApi.MerchantResponseModelRiskLevel
> = core.serialization.enum_(["restricted", "prohibited", "high", "medium", "low"]);

export declare namespace MerchantResponseModelRiskLevel {
    type Raw = "restricted" | "prohibited" | "high" | "medium" | "low";
}
