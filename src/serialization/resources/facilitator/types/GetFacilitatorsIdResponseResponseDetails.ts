/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFacilitatorsIdResponseResponseDetailsPage } from "./GetFacilitatorsIdResponseResponseDetailsPage";

export const GetFacilitatorsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetFacilitatorsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetFacilitatorsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetFacilitatorsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetFacilitatorsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetFacilitatorsIdResponseResponseDetailsPage.Raw | null;
    }
}