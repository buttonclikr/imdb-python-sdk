/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutTxnRefsIdResponseResponse } from "./PutTxnRefsIdResponseResponse";

export const PutTxnRefsIdResponse: core.serialization.ObjectSchema<
    serializers.PutTxnRefsIdResponse.Raw,
    ButtonclikrApi.PutTxnRefsIdResponse
> = core.serialization.object({
    response: PutTxnRefsIdResponseResponse.optional(),
});

export declare namespace PutTxnRefsIdResponse {
    interface Raw {
        response?: PutTxnRefsIdResponseResponse.Raw | null;
    }
}