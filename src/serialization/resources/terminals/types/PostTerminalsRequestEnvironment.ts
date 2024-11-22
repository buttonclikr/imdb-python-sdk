/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostTerminalsRequestEnvironment: core.serialization.Schema<
    serializers.PostTerminalsRequestEnvironment.Raw,
    ButtonclikrApi.PostTerminalsRequestEnvironment
> = core.serialization.enum_(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]);

export declare namespace PostTerminalsRequestEnvironment {
    type Raw = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13";
}