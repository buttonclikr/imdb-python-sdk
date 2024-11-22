/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostInvoicesRequestType: core.serialization.Schema<
    serializers.PostInvoicesRequestType.Raw,
    ButtonclikrApi.PostInvoicesRequestType
> = core.serialization.enum_(["single", "multiUse", "recurring"]);

export declare namespace PostInvoicesRequestType {
    type Raw = "single" | "multiUse" | "recurring";
}
