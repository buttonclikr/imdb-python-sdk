/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutChargebackDocumentsIdResponseResponseDetailsPage } from "./PutChargebackDocumentsIdResponseResponseDetailsPage";

export const PutChargebackDocumentsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutChargebackDocumentsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutChargebackDocumentsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutChargebackDocumentsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutChargebackDocumentsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutChargebackDocumentsIdResponseResponseDetailsPage.Raw | null;
    }
}