/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         login: "login",
 *         action: 1,
 *         inactive: 1,
 *         frozen: 1
 *     }
 */
export interface PostHoldsRequest {
    /** The identifier of the Login that owns this holds resource. */
    login: string;
    /** The Entity id in which this Hold belongs to. */
    entity?: string;
    /** The identifier of the Txn that is being held with this hold. */
    txn?: string;
    /** The TerminalTxn id in which this Hold belongs to. */
    terminalTxn?: string;
    /** The identifier of the Account that owns this holds resource. */
    account?: string;
    /** If this hold resource was triggered through a verification then this field stores the identifier of the Verification. */
    verification?: string;
    /** If this hold resource was triggered through bigbux Integration Risk then this field stores the identifier of the VerificationRef. */
    verificationRef?: string;
    /** The DecisionAction id in which this Hold belongs to. */
    decisionAction?: string;
    /**
     * The action taken on the referenced Txn. Block, Hold, or Reserve it.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *  - `0` - **NONE** No Action
     *
     *  - `1` - **Block.** Block the Transaction from proceeding. This returns an error.
     *
     *  - `3` - **Hold.** Hold the Transaction. It will not be captured until it is manually released.
     *
     *  - `4` - **Reserve** Reserve the Transaction. The funds for the transaction will not be released until the Transaction is manually reviewed.
     *
     *  - `5` - **LIMIT** Block current activity.
     *
     *  - `6` - **PASS** Passed decision(s).
     *
     *  </details>
     *
     */
    action: number;
    /** If this hold was released this will contain the timestamp for when it was released. */
    released?: Date;
    /** If this hold was reviewed this will contain the timestamp for when it was reviewed. */
    reviewed?: Date;
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
    holdSource?: ButtonclikrApi.PostHoldsRequestHoldSource;
    /** Reason id for why a hold was created. */
    holdSourceId?: string;
    /** The timestamp when hold was considered to be delaying funding. */
    delayedFundingStartDate?: Date;
    /** The timestamp when hold stopped delaying funding this might be due to the hold been released cancelled or funded. */
    delayedFundingEndDate?: Date;
    /** The person who review the hold applied. */
    analyst?: string;
    /** The timestamp for the most recent update of the analyst field */
    claimed?: Date;
    /** ID of the division associated with this vendor */
    division?: string;
    inactive: ButtonclikrApi.Inactive;
    frozen: ButtonclikrApi.Frozen;
}