/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFeeRulesIdResponseResponseDetailsPage } from "./GetFeeRulesIdResponseResponseDetailsPage";

export const GetFeeRulesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetFeeRulesIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetFeeRulesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetFeeRulesIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetFeeRulesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetFeeRulesIdResponseResponseDetailsPage.Raw | null;
    }
}
