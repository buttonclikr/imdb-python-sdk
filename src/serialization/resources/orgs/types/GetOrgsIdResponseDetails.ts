/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetOrgsIdResponseDetailsPage } from "./GetOrgsIdResponseDetailsPage";

export const GetOrgsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetOrgsIdResponseDetails.Raw,
    ButtonclikrApi.GetOrgsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetOrgsIdResponseDetailsPage.optional(),
});

export declare namespace GetOrgsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetOrgsIdResponseDetailsPage.Raw | null;
    }
}