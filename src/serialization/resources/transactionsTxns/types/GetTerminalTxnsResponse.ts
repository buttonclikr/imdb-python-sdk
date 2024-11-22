/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTerminalTxnsResponseResponse } from "./GetTerminalTxnsResponseResponse";

export const GetTerminalTxnsResponse: core.serialization.ObjectSchema<
    serializers.GetTerminalTxnsResponse.Raw,
    ButtonclikrApi.GetTerminalTxnsResponse
> = core.serialization.object({
    response: GetTerminalTxnsResponseResponse.optional(),
});

export declare namespace GetTerminalTxnsResponse {
    interface Raw {
        response?: GetTerminalTxnsResponseResponse.Raw | null;
    }
}
