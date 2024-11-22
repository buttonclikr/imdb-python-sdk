/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDecisionRulesIdResponseResponseDetailsPage } from "./GetDecisionRulesIdResponseResponseDetailsPage";

export const GetDecisionRulesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetDecisionRulesIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetDecisionRulesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetDecisionRulesIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetDecisionRulesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetDecisionRulesIdResponseResponseDetailsPage.Raw | null;
    }
}