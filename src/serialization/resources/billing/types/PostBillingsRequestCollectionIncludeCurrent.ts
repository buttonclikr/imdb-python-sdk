/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostBillingsRequestCollectionIncludeCurrent: core.serialization.Schema<
    serializers.PostBillingsRequestCollectionIncludeCurrent.Raw,
    ButtonclikrApi.PostBillingsRequestCollectionIncludeCurrent
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostBillingsRequestCollectionIncludeCurrent {
    type Raw = "0" | "1";
}
