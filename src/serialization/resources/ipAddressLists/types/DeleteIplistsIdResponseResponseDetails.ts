/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteIplistsIdResponseResponseDetailsPage } from "./DeleteIplistsIdResponseResponseDetailsPage";

export const DeleteIplistsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteIplistsIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteIplistsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteIplistsIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteIplistsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteIplistsIdResponseResponseDetailsPage.Raw | null;
    }
}