/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteTeamLoginsIdResponseDetailsPage } from "./DeleteTeamLoginsIdResponseDetailsPage";

export const DeleteTeamLoginsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteTeamLoginsIdResponseDetails.Raw,
    ButtonclikrApi.DeleteTeamLoginsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteTeamLoginsIdResponseDetailsPage.optional(),
});

export declare namespace DeleteTeamLoginsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteTeamLoginsIdResponseDetailsPage.Raw | null;
    }
}
