/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The platform used to process this PaymentUpdate.
 */
export type PostSecretsRequestPlatform =
    | "APPLE"
    | "ELAVON"
    | "FIRSTDATA"
    | "GOOGLE"
    | "VANTIV"
    | "VCORE"
    | "WELLSACH"
    | "WELLSFARGO"
    | "WFSINGLE"
    | "WORLDPAY"
    | "TDBANKCA";

export const PostSecretsRequestPlatform = {
    Apple: "APPLE",
    Elavon: "ELAVON",
    Firstdata: "FIRSTDATA",
    Google: "GOOGLE",
    Vantiv: "VANTIV",
    Vcore: "VCORE",
    Wellsach: "WELLSACH",
    Wellsfargo: "WELLSFARGO",
    Wfsingle: "WFSINGLE",
    Worldpay: "WORLDPAY",
    Tdbankca: "TDBANKCA",
} as const;
