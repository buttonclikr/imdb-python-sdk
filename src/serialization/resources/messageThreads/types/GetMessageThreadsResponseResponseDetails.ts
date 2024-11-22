/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMessageThreadsResponseResponseDetailsPage } from "./GetMessageThreadsResponseResponseDetailsPage";

export const GetMessageThreadsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetMessageThreadsResponseResponseDetails.Raw,
    ButtonclikrApi.GetMessageThreadsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetMessageThreadsResponseResponseDetailsPage.optional(),
});

export declare namespace GetMessageThreadsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetMessageThreadsResponseResponseDetailsPage.Raw | null;
    }
}
