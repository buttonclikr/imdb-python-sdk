/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteEntityDatasIdResponseResponse } from "./DeleteEntityDatasIdResponseResponse";

export const DeleteEntityDatasIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteEntityDatasIdResponse.Raw,
    ButtonclikrApi.DeleteEntityDatasIdResponse
> = core.serialization.object({
    response: DeleteEntityDatasIdResponseResponse.optional(),
});

export declare namespace DeleteEntityDatasIdResponse {
    interface Raw {
        response?: DeleteEntityDatasIdResponseResponse.Raw | null;
    }
}