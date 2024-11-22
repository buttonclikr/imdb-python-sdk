/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetNoteDocumentsIdResponseDetailsPage: core.serialization.ObjectSchema<
    serializers.GetNoteDocumentsIdResponseDetailsPage.Raw,
    ButtonclikrApi.GetNoteDocumentsIdResponseDetailsPage
> = core.serialization.object({
    current: core.serialization.unknown().optional(),
    last: core.serialization.unknown().optional(),
});

export declare namespace GetNoteDocumentsIdResponseDetailsPage {
    interface Raw {
        current?: unknown | null;
        last?: unknown | null;
    }
}