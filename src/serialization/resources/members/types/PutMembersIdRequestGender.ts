/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutMembersIdRequestGender: core.serialization.Schema<
    serializers.PutMembersIdRequestGender.Raw,
    ButtonclikrApi.PutMembersIdRequestGender
> = core.serialization.enum_(["male", "female"]);

export declare namespace PutMembersIdRequestGender {
    type Raw = "male" | "female";
}