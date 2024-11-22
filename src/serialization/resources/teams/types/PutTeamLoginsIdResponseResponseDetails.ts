/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutTeamLoginsIdResponseResponseDetailsPage } from "./PutTeamLoginsIdResponseResponseDetailsPage";

export const PutTeamLoginsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutTeamLoginsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutTeamLoginsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutTeamLoginsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutTeamLoginsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutTeamLoginsIdResponseResponseDetailsPage.Raw | null;
    }
}
