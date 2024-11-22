/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostInvoicesResponseResponse } from "./PostInvoicesResponseResponse";

export const PostInvoicesResponse: core.serialization.ObjectSchema<
    serializers.PostInvoicesResponse.Raw,
    ButtonclikrApi.PostInvoicesResponse
> = core.serialization.object({
    response: PostInvoicesResponseResponse.optional(),
});

export declare namespace PostInvoicesResponse {
    interface Raw {
        response?: PostInvoicesResponseResponse.Raw | null;
    }
}
