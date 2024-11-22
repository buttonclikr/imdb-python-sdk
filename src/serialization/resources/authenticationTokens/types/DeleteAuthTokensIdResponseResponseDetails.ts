/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteAuthTokensIdResponseResponseDetailsPage } from "./DeleteAuthTokensIdResponseResponseDetailsPage";

export const DeleteAuthTokensIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteAuthTokensIdResponseResponseDetails.Raw,
    ButtonclikrApi.DeleteAuthTokensIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteAuthTokensIdResponseResponseDetailsPage.optional(),
});

export declare namespace DeleteAuthTokensIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteAuthTokensIdResponseResponseDetailsPage.Raw | null;
    }
}