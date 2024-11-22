/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteMerchantsIdResponseResponse } from "./DeleteMerchantsIdResponseResponse";

export const DeleteMerchantsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteMerchantsIdResponse.Raw,
    ButtonclikrApi.DeleteMerchantsIdResponse
> = core.serialization.object({
    response: DeleteMerchantsIdResponseResponse.optional(),
});

export declare namespace DeleteMerchantsIdResponse {
    interface Raw {
        response?: DeleteMerchantsIdResponseResponse.Raw | null;
    }
}
