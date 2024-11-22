/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityReservesResponseResponseDetailsPage } from "./GetEntityReservesResponseResponseDetailsPage";

export const GetEntityReservesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetEntityReservesResponseResponseDetails.Raw,
    ButtonclikrApi.GetEntityReservesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetEntityReservesResponseResponseDetailsPage.optional(),
});

export declare namespace GetEntityReservesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetEntityReservesResponseResponseDetailsPage.Raw | null;
    }
}
