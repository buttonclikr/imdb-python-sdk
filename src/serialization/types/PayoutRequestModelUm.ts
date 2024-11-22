/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const PayoutRequestModelUm: core.serialization.Schema<
    serializers.PayoutRequestModelUm.Raw,
    ButtonclikrApi.PayoutRequestModelUm
> = core.serialization.enum_(["percent", "actual", "percentneg"]);

export declare namespace PayoutRequestModelUm {
    type Raw = "percent" | "actual" | "percentneg";
}