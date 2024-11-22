/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutConfigurationsIdResponseResponse } from "./PutConfigurationsIdResponseResponse";

export const PutConfigurationsIdResponse: core.serialization.ObjectSchema<
    serializers.PutConfigurationsIdResponse.Raw,
    ButtonclikrApi.PutConfigurationsIdResponse
> = core.serialization.object({
    response: PutConfigurationsIdResponseResponse.optional(),
});

export declare namespace PutConfigurationsIdResponse {
    interface Raw {
        response?: PutConfigurationsIdResponseResponse.Raw | null;
    }
}