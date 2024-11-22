/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFeesIdResponseResponseDetailsPage } from "./GetFeesIdResponseResponseDetailsPage";

export const GetFeesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetFeesIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetFeesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetFeesIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetFeesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetFeesIdResponseResponseDetailsPage.Raw | null;
    }
}