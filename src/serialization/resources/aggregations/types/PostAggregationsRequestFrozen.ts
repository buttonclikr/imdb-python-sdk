/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostAggregationsRequestFrozen: core.serialization.Schema<
    serializers.PostAggregationsRequestFrozen.Raw,
    ButtonclikrApi.PostAggregationsRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostAggregationsRequestFrozen {
    type Raw = "0" | "1";
}
