/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTerminalTxnsDatasIdResponseResponse } from "./GetTerminalTxnsDatasIdResponseResponse";

export const GetTerminalTxnsDatasIdResponse: core.serialization.ObjectSchema<
    serializers.GetTerminalTxnsDatasIdResponse.Raw,
    ButtonclikrApi.GetTerminalTxnsDatasIdResponse
> = core.serialization.object({
    response: GetTerminalTxnsDatasIdResponseResponse.optional(),
});

export declare namespace GetTerminalTxnsDatasIdResponse {
    interface Raw {
        response?: GetTerminalTxnsDatasIdResponseResponse.Raw | null;
    }
}
