/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The environment which the Merchant is in, if applicable.
 */
export type MerchantResponseModelEnvironment =
    | "supermarket"
    | "moto"
    | "cardPresent"
    | "fuel"
    | "serviceStation"
    | "restaurant"
    | "ecommerce";

export const MerchantResponseModelEnvironment = {
    Supermarket: "supermarket",
    Moto: "moto",
    CardPresent: "cardPresent",
    Fuel: "fuel",
    ServiceStation: "serviceStation",
    Restaurant: "restaurant",
    Ecommerce: "ecommerce",
} as const;