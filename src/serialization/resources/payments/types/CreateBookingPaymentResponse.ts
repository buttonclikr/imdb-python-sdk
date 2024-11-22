/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { LinksBooking } from "../../../types/LinksBooking";
import { BookingPayment } from "../../../types/BookingPayment";

export const CreateBookingPaymentResponse: core.serialization.ObjectSchema<
    serializers.CreateBookingPaymentResponse.Raw,
    ButtonclikrApi.CreateBookingPaymentResponse
> = core.serialization
    .object({
        links: LinksBooking.optional(),
    })
    .extend(BookingPayment);

export declare namespace CreateBookingPaymentResponse {
    interface Raw extends BookingPayment.Raw {
        links?: LinksBooking.Raw | null;
    }
}