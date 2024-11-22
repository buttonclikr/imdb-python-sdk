/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetWatchlistsResponseResponseDetailsPage } from "./GetWatchlistsResponseResponseDetailsPage";

export const GetWatchlistsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetWatchlistsResponseResponseDetails.Raw,
    ButtonclikrApi.GetWatchlistsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetWatchlistsResponseResponseDetailsPage.optional(),
});

export declare namespace GetWatchlistsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetWatchlistsResponseResponseDetailsPage.Raw | null;
    }
}
