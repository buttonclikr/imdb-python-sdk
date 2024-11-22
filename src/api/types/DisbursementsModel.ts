/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../index";

export interface DisbursementsModel {
    id?: ButtonclikrApi.Id;
    created?: ButtonclikrApi.Created;
    modified?: ButtonclikrApi.Modified;
    creator?: ButtonclikrApi.Creator;
    modifier?: ButtonclikrApi.Modifier;
    /** The identifier of the Entity that owns this Disbursement. */
    entity?: string;
    /** The token of the accounts resource used for this Disbursement. */
    account?: string;
    /** A reference to the actual account/card data used for this disbursement. If someone changes the details in their bank account within bigbux, the account token will point to a new account but the payment will always point to the data used for this disbursement. */
    payment?: string;
    /** The identifier of the Payout that represents the schedule for this Disbursement. */
    payout?: string;
    /** The settlement record for this disbursement. */
    settlement?: string;
    /** The identifier of the Statement being paid by this Disbursement. */
    statement?: string;
    /** The funding reference associated with this Disbursement. */
    funding?: string;
    /** The original disbursement that generated this disbursement. */
    originalDisbursement?: string;
    /** A description of this Disbursement. */
    description?: string;
    /** A secondary descriptor for the ACH transaction sent to the receiving bank. */
    secondaryDescriptor?: string;
    /** The total amount of this Disbursement. */
    amount?: number;
    /** Confirmation of the approved amount based on the response from the processor */
    approvedAmount?: number;
    /** The amount that has been returned within the disbursement. */
    returnedAmount?: number;
    /**
     * The current status of this Disbursement
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `1` - **Requested.** The request for this Disbursement has been received.
     *
     * - `2` - **Processing.** This Disbursement is being processed to be paid out.
     *
     * - `3` - **Processed.** This Disbursement has been paid by ACH to the bank account referenced in the Disbursement data.
     *
     * - `4` - **Failed.** A problem occurred and the payment processor has failed to process this Disbursement.
     *
     * - `5` - **Denied.** This Disbursement has been refused.
     *
     * - `6` - **Returned.** This Disbursement has been returned.
     *
     * </details>
     */
    status?: number;
    /**
     * Indicates if entries were processed for this Disbursement
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `pending` - Pending entry creation and processing.
     *
     * - `processed` - Entry created and processed.
     *
     * </details>
     */
    fundingStatus?: ButtonclikrApi.DisbursementsModelFundingStatus;
    /** A timestamp indicating when the Disbursement was processed. */
    processed?: Date;
    /**
     * Whether one or more disbursementEntries have been deleted due to adjustment.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - Disbursement Entries not Deleted.
     *
     * - `1` - Disbursement Entries Deleted.
     *
     * </details>
     */
    deletedDisbursementEntries?: number;
    /**
     * The current status of disbursementEntries creation.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `pending` - Pending entry creation and processing.
     *
     * - `processing` - Entry is still processing.
     *
     * - `processed` - Entry created and processed.
     *
     * </details>
     */
    disbursementEntriesStatus?: ButtonclikrApi.DisbursementsModelDisbursementEntriesStatus;
    /** The last negative Entry processed included in the disbursement. */
    lastNegativeEntry?: string;
    /** The last negative PendingEntry processed included in the disbursement. */
    lastNegativePendingEntry?: string;
    /** The last positive ReserveEntry processed included in the disbursement. */
    lastPositiveReserveEntry?: string;
    /** The last positive Entry processed included in the disbursement. */
    lastPositiveEntry?: string;
    /** The last positive PendingEntry processed included in the disbursement. */
    lastPositivePendingEntry?: string;
    /** The last negative ReserveEntry processed included in the disbursement. */
    lastNegativeReserveEntry?: string;
    /** The currency of this Disbursement. */
    currency?: ButtonclikrApi.DisbursementsModelCurrency;
    /** The expiration date of the related debit account. */
    expiration?: string;
    /**
     * The platform used to process this Transaction.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `ELAVON` - The Elavon processor.
     *
     * - `VANTIV` - The WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.
     *
     * - `VCORE` - The WorldPay (aka Vantiv) Core processor.
     *
     * - `TDBANK` - External funding with TD Bank via the Operating Account.
     *
     * - `TDBANKCA` - External funding with TD Bank Canada via the Operating Account.
     *
     * - `WELLSACH` - The Wells Fargo ACH processor.
     *
     * - `WELLSFARGO` - The Wells Fargo Merchant Services processor.
     *
     * - `WFSINGLE` - The WFSINGLE processor.
     *
     * - `WORLDPAY` - The WORLDPAY processor.
     *
     * </details>
     */
    platform?: ButtonclikrApi.DisbursementsModelPlatform;
    /**
     * Whether sameDay funding is enabled or disabled for this disbursement.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Disabled.**
     *
     * - `1` - **Enabled.**
     * </details>
     */
    sameDay?: number;
    frozen?: ButtonclikrApi.Frozen;
    inactive?: ButtonclikrApi.Inactive;
}