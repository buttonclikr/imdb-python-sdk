/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostInvoiceParametersRequestFrozen: core.serialization.Schema<
    serializers.PostInvoiceParametersRequestFrozen.Raw,
    ButtonclikrApi.PostInvoiceParametersRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostInvoiceParametersRequestFrozen {
    type Raw = "0" | "1";
}
