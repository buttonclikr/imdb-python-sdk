/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteConfigurationsIdResponseResponse } from "./DeleteConfigurationsIdResponseResponse";

export const DeleteConfigurationsIdResponse: core.serialization.ObjectSchema<
    serializers.DeleteConfigurationsIdResponse.Raw,
    ButtonclikrApi.DeleteConfigurationsIdResponse
> = core.serialization.object({
    response: DeleteConfigurationsIdResponseResponse.optional(),
});

export declare namespace DeleteConfigurationsIdResponse {
    interface Raw {
        response?: DeleteConfigurationsIdResponseResponse.Raw | null;
    }
}