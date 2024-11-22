/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteConfirmCodesIdResponseResponseDetailsPage } from "./DeleteConfirmCodesIdResponseResponseDetailsPage";

export const DeleteConfirmCodesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteConfirmCodesIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteConfirmCodesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteConfirmCodesIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteConfirmCodesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteConfirmCodesIdResponseResponseDetailsPage.Raw | null;
    }
}
