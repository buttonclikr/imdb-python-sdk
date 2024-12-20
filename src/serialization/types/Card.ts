/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const Card: core.serialization.ObjectSchema<serializers.Card.Raw, ButtonclikrApi.Card> =
    core.serialization.object({
        name: core.serialization.string(),
        number: core.serialization.string(),
        cvc: core.serialization.number(),
        expMonth: core.serialization.property("exp_month", core.serialization.number()),
        expYear: core.serialization.property("exp_year", core.serialization.number()),
        addressLine1: core.serialization.property("address_line1", core.serialization.string().optional()),
        addressLine2: core.serialization.property("address_line2", core.serialization.string().optional()),
        addressCity: core.serialization.property("address_city", core.serialization.string().optional()),
        addressCountry: core.serialization.property("address_country", core.serialization.string()),
        addressPostCode: core.serialization.property("address_post_code", core.serialization.string().optional()),
    });

export declare namespace Card {
    interface Raw {
        name: string;
        number: string;
        cvc: number;
        exp_month: number;
        exp_year: number;
        address_line1?: string | null;
        address_line2?: string | null;
        address_city?: string | null;
        address_country: string;
        address_post_code?: string | null;
    }
}
