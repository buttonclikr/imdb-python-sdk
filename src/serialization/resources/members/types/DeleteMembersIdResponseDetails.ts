/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteMembersIdResponseDetailsPage } from "./DeleteMembersIdResponseDetailsPage";

export const DeleteMembersIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteMembersIdResponseDetails.Raw,
    ButtonclikrApi.DeleteMembersIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteMembersIdResponseDetailsPage.optional(),
});

export declare namespace DeleteMembersIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteMembersIdResponseDetailsPage.Raw | null;
    }
}