/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutDebtorEntitiesIdResponseResponse } from "./PutDebtorEntitiesIdResponseResponse";

export const PutDebtorEntitiesIdResponse: core.serialization.ObjectSchema<
    serializers.PutDebtorEntitiesIdResponse.Raw,
    ButtonclikrApi.PutDebtorEntitiesIdResponse
> = core.serialization.object({
    response: PutDebtorEntitiesIdResponseResponse.optional(),
});

export declare namespace PutDebtorEntitiesIdResponse {
    interface Raw {
        response?: PutDebtorEntitiesIdResponseResponse.Raw | null;
    }
}
