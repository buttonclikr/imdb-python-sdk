/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetConfirmCodesIdResponseResponseDetailsPage } from "./GetConfirmCodesIdResponseResponseDetailsPage";

export const GetConfirmCodesIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetConfirmCodesIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetConfirmCodesIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetConfirmCodesIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetConfirmCodesIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetConfirmCodesIdResponseResponseDetailsPage.Raw | null;
    }
}
