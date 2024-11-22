/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackDocumentsResponseResponseDetailsPage } from "./GetChargebackDocumentsResponseResponseDetailsPage";

export const GetChargebackDocumentsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebackDocumentsResponseResponseDetails.Raw,
    ButtonclikrApi.GetChargebackDocumentsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebackDocumentsResponseResponseDetailsPage.optional(),
});

export declare namespace GetChargebackDocumentsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebackDocumentsResponseResponseDetailsPage.Raw | null;
    }
}