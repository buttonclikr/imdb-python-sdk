/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutDecisionActionsIdRequestAction: core.serialization.Schema<
    serializers.PutDecisionActionsIdRequestAction.Raw,
    ButtonclikrApi.PutDecisionActionsIdRequestAction
> = core.serialization.enum_(["1", "3", "4", "5", "8"]);

export declare namespace PutDecisionActionsIdRequestAction {
    type Raw = "1" | "3" | "4" | "5" | "8";
}