/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutBillingEventsIdResponseDetailsPage } from "./PutBillingEventsIdResponseDetailsPage";

export const PutBillingEventsIdResponseDetails: core.serialization.ObjectSchema<
    serializers.PutBillingEventsIdResponseDetails.Raw,
    ButtonclikrApi.PutBillingEventsIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PutBillingEventsIdResponseDetailsPage.optional(),
});

export declare namespace PutBillingEventsIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PutBillingEventsIdResponseDetailsPage.Raw | null;
    }
}
