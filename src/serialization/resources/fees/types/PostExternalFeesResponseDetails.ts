/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostExternalFeesResponseDetailsPage } from "./PostExternalFeesResponseDetailsPage";

export const PostExternalFeesResponseDetails: core.serialization.ObjectSchema<
    serializers.PostExternalFeesResponseDetails.Raw,
    ButtonclikrApi.PostExternalFeesResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostExternalFeesResponseDetailsPage.optional(),
});

export declare namespace PostExternalFeesResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostExternalFeesResponseDetailsPage.Raw | null;
    }
}
