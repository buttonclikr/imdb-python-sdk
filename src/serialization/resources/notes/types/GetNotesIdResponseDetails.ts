/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetNotesIdResponseDetailsPage } from "./GetNotesIdResponseDetailsPage";

export const GetNotesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetNotesIdResponseDetails.Raw,
    ButtonclikrApi.GetNotesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetNotesIdResponseDetailsPage.optional(),
});

export declare namespace GetNotesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetNotesIdResponseDetailsPage.Raw | null;
    }
}
