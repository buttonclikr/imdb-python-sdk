/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTerminalTxnMetadatasIdResponseResponseDetailsPage } from "./GetTerminalTxnMetadatasIdResponseResponseDetailsPage";

export const GetTerminalTxnMetadatasIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetTerminalTxnMetadatasIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetTerminalTxnMetadatasIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetTerminalTxnMetadatasIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetTerminalTxnMetadatasIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetTerminalTxnMetadatasIdResponseResponseDetailsPage.Raw | null;
    }
}
