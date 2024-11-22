/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The platform that issued this entityRef, used to process this Disbursement.
 */
export type PostEntityRefsRequestPlatform =
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

export const PostEntityRefsRequestPlatform = {
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