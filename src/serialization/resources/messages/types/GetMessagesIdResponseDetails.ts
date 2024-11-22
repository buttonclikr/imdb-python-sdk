/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMessagesIdResponseDetailsPage } from "./GetMessagesIdResponseDetailsPage";

export const GetMessagesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetMessagesIdResponseDetails.Raw,
    ButtonclikrApi.GetMessagesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetMessagesIdResponseDetailsPage.optional(),
});

export declare namespace GetMessagesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetMessagesIdResponseDetailsPage.Raw | null;
    }
}