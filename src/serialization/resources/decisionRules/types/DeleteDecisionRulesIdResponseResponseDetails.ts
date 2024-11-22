/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteDecisionRulesIdResponseResponseDetailsPage } from "./DeleteDecisionRulesIdResponseResponseDetailsPage";

export const DeleteDecisionRulesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteDecisionRulesIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteDecisionRulesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteDecisionRulesIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteDecisionRulesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteDecisionRulesIdResponseResponseDetailsPage.Raw | null;
    }
}