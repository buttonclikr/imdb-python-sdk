/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostTerminalRefsResponseResponse } from "./PostTerminalRefsResponseResponse";

export const PostTerminalRefsResponse: core.serialization.ObjectSchema<
    serializers.PostTerminalRefsResponse.Raw,
    ButtonclikrApi.PostTerminalRefsResponse
> = core.serialization.object({
    response: PostTerminalRefsResponseResponse.optional(),
});

export declare namespace PostTerminalRefsResponse {
    interface Raw {
        response?: PostTerminalRefsResponseResponse.Raw | null;
    }
}