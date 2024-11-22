/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTxnSessionsIdResponseResponse } from "./GetTxnSessionsIdResponseResponse";

export const GetTxnSessionsIdResponse: core.serialization.ObjectSchema<
    serializers.GetTxnSessionsIdResponse.Raw,
    ButtonclikrApi.GetTxnSessionsIdResponse
> = core.serialization.object({
    response: GetTxnSessionsIdResponseResponse.optional(),
});

export declare namespace GetTxnSessionsIdResponse {
    interface Raw {
        response?: GetTxnSessionsIdResponseResponse.Raw | null;
    }
}