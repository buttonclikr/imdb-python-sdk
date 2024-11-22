/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFeeModifiersIdResponseDetailsPage } from "./GetFeeModifiersIdResponseDetailsPage";

export const GetFeeModifiersIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetFeeModifiersIdResponseDetails.Raw,
    ButtonclikrApi.GetFeeModifiersIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetFeeModifiersIdResponseDetailsPage.optional(),
});

export declare namespace GetFeeModifiersIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetFeeModifiersIdResponseDetailsPage.Raw | null;
    }
}
