/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The currency for which this entity will be funded on.Valid Values:\
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `USD` - **US Dollar.**
 *
 * - `CAD` - **Canadian Dollar.**
 *
 *                 </details>
 */
export type PutEntityRoutesIdRequestFundingCurrency = "USD" | "CAD";

export const PutEntityRoutesIdRequestFundingCurrency = {
    Usd: "USD",
    Cad: "CAD",
} as const;