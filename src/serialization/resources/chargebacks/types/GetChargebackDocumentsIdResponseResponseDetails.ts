/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackDocumentsIdResponseResponseDetailsPage } from "./GetChargebackDocumentsIdResponseResponseDetailsPage";

export const GetChargebackDocumentsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebackDocumentsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetChargebackDocumentsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebackDocumentsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetChargebackDocumentsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebackDocumentsIdResponseResponseDetailsPage.Raw | null;
    }
}
