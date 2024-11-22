/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../index";

export interface PayoutRequestModel {
    /** The Login that owns this resource. */
    login: string;
    /** The identifier of the Entity that this Payout is associated with. */
    entity: string;
    /** The identifier of a Billing that this Payout is associated with. Payout associated with a Billing record will be used to pay for Statements. */
    billing?: string;
    /**
     * The token of the Account that this Payout is associated with.
     * This account will either receive the funds or be debited for the funds every time a Disbursement occurs, depending on the direction of the Disbursement.
     */
    account: string;
    /** The identifier of the PayoutFlow associated with this Payout. */
    payoutFlow?: string;
    /**
     * The name of this Payout.
     * This field is stored as a text string and must be between 0 and 100 characters long.
     */
    name?: string;
    /**
     * A description of this Payout.
     * This field is stored as a text string and must be between 0 and 100 characters long.
     */
    description?: string;
    /** The secondary billing descriptor to appear on the bank statements for the payout. */
    secondaryDescriptor?: string;
    /**
     * The schedule that determines when this Payout is triggered to be paid defines the frequency of payment.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `1` - **Daily.** The Payout is paid every day.
     * - `2` - **Weekly.** The Payout is paid every week.
     * - `3` - **Monthly.** The Payout is paid every month.
     * - `4` - **Annually.** The Payout is paid once per year.
     * - `5` - **Single.** The Payout is an individual, one-off payment.
     *
     * </details>
     */
    schedule: number;
    /**
     * A multiplier that you can use to adjust the schedule set in the 'schedule' field, if it is set to a duration-based trigger, such as daily, weekly, monthly, or annually.
     * This field is specified as an integer and its value determines how the interval is multiplied.
     */
    scheduleFactor: number;
    /**
     * The date on which payment of the Payout should start.
     * The date is specified as an eight digit string in YYYYMMDD format, for example, '20160120' for January 20, 2016.
     * The value of this field must represent a date in the future, or the present date.
     */
    start: number;
    /** The currency of the amount in this Payout, which is only required when Um is set to ACTUAL, defaults to The currency for this statement if not set. */
    currency?: ButtonclikrApi.PayoutRequestModelCurrency;
    /** The unit of measure for this Payout is the percentage of funds, and if the Entity has a negative balance of $10 and the amount is set to 10000 (100%), then $10 will be drawn from their account to fully replenish the balance to $0. <details> <summary>Valid Values</summary> - `percent` - **Percentage unit measurement.** (Percentage of Funds). - `actual` - **Actual unit measurement.** (Exact Currency Amount). - `percentneg` - **Negative Percentage unit measurement.** (Replenish account by percent negative back to $0). </details> */
    um: ButtonclikrApi.PayoutRequestModelUm;
    /**
     * The total amount of this Payout.
     * The units used in this field are determined by the value of the 'um' field on the Payout. If the 'um' field is set to '1' or '3', then this field specifies the Payout percentage to levy in basis points. If the 'um' field is set to '2', then this field specifies the Payout in cents.
     */
    amount: number;
    /** The threshold that will ensure no disbursement is generated if it doesn't reach the minimum value. */
    minimum?: number;
    /** The maximum threshold for a disbursement. Any amount in a disbursement exceeding this value will not be released, and will roll over to the next disbursement. */
    maximum?: number;
    /**
     * An optional field indicating the minimum balance you want to maintain, despite any Payouts occurring. If the Payout would reduce the balance to below this value, then it is not processed.
     * This field is specified as an integer in cents.
     * For example, a float value of 1000 would ensure that a balance of 10 USD is maintained at all times.
     */
    float: number;
    /**
     * Whether to skip the creation of disbursements on holidays and weekends.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - Do not skip Holidays and Weekends. Disbursement will be generated in a Requested status and process the next business day.
     *
     * - `1` - Skip Holidays and Weekends. IMPORTANT: We do not advise setting this for weekly, monthly, or yearly Payout schedules as the disbursement will skip and not be generated until the next scheduled date.
     *
     *  </details>
     */
    skipOffDays: number;
    /**
     * Whether sameDay payout is enabled or disabled.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Disabled**
     *
     * - `1` - **Enabled**
     *
     *  </details>
     */
    sameDay: number;
    inactive: ButtonclikrApi.Inactive;
    frozen: ButtonclikrApi.Frozen;
}
