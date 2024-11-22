/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { DeleteProfitSharesIdResponseDetailsPage } from "./DeleteProfitSharesIdResponseDetailsPage";

export const DeleteProfitSharesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.DeleteProfitSharesIdResponseDetails.Raw,
    ButtonclikrApi.DeleteProfitSharesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: DeleteProfitSharesIdResponseDetailsPage.optional(),
});

export declare namespace DeleteProfitSharesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: DeleteProfitSharesIdResponseDetailsPage.Raw | null;
    }
}