/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const Modified: core.serialization.Schema<serializers.Modified.Raw, ButtonclikrApi.Modified> =
    core.serialization.date();

export declare namespace Modified {
    type Raw = string;
}
