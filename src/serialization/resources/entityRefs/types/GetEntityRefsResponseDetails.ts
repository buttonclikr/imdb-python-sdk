/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetEntityRefsResponseDetailsPage } from "./GetEntityRefsResponseDetailsPage";

export const GetEntityRefsResponseDetails: core.serialization.ObjectSchema<
    serializers.GetEntityRefsResponseDetails.Raw,
    ButtonclikrApi.GetEntityRefsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetEntityRefsResponseDetailsPage.optional(),
});

export declare namespace GetEntityRefsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetEntityRefsResponseDetailsPage.Raw | null;
    }
}
