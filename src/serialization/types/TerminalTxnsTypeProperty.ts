/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const TerminalTxnsTypeProperty: core.serialization.Schema<
    serializers.TerminalTxnsTypeProperty.Raw,
    ButtonclikrApi.TerminalTxnsTypeProperty
> = core.serialization.number();

export declare namespace TerminalTxnsTypeProperty {
    type Raw = number;
}