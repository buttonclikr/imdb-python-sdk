/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetParametersIdResponseResponseDetailsPage } from "./GetParametersIdResponseResponseDetailsPage";

export const GetParametersIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetParametersIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetParametersIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetParametersIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetParametersIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetParametersIdResponseResponseDetailsPage.Raw | null;
    }
}
