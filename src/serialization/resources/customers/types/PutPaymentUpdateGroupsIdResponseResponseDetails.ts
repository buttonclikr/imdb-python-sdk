/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutPaymentUpdateGroupsIdResponseResponseDetailsPage } from "./PutPaymentUpdateGroupsIdResponseResponseDetailsPage";

export const PutPaymentUpdateGroupsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PutPaymentUpdateGroupsIdResponseResponseDetails.Raw,
    ButtonclikrApi.PutPaymentUpdateGroupsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutPaymentUpdateGroupsIdResponseResponseDetailsPage.optional(),
});

export declare namespace PutPaymentUpdateGroupsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutPaymentUpdateGroupsIdResponseResponseDetailsPage.Raw | null;
    }
}
