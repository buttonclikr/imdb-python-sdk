/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostTerminalRefsRequestStage: core.serialization.Schema<
    serializers.PostTerminalRefsRequestStage.Raw,
    ButtonclikrApi.PostTerminalRefsRequestStage
> = core.serialization.enum_(["create", "pid", "tid", "token", "ctid"]);

export declare namespace PostTerminalRefsRequestStage {
    type Raw = "create" | "pid" | "tid" | "token" | "ctid";
}