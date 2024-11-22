/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostTerminalsRequestCapability: core.serialization.Schema<
    serializers.PostTerminalsRequestCapability.Raw,
    ButtonclikrApi.PostTerminalsRequestCapability
> = core.serialization.enum_(["1", "2", "3", "4"]);

export declare namespace PostTerminalsRequestCapability {
    type Raw = "1" | "2" | "3" | "4";
}