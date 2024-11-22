/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const TxnsModelPinEntryCapability: core.serialization.Schema<
    serializers.TxnsModelPinEntryCapability.Raw,
    ButtonclikrApi.TxnsModelPinEntryCapability
> = core.serialization.enum_(["unknown", "capable", "notCapable", "pinPadDown"]);

export declare namespace TxnsModelPinEntryCapability {
    type Raw = "unknown" | "capable" | "notCapable" | "pinPadDown";
}