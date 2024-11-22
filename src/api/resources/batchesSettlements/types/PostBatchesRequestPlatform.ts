/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The platform used to process this Batch and Transaction.
 */
export type PostBatchesRequestPlatform =
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

export const PostBatchesRequestPlatform = {
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