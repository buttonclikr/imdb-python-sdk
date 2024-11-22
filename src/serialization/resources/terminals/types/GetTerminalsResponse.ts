/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTerminalsResponseResponse } from "./GetTerminalsResponseResponse";

export const GetTerminalsResponse: core.serialization.ObjectSchema<
    serializers.GetTerminalsResponse.Raw,
    ButtonclikrApi.GetTerminalsResponse
> = core.serialization.object({
    response: GetTerminalsResponseResponse.optional(),
});

export declare namespace GetTerminalsResponse {
    interface Raw {
        response?: GetTerminalsResponseResponse.Raw | null;
    }
}
