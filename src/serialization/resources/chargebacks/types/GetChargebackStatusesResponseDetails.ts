/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackStatusesResponseDetailsPage } from "./GetChargebackStatusesResponseDetailsPage";

export const GetChargebackStatusesResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebackStatusesResponseDetails.Raw,
    ButtonclikrApi.GetChargebackStatusesResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebackStatusesResponseDetailsPage.optional(),
});

export declare namespace GetChargebackStatusesResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebackStatusesResponseDetailsPage.Raw | null;
    }
}
