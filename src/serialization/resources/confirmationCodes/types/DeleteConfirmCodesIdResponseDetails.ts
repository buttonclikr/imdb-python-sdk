/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteConfirmCodesIdResponseDetailsPage } from "./DeleteConfirmCodesIdResponseDetailsPage";

export const DeleteConfirmCodesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteConfirmCodesIdResponseDetails.Raw,
    ButtonclikrApi.DeleteConfirmCodesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteConfirmCodesIdResponseDetailsPage.optional(),
});

export declare namespace DeleteConfirmCodesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteConfirmCodesIdResponseDetailsPage.Raw | null;
    }
}