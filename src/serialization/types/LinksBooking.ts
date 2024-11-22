/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const LinksBooking: core.serialization.ObjectSchema<serializers.LinksBooking.Raw, ButtonclikrApi.LinksBooking> =
    core.serialization.object({
        booking: core.serialization.string().optional(),
    });

export declare namespace LinksBooking {
    interface Raw {
        booking?: string | null;
    }
}
