/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostProfitShareRulesResponseResponseDetailsPage } from "./PostProfitShareRulesResponseResponseDetailsPage";

export const PostProfitShareRulesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostProfitShareRulesResponseResponseDetails.Raw,
    ButtonclikrApi.PostProfitShareRulesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostProfitShareRulesResponseResponseDetailsPage.optional(),
});

export declare namespace PostProfitShareRulesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostProfitShareRulesResponseResponseDetailsPage.Raw | null;
    }
}