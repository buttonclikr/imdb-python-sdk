/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostProfitShareRulesRequestInactive: core.serialization.Schema<
    serializers.PostProfitShareRulesRequestInactive.Raw,
    ButtonclikrApi.PostProfitShareRulesRequestInactive
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostProfitShareRulesRequestInactive {
    type Raw = "0" | "1";
}