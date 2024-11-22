/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingsIdResponseResponseDetailsPage } from "./GetBillingsIdResponseResponseDetailsPage";

export const GetBillingsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetBillingsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetBillingsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetBillingsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetBillingsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetBillingsIdResponseResponseDetailsPage.Raw | null;
    }
}
