/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The platform used to process this Transaction.
 */
export type TxnsModelPlatform =
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

export const TxnsModelPlatform = {
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
