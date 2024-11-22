/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutBillingsIdRequestSchedule: core.serialization.Schema<
    serializers.PutBillingsIdRequestSchedule.Raw,
    ButtonclikrApi.PutBillingsIdRequestSchedule
> = core.serialization.enum_(["days", "weeks", "months", "years"]);

export declare namespace PutBillingsIdRequestSchedule {
    type Raw = "days" | "weeks" | "months" | "years";
}