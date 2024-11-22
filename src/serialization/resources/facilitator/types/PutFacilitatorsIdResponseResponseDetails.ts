/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutFacilitatorsIdResponseResponseDetailsPage } from "./PutFacilitatorsIdResponseResponseDetailsPage";

export const PutFacilitatorsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutFacilitatorsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutFacilitatorsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutFacilitatorsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutFacilitatorsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutFacilitatorsIdResponseResponseDetailsPage.Raw | null;
    }
}