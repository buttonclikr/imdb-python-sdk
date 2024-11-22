/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteFeeRulesIdResponseResponseDetailsPage } from "./DeleteFeeRulesIdResponseResponseDetailsPage";

export const DeleteFeeRulesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteFeeRulesIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteFeeRulesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteFeeRulesIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteFeeRulesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteFeeRulesIdResponseResponseDetailsPage.Raw | null;
    }
}