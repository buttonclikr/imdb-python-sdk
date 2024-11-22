/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDecisionActionsResponseResponseDetailsPage } from "./GetDecisionActionsResponseResponseDetailsPage";

export const GetDecisionActionsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetDecisionActionsResponseResponseDetails.Raw,
    ButtonclikrApi.GetDecisionActionsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetDecisionActionsResponseResponseDetailsPage.optional(),
});

export declare namespace GetDecisionActionsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetDecisionActionsResponseResponseDetailsPage.Raw | null;
    }
}