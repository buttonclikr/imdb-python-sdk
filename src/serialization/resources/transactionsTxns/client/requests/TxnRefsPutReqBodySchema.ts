/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";

export const TxnRefsPutReqBodySchema: core.serialization.Schema<
    serializers.TxnRefsPutReqBodySchema.Raw,
    ButtonclikrApi.TxnRefsPutReqBodySchema
> = core.serialization.object({
    ref: core.serialization.string(),
});

export declare namespace TxnRefsPutReqBodySchema {
    interface Raw {
        ref: string;
    }
}
