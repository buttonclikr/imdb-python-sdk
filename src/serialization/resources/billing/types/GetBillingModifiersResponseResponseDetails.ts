/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingModifiersResponseResponseDetailsPage } from "./GetBillingModifiersResponseResponseDetailsPage";

export const GetBillingModifiersResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.GetBillingModifiersResponseResponseDetails.Raw,
    ButtonclikrApi.GetBillingModifiersResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetBillingModifiersResponseResponseDetailsPage.optional(),
});

export declare namespace GetBillingModifiersResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetBillingModifiersResponseResponseDetailsPage.Raw | null;
    }
}
