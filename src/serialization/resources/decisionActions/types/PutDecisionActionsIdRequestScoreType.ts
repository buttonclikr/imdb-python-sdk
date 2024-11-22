/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutDecisionActionsIdRequestScoreType: core.serialization.Schema<
    serializers.PutDecisionActionsIdRequestScoreType.Raw,
    ButtonclikrApi.PutDecisionActionsIdRequestScoreType
> = core.serialization.enum_(["low", "high", "none"]);

export declare namespace PutDecisionActionsIdRequestScoreType {
    type Raw = "low" | "high" | "none";
}