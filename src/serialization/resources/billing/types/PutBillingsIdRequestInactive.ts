/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutBillingsIdRequestInactive: core.serialization.Schema<
    serializers.PutBillingsIdRequestInactive.Raw,
    ButtonclikrApi.PutBillingsIdRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutBillingsIdRequestInactive {
    type Raw = "0" | "1";
}
