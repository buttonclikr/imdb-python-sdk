/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ButtonclikrApi from "../../api/index";
import * as core from "../../core";

export const Trip: core.serialization.ObjectSchema<serializers.Trip.Raw, ButtonclikrApi.Trip> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        origin: core.serialization.string().optional(),
        destination: core.serialization.string().optional(),
        departureTime: core.serialization.property("departure_time", core.serialization.date().optional()),
        arrivalTime: core.serialization.property("arrival_time", core.serialization.date().optional()),
        operator: core.serialization.string().optional(),
        price: core.serialization.number().optional(),
        bicyclesAllowed: core.serialization.property("bicycles_allowed", core.serialization.boolean().optional()),
        dogsAllowed: core.serialization.property("dogs_allowed", core.serialization.boolean().optional()),
    });

export declare namespace Trip {
    interface Raw {
        id?: string | null;
        origin?: string | null;
        destination?: string | null;
        departure_time?: string | null;
        arrival_time?: string | null;
        operator?: string | null;
        price?: number | null;
        bicycles_allowed?: boolean | null;
        dogs_allowed?: boolean | null;
    }
}
