/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutNoteDocumentsIdResponseDetailsPage } from "./PutNoteDocumentsIdResponseDetailsPage";

export const PutNoteDocumentsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.PutNoteDocumentsIdResponseDetails.Raw,
    ButtonclikrApi.PutNoteDocumentsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutNoteDocumentsIdResponseDetailsPage.optional(),
});

export declare namespace PutNoteDocumentsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutNoteDocumentsIdResponseDetailsPage.Raw | null;
    }
}