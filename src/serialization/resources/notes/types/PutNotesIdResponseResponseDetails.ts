/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutNotesIdResponseResponseDetailsPage } from "./PutNotesIdResponseResponseDetailsPage";

export const PutNotesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutNotesIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutNotesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutNotesIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutNotesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutNotesIdResponseResponseDetailsPage.Raw | null;
    }
}
