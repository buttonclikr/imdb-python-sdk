/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMappingsIdResponseDetailsPage } from "./GetMappingsIdResponseDetailsPage";

export const GetMappingsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetMappingsIdResponseDetails.Raw,
    ButtonclikrApi.GetMappingsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetMappingsIdResponseDetailsPage.optional(),
});

export declare namespace GetMappingsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetMappingsIdResponseDetailsPage.Raw | null;
    }
}