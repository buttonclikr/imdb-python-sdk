/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The platform used to process this Transaction.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `ELAVON` - The Elavon processor.
 *
 * - `VANTIV` - The WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.
 *
 * - `VCORE` - The WorldPay (aka Vantiv) Core processor.
 *
 * - `TDBANK` - External funding with TD Bank via the Operating Account.
 *
 * - `TDBANKCA` - External funding with TD Bank Canada via the Operating Account.
 *
 * - `WELLSACH` - The Wells Fargo ACH processor.
 *
 * - `WELLSFARGO` - The Wells Fargo Merchant Services processor.
 *
 * - `WFSINGLE` - The WFSINGLE processor.
 *
 * - `WORLDPAY` - The WORLDPAY processor.
 *
 * </details>
 */
export type DisbursementRefsRequestModelPlatform =
    | "ELAVON"
    | "VANTIV"
    | "VCORE"
    | "TDBANK"
    | "TDBANKCA"
    | "WELLSACH"
    | "WELLSFARGO"
    | "WFSINGLE"
    | "WORLDPAY";

export const DisbursementRefsRequestModelPlatform = {
    Elavon: "ELAVON",
    Vantiv: "VANTIV",
    Vcore: "VCORE",
    Tdbank: "TDBANK",
    Tdbankca: "TDBANKCA",
    Wellsach: "WELLSACH",
    Wellsfargo: "WELLSFARGO",
    Wfsingle: "WFSINGLE",
    Worldpay: "WORLDPAY",
} as const;
