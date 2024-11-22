/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";

export const PutEntityDatasIdRequest: core.serialization.Schema<
    serializers.PutEntityDatasIdRequest.Raw,
    ButtonclikrApi.PutEntityDatasIdRequest
> = core.serialization.object({
    entity: core.serialization.string(),
    tcAcceptSignature: core.serialization.string(),
});

export declare namespace PutEntityDatasIdRequest {
    interface Raw {
        entity: string;
        tcAcceptSignature: string;
    }
}
