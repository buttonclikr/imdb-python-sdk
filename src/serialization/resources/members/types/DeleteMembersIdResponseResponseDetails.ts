/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteMembersIdResponseResponseDetailsPage } from "./DeleteMembersIdResponseResponseDetailsPage";

export const DeleteMembersIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteMembersIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteMembersIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteMembersIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteMembersIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteMembersIdResponseResponseDetailsPage.Raw | null;
    }
}
