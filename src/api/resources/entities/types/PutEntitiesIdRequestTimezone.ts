/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The timezone for the address associated with the terminal''s location.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `est` - **Eastern Standard Time**
 *
 * - `pst` - **Pacific Standard Time**
 *
 * - `cst` - **Central Standard Time**
 *
 * - `mst` - **Mountain Daylight Time**
 *
 * - `akst` - **Alaska Standard Time**
 *
 * - `hst` - **Hawaii Standard Time**
 *
 * - `sst` - **Samoa Standard Time**
 *
 * - `chst` - **Chamorro Standard Time**
 *
 * - `ast` - **Atlantic Standard Time**
 *
 * - `pwt` - **Palau Time**
 *
 * - `mht` - **Marshall Islands Time**
 *
 * - `chut` - **Chuuk Time**
 *
 * - `nst` - **Newfoundland Standard Time**
 *
 *  </details>
 */
export type PutEntitiesIdRequestTimezone =
    | "est"
    | "cst"
    | "pst"
    | "mst"
    | "akst"
    | "hst"
    | "sst"
    | "chst"
    | "ast"
    | "pwt"
    | "mht"
    | "chut"
    | "nst";

export const PutEntitiesIdRequestTimezone = {
    Est: "est",
    Cst: "cst",
    Pst: "pst",
    Mst: "mst",
    Akst: "akst",
    Hst: "hst",
    Sst: "sst",
    Chst: "chst",
    Ast: "ast",
    Pwt: "pwt",
    Mht: "mht",
    Chut: "chut",
    Nst: "nst",
} as const;
