/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingsResponseResponseDetailsPage } from "./GetBillingsResponseResponseDetailsPage";

export const GetBillingsResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetBillingsResponseResponseDetails.Raw,
    ButtonclikrApi.GetBillingsResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetBillingsResponseResponseDetailsPage.optional(),
});

export declare namespace GetBillingsResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetBillingsResponseResponseDetailsPage.Raw | null;
    }
}