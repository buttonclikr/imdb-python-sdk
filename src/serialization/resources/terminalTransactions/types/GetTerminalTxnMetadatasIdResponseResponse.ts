/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTerminalTxnMetadatasIdResponseResponseDetails } from "./GetTerminalTxnMetadatasIdResponseResponseDetails";

export const GetTerminalTxnMetadatasIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetTerminalTxnMetadatasIdResponseResponse.Raw,
    ButtonclikrApi.GetTerminalTxnMetadatasIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetTerminalTxnMetadatasIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetTerminalTxnMetadatasIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetTerminalTxnMetadatasIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}