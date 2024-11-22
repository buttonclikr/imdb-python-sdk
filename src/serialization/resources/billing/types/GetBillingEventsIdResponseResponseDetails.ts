/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingEventsIdResponseResponseDetailsPage } from "./GetBillingEventsIdResponseResponseDetailsPage";

export const GetBillingEventsIdResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetBillingEventsIdResponseResponseDetails.Raw,
    ButtonclikrApi.GetBillingEventsIdResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetBillingEventsIdResponseResponseDetailsPage.optional(),
});

export declare namespace GetBillingEventsIdResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetBillingEventsIdResponseResponseDetailsPage.Raw | null;
    }
}