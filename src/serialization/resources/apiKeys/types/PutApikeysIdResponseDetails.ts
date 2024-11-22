/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutApikeysIdResponseDetailsPage } from "./PutApikeysIdResponseDetailsPage";

export const PutApikeysIdResponseDetails: core.serialization.ObjectSchema<
    serializers.PutApikeysIdResponseDetails.Raw,
    ButtonclikrApi.PutApikeysIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutApikeysIdResponseDetailsPage.optional(),
});

export declare namespace PutApikeysIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutApikeysIdResponseDetailsPage.Raw | null;
    }
}