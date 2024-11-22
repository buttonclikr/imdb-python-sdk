/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFacilitatorsResponseResponseDetailsPage } from "./GetFacilitatorsResponseResponseDetailsPage";

export const GetFacilitatorsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetFacilitatorsResponseResponseDetails.Raw,
    ButtonclikrApi.GetFacilitatorsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetFacilitatorsResponseResponseDetailsPage.optional(),
});

export declare namespace GetFacilitatorsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetFacilitatorsResponseResponseDetailsPage.Raw | null;
    }
}