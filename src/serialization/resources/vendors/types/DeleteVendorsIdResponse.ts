/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteVendorsIdResponseResponse } from "./DeleteVendorsIdResponseResponse";

export const DeleteVendorsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteVendorsIdResponse.Raw,
    ButtonclikrApi.DeleteVendorsIdResponse
> = core.serialization.object({
    response: DeleteVendorsIdResponseResponse.optional(),
});

export declare namespace DeleteVendorsIdResponse {
    interface Raw {
        response?: DeleteVendorsIdResponseResponse.Raw | null;
    }
}