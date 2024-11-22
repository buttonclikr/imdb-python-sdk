/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The hierarchical level for this reserve setting.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `admin` - System-wide admin
 *
 * - `division` - Partition-wide admin
 *
 * - `merchant` - Division-wide admin
 *
 * - `partition` - Merchant user
 *
 * </details>
 */
export type PutReservesIdRequestLevel = "admin" | "division" | "merchant" | "partition";

export const PutReservesIdRequestLevel = {
    Admin: "admin",
    Division: "division",
    Merchant: "merchant",
    Partition: "partition",
} as const;
