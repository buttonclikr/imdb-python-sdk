/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostTerminalTxnMetadatasResponseResponseDetails } from "./PostTerminalTxnMetadatasResponseResponseDetails";

export const PostTerminalTxnMetadatasResponseResponse: core.serialization.ObjectSchema<
    serializers.PostTerminalTxnMetadatasResponseResponse.Raw,
    ButtonclikrApi.PostTerminalTxnMetadatasResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostTerminalTxnMetadatasResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostTerminalTxnMetadatasResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostTerminalTxnMetadatasResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
