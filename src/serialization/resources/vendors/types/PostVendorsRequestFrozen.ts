/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostVendorsRequestFrozen: core.serialization.Schema<
    serializers.PostVendorsRequestFrozen.Raw,
    ButtonclikrApi.PostVendorsRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PostVendorsRequestFrozen {
    type Raw = "0" | "1";
}
