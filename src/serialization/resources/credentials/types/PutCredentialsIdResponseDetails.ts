/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutCredentialsIdResponseDetailsPage } from "./PutCredentialsIdResponseDetailsPage";

export const PutCredentialsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.PutCredentialsIdResponseDetails.Raw,
    ButtonclikrApi.PutCredentialsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutCredentialsIdResponseDetailsPage.optional(),
});

export declare namespace PutCredentialsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutCredentialsIdResponseDetailsPage.Raw | null;
    }
}
