/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDebtorEntitiesResponseResponse } from "./GetDebtorEntitiesResponseResponse";

export const GetDebtorEntitiesResponse: core.serialization.ObjectSchema<
    serializers.GetDebtorEntitiesResponse.Raw,
    ButtonclikrApi.GetDebtorEntitiesResponse
> = core.serialization.object({
    response: GetDebtorEntitiesResponseResponse.optional(),
});

export declare namespace GetDebtorEntitiesResponse {
    interface Raw {
        response?: GetDebtorEntitiesResponseResponse.Raw | null;
    }
}