/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostReservesResponseResponseDetailsPage } from "./PostReservesResponseResponseDetailsPage";

export const PostReservesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostReservesResponseResponseDetails.Raw,
    ButtonclikrApi.PostReservesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostReservesResponseResponseDetailsPage.optional(),
});

export declare namespace PostReservesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostReservesResponseResponseDetailsPage.Raw | null;
    }
}