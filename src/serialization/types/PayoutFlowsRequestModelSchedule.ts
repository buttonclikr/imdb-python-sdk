/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const PayoutFlowsRequestModelSchedule: core.serialization.Schema<
    serializers.PayoutFlowsRequestModelSchedule.Raw,
    ButtonclikrApi.PayoutFlowsRequestModelSchedule
> = core.serialization.enum_(["days", "weeks", "months", "years", "single"]);

export declare namespace PayoutFlowsRequestModelSchedule {
    type Raw = "days" | "weeks" | "months" | "years" | "single";
}