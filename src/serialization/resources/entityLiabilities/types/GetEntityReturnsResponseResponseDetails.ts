/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityReturnsResponseResponseDetailsPage } from "./GetEntityReturnsResponseResponseDetailsPage";

export const GetEntityReturnsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetEntityReturnsResponseResponseDetails.Raw,
    ButtonclikrApi.GetEntityReturnsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetEntityReturnsResponseResponseDetailsPage.optional(),
});

export declare namespace GetEntityReturnsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetEntityReturnsResponseResponseDetailsPage.Raw | null;
    }
}