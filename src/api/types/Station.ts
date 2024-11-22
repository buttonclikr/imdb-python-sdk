/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Station {
    /** Unique identifier for the station. */
    id: string;
    /** The name of the station */
    name: string;
    /** The address of the station. */
    address: string;
    /** The country code of the station. */
    countryCode: string;
    /** The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones). */
    timezone?: string;
}
