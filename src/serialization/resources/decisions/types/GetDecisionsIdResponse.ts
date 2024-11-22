/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDecisionsIdResponseResponse } from "./GetDecisionsIdResponseResponse";

export const GetDecisionsIdResponse: core.serialization.ObjectSchema<
    serializers.GetDecisionsIdResponse.Raw,
    ButtonclikrApi.GetDecisionsIdResponse
> = core.serialization.object({
    response: GetDecisionsIdResponseResponse.optional(),
});

export declare namespace GetDecisionsIdResponse {
    interface Raw {
        response?: GetDecisionsIdResponseResponse.Raw | null;
    }
}
