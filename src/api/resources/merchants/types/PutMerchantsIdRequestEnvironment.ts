/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The environment which the Merchant is in, if applicable. <details> <summary>Valid Values</summary> - ` supermarket`` - **Supermarkets / Grocery** -  `moto`- **Mail Order / Telephone Order** -`cardPresent`- **Card Present Environment** -`fuel`- **Fuel / Gas Stations** -`serviceStation`- **Service Stations** -`restaurant`- **Restaurants** -`ecommerce` - **eCommerce / Online Sales** </details>
 */
export type PutMerchantsIdRequestEnvironment =
    | "supermarket"
    | "moto"
    | "cardPresent"
    | "fuel"
    | "serviceStation"
    | "restaurant"
    | "ecommerce";

export const PutMerchantsIdRequestEnvironment = {
    Supermarket: "supermarket",
    Moto: "moto",
    CardPresent: "cardPresent",
    Fuel: "fuel",
    ServiceStation: "serviceStation",
    Restaurant: "restaurant",
    Ecommerce: "ecommerce",
} as const;