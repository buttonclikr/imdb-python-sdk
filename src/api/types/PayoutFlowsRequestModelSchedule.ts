/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * he schedule that determines when the Payout resource that is created should be triggered to be paid.
 *
 * <details>
 * <summary>Valid Values</summary>
 * - `days` - Payout schedule every day.
 * - `weeks` - Payout schedule every week.
 * - `months` - Payout schedule every month.
 * - `years` - Payout schedule every year.
 * - `single` - Payout schedule for one time.
 * </details>
 */
export type PayoutFlowsRequestModelSchedule = "days" | "weeks" | "months" | "years" | "single";

export const PayoutFlowsRequestModelSchedule = {
    Days: "days",
    Weeks: "weeks",
    Months: "months",
    Years: "years",
    Single: "single",
} as const;
