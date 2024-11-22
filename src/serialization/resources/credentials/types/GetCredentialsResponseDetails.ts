/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCredentialsResponseDetailsPage } from "./GetCredentialsResponseDetailsPage";

export const GetCredentialsResponseDetails: core.serialization.ObjectSchema<
    serializers.GetCredentialsResponseDetails.Raw,
    ButtonclikrApi.GetCredentialsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetCredentialsResponseDetailsPage.optional(),
});

export declare namespace GetCredentialsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetCredentialsResponseDetailsPage.Raw | null;
    }
}