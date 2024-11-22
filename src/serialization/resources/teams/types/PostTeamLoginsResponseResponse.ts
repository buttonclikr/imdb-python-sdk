/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostTeamLoginsResponseResponseDetails } from "./PostTeamLoginsResponseResponseDetails";

export const PostTeamLoginsResponseResponse: core.serialization.ObjectSchema<
    serializers.PostTeamLoginsResponseResponse.Raw,
    ButtonclikrApi.PostTeamLoginsResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostTeamLoginsResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostTeamLoginsResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostTeamLoginsResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
