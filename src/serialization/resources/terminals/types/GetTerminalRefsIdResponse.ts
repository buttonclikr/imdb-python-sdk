/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTerminalRefsIdResponseResponse } from "./GetTerminalRefsIdResponseResponse";

export const GetTerminalRefsIdResponse: core.serialization.ObjectSchema<
    serializers.GetTerminalRefsIdResponse.Raw,
    ButtonclikrApi.GetTerminalRefsIdResponse
> = core.serialization.object({
    response: GetTerminalRefsIdResponseResponse.optional(),
});

export declare namespace GetTerminalRefsIdResponse {
    interface Raw {
        response?: GetTerminalRefsIdResponseResponse.Raw | null;
    }
}
