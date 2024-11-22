/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutBinsIdResponseResponse } from "./PutBinsIdResponseResponse";

export const PutBinsIdResponse: core.serialization.ObjectSchema<
    serializers.PutBinsIdResponse.Raw,
    ButtonclikrApi.PutBinsIdResponse
> = core.serialization.object({
    response: PutBinsIdResponseResponse.optional(),
});

export declare namespace PutBinsIdResponse {
    interface Raw {
        response?: PutBinsIdResponseResponse.Raw | null;
    }
}