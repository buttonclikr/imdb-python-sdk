/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A date indicator that determines how far back in time time-based checks should be checked. This field works in conjunction with the 'periodFactor' field, which multiplies this basic period.
 */
export type PostDecisionsRequestPeriod = "days" | "weeks" | "months" | "years" | "seconds" | "minutes" | "hours";

export const PostDecisionsRequestPeriod = {
    Days: "days",
    Weeks: "weeks",
    Months: "months",
    Years: "years",
    Seconds: "seconds",
    Minutes: "minutes",
    Hours: "hours",
} as const;
