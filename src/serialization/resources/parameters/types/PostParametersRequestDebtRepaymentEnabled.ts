/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostParametersRequestDebtRepaymentEnabled: core.serialization.Schema<
    serializers.PostParametersRequestDebtRepaymentEnabled.Raw,
    ButtonclikrApi.PostParametersRequestDebtRepaymentEnabled
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostParametersRequestDebtRepaymentEnabled {
    type Raw = "0" | "1";
}
