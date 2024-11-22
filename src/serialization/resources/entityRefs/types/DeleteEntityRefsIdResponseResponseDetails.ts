/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteEntityRefsIdResponseResponseDetailsPage } from "./DeleteEntityRefsIdResponseResponseDetailsPage";

export const DeleteEntityRefsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteEntityRefsIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteEntityRefsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteEntityRefsIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteEntityRefsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteEntityRefsIdResponseResponseDetailsPage.Raw | null;
    }
}
