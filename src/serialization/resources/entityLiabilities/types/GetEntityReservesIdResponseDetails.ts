/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityReservesIdResponseDetailsPage } from "./GetEntityReservesIdResponseDetailsPage";

export const GetEntityReservesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetEntityReservesIdResponseDetails.Raw,
    ButtonclikrApi.GetEntityReservesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetEntityReservesIdResponseDetailsPage.optional(),
});

export declare namespace GetEntityReservesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetEntityReservesIdResponseDetailsPage.Raw | null;
    }
}
