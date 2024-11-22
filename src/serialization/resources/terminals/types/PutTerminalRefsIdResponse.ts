/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutTerminalRefsIdResponseResponse } from "./PutTerminalRefsIdResponseResponse";

export const PutTerminalRefsIdResponse: core.serialization.ObjectSchema<
    serializers.PutTerminalRefsIdResponse.Raw,
    ButtonclikrApi.PutTerminalRefsIdResponse
> = core.serialization.object({
    response: PutTerminalRefsIdResponseResponse.optional(),
});

export declare namespace PutTerminalRefsIdResponse {
    interface Raw {
        response?: PutTerminalRefsIdResponseResponse.Raw | null;
    }
}
