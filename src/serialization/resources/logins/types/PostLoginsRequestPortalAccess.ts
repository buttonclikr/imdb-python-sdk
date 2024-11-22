/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostLoginsRequestPortalAccess: core.serialization.Schema<
    serializers.PostLoginsRequestPortalAccess.Raw,
    ButtonclikrApi.PostLoginsRequestPortalAccess
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostLoginsRequestPortalAccess {
    type Raw = "0" | "1";
}
