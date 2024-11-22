/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteCredentialsIdResponseDetailsPage } from "./DeleteCredentialsIdResponseDetailsPage";

export const DeleteCredentialsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteCredentialsIdResponseDetails.Raw,
    ButtonclikrApi.DeleteCredentialsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteCredentialsIdResponseDetailsPage.optional(),
});

export declare namespace DeleteCredentialsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteCredentialsIdResponseDetailsPage.Raw | null;
    }
}