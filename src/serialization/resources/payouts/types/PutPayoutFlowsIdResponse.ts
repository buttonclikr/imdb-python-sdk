/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutPayoutFlowsIdResponseResponse } from "./PutPayoutFlowsIdResponseResponse";

export const PutPayoutFlowsIdResponse: core.serialization.ObjectSchema<
    serializers.PutPayoutFlowsIdResponse.Raw,
    ButtonclikrApi.PutPayoutFlowsIdResponse
> = core.serialization.object({
    response: PutPayoutFlowsIdResponseResponse.optional(),
});

export declare namespace PutPayoutFlowsIdResponse {
    interface Raw {
        response?: PutPayoutFlowsIdResponseResponse.Raw | null;
    }
}