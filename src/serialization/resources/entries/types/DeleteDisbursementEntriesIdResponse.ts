/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteDisbursementEntriesIdResponseResponse } from "./DeleteDisbursementEntriesIdResponseResponse";

export const DeleteDisbursementEntriesIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteDisbursementEntriesIdResponse.Raw,
    ButtonclikrApi.DeleteDisbursementEntriesIdResponse
> = core.serialization.object({
    response: DeleteDisbursementEntriesIdResponseResponse.optional(),
});

export declare namespace DeleteDisbursementEntriesIdResponse {
    interface Raw {
        response?: DeleteDisbursementEntriesIdResponseResponse.Raw | null;
    }
}
