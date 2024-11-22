/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFeesIdResponseDetailsPage } from "./GetFeesIdResponseDetailsPage";

export const GetFeesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetFeesIdResponseDetails.Raw,
    ButtonclikrApi.GetFeesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetFeesIdResponseDetailsPage.optional(),
});

export declare namespace GetFeesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetFeesIdResponseDetailsPage.Raw | null;
    }
}
