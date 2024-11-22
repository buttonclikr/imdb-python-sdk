/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";

export const TxnDatasPostReqBodySchemaModel: core.serialization.Schema<
    serializers.TxnDatasPostReqBodySchemaModel.Raw,
    ButtonclikrApi.TxnDatasPostReqBodySchemaModel
> = core.serialization.object({
    txn: core.serialization.string(),
    signature: core.serialization.number(),
});

export declare namespace TxnDatasPostReqBodySchemaModel {
    interface Raw {
        txn: string;
        signature: number;
    }
}