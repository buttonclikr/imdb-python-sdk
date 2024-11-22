/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutFacilitatorsIdResponseResponse } from "./PutFacilitatorsIdResponseResponse";

export const PutFacilitatorsIdResponse: core.serialization.ObjectSchema<
    serializers.PutFacilitatorsIdResponse.Raw,
    ButtonclikrApi.PutFacilitatorsIdResponse
> = core.serialization.object({
    response: PutFacilitatorsIdResponseResponse.optional(),
});

export declare namespace PutFacilitatorsIdResponse {
    interface Raw {
        response?: PutFacilitatorsIdResponseResponse.Raw | null;
    }
}
