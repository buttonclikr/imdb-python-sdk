/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFundsIdResponseResponseDetailsPage } from "./GetFundsIdResponseResponseDetailsPage";

export const GetFundsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetFundsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetFundsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetFundsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetFundsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetFundsIdResponseResponseDetailsPage.Raw | null;
    }
}