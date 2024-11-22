/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeletePayoutsIdResponseResponse } from "./DeletePayoutsIdResponseResponse";

export const DeletePayoutsIdResponse: core.serialization.ObjectSchema<
    serializers.DeletePayoutsIdResponse.Raw,
    ButtonclikrApi.DeletePayoutsIdResponse
> = core.serialization.object({
    response: DeletePayoutsIdResponseResponse.optional(),
});

export declare namespace DeletePayoutsIdResponse {
    interface Raw {
        response?: DeletePayoutsIdResponseResponse.Raw | null;
    }
}