/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityRoutesResponseResponseDetailsPage } from "./GetEntityRoutesResponseResponseDetailsPage";

export const GetEntityRoutesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetEntityRoutesResponseResponseDetails.Raw,
    ButtonclikrApi.GetEntityRoutesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetEntityRoutesResponseResponseDetailsPage.optional(),
});

export declare namespace GetEntityRoutesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetEntityRoutesResponseResponseDetailsPage.Raw | null;
    }
}
