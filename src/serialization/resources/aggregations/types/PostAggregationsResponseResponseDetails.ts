/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostAggregationsResponseResponseDetailsPage } from "./PostAggregationsResponseResponseDetailsPage";

export const PostAggregationsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostAggregationsResponseResponseDetails.Raw,
    ButtonclikrApi.PostAggregationsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostAggregationsResponseResponseDetailsPage.optional(),
});

export declare namespace PostAggregationsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostAggregationsResponseResponseDetailsPage.Raw | null;
    }
}