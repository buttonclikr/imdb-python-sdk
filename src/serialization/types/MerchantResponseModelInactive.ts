/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const MerchantResponseModelInactive: core.serialization.Schema<
    serializers.MerchantResponseModelInactive.Raw,
    ButtonclikrApi.MerchantResponseModelInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace MerchantResponseModelInactive {
    type Raw = "0" | "1";
}