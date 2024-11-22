/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTerminalTxnsMetadatasIdResponseResponse } from "./GetTerminalTxnsMetadatasIdResponseResponse";

export const GetTerminalTxnsMetadatasIdResponse: core.serialization.ObjectSchema<
    serializers.GetTerminalTxnsMetadatasIdResponse.Raw,
    ButtonclikrApi.GetTerminalTxnsMetadatasIdResponse
> = core.serialization.object({
    response: GetTerminalTxnsMetadatasIdResponseResponse.optional(),
});

export declare namespace GetTerminalTxnsMetadatasIdResponse {
    interface Raw {
        response?: GetTerminalTxnsMetadatasIdResponseResponse.Raw | null;
    }
}
