/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackMessagesIdResponseDetailsPage } from "./GetChargebackMessagesIdResponseDetailsPage";

export const GetChargebackMessagesIdResponseDetails: core.serialization.ObjectSchema<
    serializers.GetChargebackMessagesIdResponseDetails.Raw,
    ButtonclikrApi.GetChargebackMessagesIdResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: GetChargebackMessagesIdResponseDetailsPage.optional(),
});

export declare namespace GetChargebackMessagesIdResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: GetChargebackMessagesIdResponseDetailsPage.Raw | null;
    }
}