/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutBinsIdRequestDebitOverCreditEnabled: core.serialization.Schema<
    serializers.PutBinsIdRequestDebitOverCreditEnabled.Raw,
    ButtonclikrApi.PutBinsIdRequestDebitOverCreditEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutBinsIdRequestDebitOverCreditEnabled {
    type Raw = "0" | "1";
}