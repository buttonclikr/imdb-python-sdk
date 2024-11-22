/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAlertsResponseResponseDetailsPage } from "./GetAlertsResponseResponseDetailsPage";

export const GetAlertsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetAlertsResponseResponseDetails.Raw,
    ButtonclikrApi.GetAlertsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetAlertsResponseResponseDetailsPage.optional(),
});

export declare namespace GetAlertsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetAlertsResponseResponseDetailsPage.Raw | null;
    }
}
