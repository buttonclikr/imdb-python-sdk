/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMessageThreadsResponseDetailsPage } from "./GetMessageThreadsResponseDetailsPage";

export const GetMessageThreadsResponseDetails: core.serialization.ObjectSchema<
    serializers.GetMessageThreadsResponseDetails.Raw,
    ButtonclikrApi.GetMessageThreadsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetMessageThreadsResponseDetailsPage.optional(),
});

export declare namespace GetMessageThreadsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetMessageThreadsResponseDetailsPage.Raw | null;
    }
}
