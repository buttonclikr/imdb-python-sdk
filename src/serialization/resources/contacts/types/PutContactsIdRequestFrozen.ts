/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutContactsIdRequestFrozen: core.serialization.Schema<
    serializers.PutContactsIdRequestFrozen.Raw,
    ButtonclikrApi.PutContactsIdRequestFrozen
> = core.serialization.enum_(["0", "1"]);

export declare namespace PutContactsIdRequestFrozen {
    type Raw = "0" | "1";
}