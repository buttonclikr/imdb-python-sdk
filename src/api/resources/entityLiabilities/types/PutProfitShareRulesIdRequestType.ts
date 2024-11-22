/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of logic to apply with this ProfitShare Rule is determined by valid values such as `less`, `equal`, `notEqual`, `greater`, `event`, `notEvent`, `fee`, `notFee`, and `fromentity` or `notFromentity`.
 */
export type PutProfitShareRulesIdRequestType =
    | "less"
    | "equal"
    | "notEqual"
    | "greater"
    | "event"
    | "notEvent"
    | "fee"
    | "notFee"
    | "fromentity"
    | "notFromentity";

export const PutProfitShareRulesIdRequestType = {
    Less: "less",
    Equal: "equal",
    NotEqual: "notEqual",
    Greater: "greater",
    Event: "event",
    NotEvent: "notEvent",
    Fee: "fee",
    NotFee: "notFee",
    Fromentity: "fromentity",
    NotFromentity: "notFromentity",
} as const;