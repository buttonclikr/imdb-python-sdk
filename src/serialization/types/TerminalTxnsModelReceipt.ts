/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const TerminalTxnsModelReceipt: core.serialization.Schema<
    serializers.TerminalTxnsModelReceipt.Raw,
    ButtonclikrApi.TerminalTxnsModelReceipt
> = core.serialization.enum_(["noReceipt", "merchant", "customer", "both"]);

export declare namespace TerminalTxnsModelReceipt {
    type Raw = "noReceipt" | "merchant" | "customer" | "both";
}
