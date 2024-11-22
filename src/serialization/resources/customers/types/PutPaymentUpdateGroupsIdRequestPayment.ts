/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutPaymentUpdateGroupsIdRequestPaymentMethod } from "./PutPaymentUpdateGroupsIdRequestPaymentMethod";

export const PutPaymentUpdateGroupsIdRequestPayment: core.serialization.ObjectSchema<
    serializers.PutPaymentUpdateGroupsIdRequestPayment.Raw,
    ButtonclikrApi.PutPaymentUpdateGroupsIdRequestPayment
> = core.serialization.object({
    method: PutPaymentUpdateGroupsIdRequestPaymentMethod,
    number: core.serialization.unknown(),
});

export declare namespace PutPaymentUpdateGroupsIdRequestPayment {
    interface Raw {
        method: PutPaymentUpdateGroupsIdRequestPaymentMethod.Raw;
        number?: unknown;
    }
}