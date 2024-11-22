/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const TerminalTxnsModelCvvStatus: core.serialization.Schema<
    serializers.TerminalTxnsModelCvvStatus.Raw,
    ButtonclikrApi.TerminalTxnsModelCvvStatus
> = core.serialization.enum_(["notPresent", "illegible", "notProvided"]);

export declare namespace TerminalTxnsModelCvvStatus {
    type Raw = "notPresent" | "illegible" | "notProvided";
}