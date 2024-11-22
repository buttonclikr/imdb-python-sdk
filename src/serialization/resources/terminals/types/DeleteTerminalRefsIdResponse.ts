/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteTerminalRefsIdResponseResponse } from "./DeleteTerminalRefsIdResponseResponse";

export const DeleteTerminalRefsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteTerminalRefsIdResponse.Raw,
    ButtonclikrApi.DeleteTerminalRefsIdResponse
> = core.serialization.object({
    response: DeleteTerminalRefsIdResponseResponse.optional(),
});

export declare namespace DeleteTerminalRefsIdResponse {
    interface Raw {
        response?: DeleteTerminalRefsIdResponseResponse.Raw | null;
    }
}