/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The schedule that determines when the funds in this Reserve should be released.
 *
 * <details>
 * <summary>Valid Values</summary>
 *
 * - `never` - No automated release of reserved funds.
 *
 * - `days` - Every given number of days.
 *
 * - `weeks` - Every given number of weeks.
 *
 * - `months` - Every given number of months.
 *
 * - `years` - Every given number of years.
 *
 * </details>
 */
export type PostReservesRequestRelease = "never" | "days" | "weeks" | "months" | "years";

export const PostReservesRequestRelease = {
    Never: "never",
    Days: "days",
    Weeks: "weeks",
    Months: "months",
    Years: "years",
} as const;
