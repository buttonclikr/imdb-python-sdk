/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostStatementEntriesRequestDeductedFromBalance: core.serialization.Schema<
    serializers.PostStatementEntriesRequestDeductedFromBalance.Raw,
    ButtonclikrApi.PostStatementEntriesRequestDeductedFromBalance
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostStatementEntriesRequestDeductedFromBalance {
    type Raw = "0" | "1";
}