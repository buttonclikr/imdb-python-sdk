/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAlertsResponseDetailsPage } from "./GetAlertsResponseDetailsPage";

export const GetAlertsResponseDetails: core.serialization.ObjectSchema<
    serializers.GetAlertsResponseDetails.Raw,
    ButtonclikrApi.GetAlertsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetAlertsResponseDetailsPage.optional(),
});

export declare namespace GetAlertsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetAlertsResponseDetailsPage.Raw | null;
    }
}
