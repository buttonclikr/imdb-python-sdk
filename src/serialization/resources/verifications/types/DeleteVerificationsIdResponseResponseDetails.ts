/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteVerificationsIdResponseResponseDetailsPage } from "./DeleteVerificationsIdResponseResponseDetailsPage";

export const DeleteVerificationsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteVerificationsIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteVerificationsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteVerificationsIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteVerificationsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteVerificationsIdResponseResponseDetailsPage.Raw | null;
    }
}