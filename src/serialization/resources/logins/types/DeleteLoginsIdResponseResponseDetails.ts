/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteLoginsIdResponseResponseDetailsPage } from "./DeleteLoginsIdResponseResponseDetailsPage";

export const DeleteLoginsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteLoginsIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteLoginsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteLoginsIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteLoginsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteLoginsIdResponseResponseDetailsPage.Raw | null;
    }
}
