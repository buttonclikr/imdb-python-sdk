/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Payment Card Industry Data Security Standard (PCI DSS) Self-assessment questionnaire (SAQ). Details about a merchant's business and the way the currently accept payments or plan to in the future.
 *
 * For more information, see [Understanding SAQs PCI DSS provided by The PCI Security Standards Council](https://listings.pcisecuritystandards.org/documents/Understanding_SAQs_PCI_DSS_v3.pdf).
 *
 * <details>
 * <summary>Note about SAQ Types</summary>
 * - `SAQ-A` is not applicable to face-to-face channels.
 * - `SAQ-A-EP` is only applicable to e-commerce channels.
 * - `SAQ-B` is not applicable to e-commerce channels.
 * - `SAQ-B-IP` is not applicable to e-commerce channels.
 * - `SAQ-C-VT` is not applicable to e-commerce channels.
 * - `SAQ-C` is not applicable to e-commerce channels.
 * - `SAQ-P2PE-HW` is not applicable to e-commerce channels.
 * </details>
 *
 * <details>
 * <summary>Valid Values</summary>
 *   - `SAQ-A` - **Card-not-present merchants (e-commerce or mail/telephone-order) with PCI DSS-validated third-party payments service provider(s) and does not store cardholder data.**
 *
 * - `SAQ-A-EP` - **E-commerce merchants with PCI DSS-validated third-party payments service provider(s) with a website that doesn't directly collect cardholder data, but may impact it in some way, and does not store cardholder data.**
 *
 * - `SAQ-B` - **Merchants with imprint machines or standalone, dial-out terminals that do not store cardholder data.**
 *
 * - `SAQ-B-IP` - **Merchants with standalone, PTS-approved payment terminals that have an IP connection to the payment processor, but do not store cardholder data.**
 *
 * - `SAQ-C-VT` - **Merchants that enter single transactions manually into an internet-based terminal hosted by PCI DSS-validated third-party payments service provider(s) and does not store cardholder data.**
 *
 * - `SAQ-C` - **Merchants with payment application systems connected to the internet that do not store cardholder data.**
 *
 * - `SAQ-P2PE-HW` - \*\*Merchants with hardware-only payment terminals managed by a PCI SSC-listed P2PE solution, and does not store cardholder data.
 *
 * - `SAQ-D` - Generic field for all Merchants that do not fall under the requirements for any above SAQ types.
 *
 * </details>
 */
export type PutMerchantsIdRequestSaqType =
    | "SAQ-A"
    | "SAQ-A-EP"
    | "SAQ-B"
    | "SAQ-B-IP"
    | "SAQ-C-VT"
    | "SAQ-C"
    | "SAQ-P2PE-HW"
    | "SAQ-D";

export const PutMerchantsIdRequestSaqType = {
    SaqA: "SAQ-A",
    SaqAEp: "SAQ-A-EP",
    SaqB: "SAQ-B",
    SaqBIp: "SAQ-B-IP",
    SaqCVt: "SAQ-C-VT",
    SaqC: "SAQ-C",
    SaqP2PeHw: "SAQ-P2PE-HW",
    SaqD: "SAQ-D",
} as const;
