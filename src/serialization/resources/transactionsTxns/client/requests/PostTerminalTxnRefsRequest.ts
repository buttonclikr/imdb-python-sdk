/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostTerminalTxnRefsRequestStage } from "../../types/PostTerminalTxnRefsRequestStage";
import { PostTerminalTxnRefsRequestPlatform } from "../../types/PostTerminalTxnRefsRequestPlatform";

export const PostTerminalTxnRefsRequest: core.serialization.Schema<
    serializers.PostTerminalTxnRefsRequest.Raw,
    ButtonclikrApi.PostTerminalTxnRefsRequest
> = core.serialization.object({
    terminalTxn: core.serialization.string(),
    ref: core.serialization.string(),
    stage: PostTerminalTxnRefsRequestStage,
    platform: PostTerminalTxnRefsRequestPlatform,
});

export declare namespace PostTerminalTxnRefsRequest {
    interface Raw {
        terminalTxn: string;
        ref: string;
        stage: PostTerminalTxnRefsRequestStage.Raw;
        platform: PostTerminalTxnRefsRequestPlatform.Raw;
    }
}
