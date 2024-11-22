/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostWatchlistsResponseResponseDetails } from "./PostWatchlistsResponseResponseDetails";

export const PostWatchlistsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostWatchlistsResponseResponse.Raw,
    ButtonclikrApi.PostWatchlistsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostWatchlistsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostWatchlistsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostWatchlistsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}