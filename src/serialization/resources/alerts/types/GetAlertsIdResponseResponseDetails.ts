/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAlertsIdResponseResponseDetailsPage } from "./GetAlertsIdResponseResponseDetailsPage";

export const GetAlertsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetAlertsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetAlertsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetAlertsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetAlertsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetAlertsIdResponseResponseDetailsPage.Raw | null;
    }
}