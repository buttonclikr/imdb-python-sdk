/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDisbursementEntriesResponseResponse } from "./GetDisbursementEntriesResponseResponse";

export const GetDisbursementEntriesResponse: core.serialization.ObjectSchema<
    serializers.GetDisbursementEntriesResponse.Raw,
    ButtonclikrApi.GetDisbursementEntriesResponse
> = core.serialization.object({
    response: GetDisbursementEntriesResponseResponse.optional(),
});

export declare namespace GetDisbursementEntriesResponse {
    interface Raw {
        response?: GetDisbursementEntriesResponseResponse.Raw | null;
    }
}
