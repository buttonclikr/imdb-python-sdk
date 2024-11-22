/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteFeeRulesIdResponseDetailsPage } from "./DeleteFeeRulesIdResponseDetailsPage";

export const DeleteFeeRulesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteFeeRulesIdResponseDetails.Raw,
    ButtonclikrApi.DeleteFeeRulesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteFeeRulesIdResponseDetailsPage.optional(),
});

export declare namespace DeleteFeeRulesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteFeeRulesIdResponseDetailsPage.Raw | null;
    }
}
