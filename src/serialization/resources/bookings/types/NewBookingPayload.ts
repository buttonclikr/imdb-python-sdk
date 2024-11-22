/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { NewBookingPayloadLinks } from "./NewBookingPayloadLinks";
import { Booking } from "../../../types/Booking";

export const NewBookingPayload: core.serialization.ObjectSchema<
    serializers.NewBookingPayload.Raw,
    ButtonclikrApi.NewBookingPayload
> = core.serialization
    .object({
        links: NewBookingPayloadLinks.optional(),
    })
    .extend(Booking);

export declare namespace NewBookingPayload {
    interface Raw extends Booking.Raw {
        links?: NewBookingPayloadLinks.Raw | null;
    }
}
