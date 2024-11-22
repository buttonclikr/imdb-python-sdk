/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetConfigurationsResponseResponseDetailsPage } from "./GetConfigurationsResponseResponseDetailsPage";

export const GetConfigurationsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetConfigurationsResponseResponseDetails.Raw,
    ButtonclikrApi.GetConfigurationsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetConfigurationsResponseResponseDetailsPage.optional(),
});

export declare namespace GetConfigurationsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetConfigurationsResponseResponseDetailsPage.Raw | null;
    }
}
