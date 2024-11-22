/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         login: "login",
 *         inactive: 1,
 *         frozen: 1
 *     }
 */
export interface PutHoldsIdRequest {
    /** The identifier of the Login that owns this holds resource. */
    login: string;
    /** If this hold resource was triggered through bigbux Integration Risk, then this field stores the identifier of the VerificationRef. */
    verificationRef?: string;
    /** If this hold was released, this will contain the timestamp for when it was released. */
    released?: Date;
    /** If this hold was reviewed, this will contain the timestamp for when it was reviewed., format: date-time */
    reviewed?: string;
    /**
     * The final action taken on the hold while its been released.Valid Values:
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *  - `1` - **Holds released because the hold resource was approved.**
     *
     *  - `2` - **Holds released because the hold resource was cancelled.**
     *
     *  - `3` - **Holds released because the hold resource was refunded.**
     *
     *  - `4` - **Holds released because the hold resource was failed.**
     *
     *  </details>
     *
     */
    releaseAction?: number;
    /**
     * Field created to know the reason for why a hold was created.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *  - `API_DECISION` - **API_DECISION**
     *
     *  - `POLICY_RUN` - **POLICY_RUN**
     *
     *  - `RISK_ALERT` - **RISK_ALERT**
     *
     *  - `MANUAL` - **MANUAL**
     *
     *  - `ERROR` - **ERROR**
     *
     *  </details>
     *
     */
    holdSource?: ButtonclikrApi.PutHoldsIdRequestHoldSource;
    /** reasonid for why a hold was created. */
    holdSourceId?: string;
    /** The timestamp when hold was considered to be delaying funding. */
    delayedFundingStartDate?: Date;
    /** The timestamp when hold stopped delaying funding, this might be due to the hold been released, cancelled or funded. */
    delayedFundingEndDate?: Date;
    /** The person who review the hold applied. */
    analyst?: string;
    /** The timestamp for the most recent update of the analyst field */
    claimed?: Date;
    inactive: ButtonclikrApi.Inactive;
    frozen: ButtonclikrApi.Frozen;
}
