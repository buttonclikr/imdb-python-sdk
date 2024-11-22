/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The Platform in which an entity should board into.
 * Currently, this field only accepts the value 'VANTIV'.
 */
export type PostEntityRoutesRequestPlatform =
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

export const PostEntityRoutesRequestPlatform = {
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