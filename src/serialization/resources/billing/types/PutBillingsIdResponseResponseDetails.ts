/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutBillingsIdResponseResponseDetailsPage } from "./PutBillingsIdResponseResponseDetailsPage";

export const PutBillingsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutBillingsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutBillingsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutBillingsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutBillingsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutBillingsIdResponseResponseDetailsPage.Raw | null;
    }
}