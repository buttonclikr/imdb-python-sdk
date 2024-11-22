/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDecisionActionsResponseResponseDetails } from "./GetDecisionActionsResponseResponseDetails";

export const GetDecisionActionsResponseResponse: core.serialization.ObjectSchema<
    serializers.GetDecisionActionsResponseResponse.Raw,
    ButtonclikrApi.GetDecisionActionsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetDecisionActionsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetDecisionActionsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetDecisionActionsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}