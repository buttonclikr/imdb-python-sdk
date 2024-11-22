/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMappingsResponseDetailsPage } from "./GetMappingsResponseDetailsPage";

export const GetMappingsResponseDetails: core.serialization.ObjectSchema<
    serializers.GetMappingsResponseDetails.Raw,
    ButtonclikrApi.GetMappingsResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetMappingsResponseDetailsPage.optional(),
});

export declare namespace GetMappingsResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetMappingsResponseDetailsPage.Raw | null;
    }
}