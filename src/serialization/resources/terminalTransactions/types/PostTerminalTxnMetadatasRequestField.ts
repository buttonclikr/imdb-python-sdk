/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostTerminalTxnMetadatasRequestField: core.serialization.Schema<
    serializers.PostTerminalTxnMetadatasRequestField.Raw,
    ButtonclikrApi.PostTerminalTxnMetadatasRequestField
> = core.serialization.enum_(["discretionary1", "discretionary2", "discretionary3"]);

export declare namespace PostTerminalTxnMetadatasRequestField {
    type Raw = "discretionary1" | "discretionary2" | "discretionary3";
}