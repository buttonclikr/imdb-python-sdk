/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostChargebackStatusesResponseResponse } from "./PostChargebackStatusesResponseResponse";

export const PostChargebackStatusesResponse: core.serialization.ObjectSchema<
    serializers.PostChargebackStatusesResponse.Raw,
    ButtonclikrApi.PostChargebackStatusesResponse
> = core.serialization.object({
    response: PostChargebackStatusesResponseResponse.optional(),
});

export declare namespace PostChargebackStatusesResponse {
    interface Raw {
        response?: PostChargebackStatusesResponseResponse.Raw | null;
    }
}
