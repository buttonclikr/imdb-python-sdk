/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebacksIdResponseDetailsPage } from "./GetChargebacksIdResponseDetailsPage";

export const GetChargebacksIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebacksIdResponseDetails.Raw,
    ButtonclikrApi.GetChargebacksIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebacksIdResponseDetailsPage.optional(),
});

export declare namespace GetChargebacksIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebacksIdResponseDetailsPage.Raw | null;
    }
}
