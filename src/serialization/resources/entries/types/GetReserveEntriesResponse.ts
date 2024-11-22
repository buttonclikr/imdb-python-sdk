/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetReserveEntriesResponseResponse } from "./GetReserveEntriesResponseResponse";

export const GetReserveEntriesResponse: core.serialization.ObjectSchema<
    serializers.GetReserveEntriesResponse.Raw,
    ButtonclikrApi.GetReserveEntriesResponse
> = core.serialization.object({
    response: GetReserveEntriesResponseResponse.optional(),
});

export declare namespace GetReserveEntriesResponse {
    interface Raw {
        response?: GetReserveEntriesResponseResponse.Raw | null;
    }
}