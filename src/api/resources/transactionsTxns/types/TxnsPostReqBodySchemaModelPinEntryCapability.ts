/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the PIN entry capability of the device
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `unknown` - **Unknown PIN Entry Capability.**
 *
 * - `capable` - **Terminal can accept PINs.**
 *
 * - `notCapable` - **Terminal cannot accept entry of PINs.**
 *
 * - `pinPadDown` - **Terminal PIN Pad is down.**
 *
 * </details>
 */
export type TxnsPostReqBodySchemaModelPinEntryCapability = "unknown" | "capable" | "notCapable" | "pinPadDown";

export const TxnsPostReqBodySchemaModelPinEntryCapability = {
    Unknown: "unknown",
    Capable: "capable",
    NotCapable: "notCapable",
    PinPadDown: "pinPadDown",
} as const;