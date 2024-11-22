/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostReportItemsResponseResponseDetails } from "./PostReportItemsResponseResponseDetails";

export const PostReportItemsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostReportItemsResponseResponse.Raw,
    ButtonclikrApi.PostReportItemsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostReportItemsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostReportItemsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostReportItemsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}