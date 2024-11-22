/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTeamLoginsIdResponseResponseDetails } from "./GetTeamLoginsIdResponseResponseDetails";

export const GetTeamLoginsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetTeamLoginsIdResponseResponse.Raw,
    ButtonclikrApi.GetTeamLoginsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetTeamLoginsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetTeamLoginsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetTeamLoginsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}