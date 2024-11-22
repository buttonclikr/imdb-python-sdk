/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetTeamsIdResponseResponseDetailsPage } from "./GetTeamsIdResponseResponseDetailsPage";

export const GetTeamsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetTeamsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetTeamsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetTeamsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetTeamsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetTeamsIdResponseResponseDetailsPage.Raw | null;
    }
}
