/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         allowPartial: 1,
 *         authentication: "authentication",
 *         debtRepayment: 1,
 *         fortxn: "fortxn",
 *         origin: 2,
 *         platform: ButtonclikrApi.TxnsPostReqBodySchemaModelPlatform.Apple,
 *         token: "e41272ec5464d9ec81cc85c854837472",
 *         type: ButtonclikrApi.TxnsPostReqBodySchemaModelType.One,
 *         unauthReason: ButtonclikrApi.TxnsPostReqBodySchemaModelUnauthReason.Incomplete,
 *         currency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
 *         fundingCurrency: ButtonclikrApi.TxnsPostReqBodySchemaModelFundingCurrency.Aed,
 *         swiped: 1,
 *         merchant: "p1_mer_5a1ef5e55656a739a85da21",
 *         mid: "mid",
 *         pin: 1,
 *         signature: 1,
 *         total: 100,
 *         unattended: 1
 *     }
 *
 * @example
 *     {
 *         allowPartial: 1,
 *         authentication: "authentication",
 *         debtRepayment: 1,
 *         expiration: "0120",
 *         fortxn: "fortxn",
 *         origin: 2,
 *         platform: ButtonclikrApi.TxnsPostReqBodySchemaModelPlatform.Apple,
 *         type: ButtonclikrApi.TxnsPostReqBodySchemaModelType.One,
 *         unauthReason: ButtonclikrApi.TxnsPostReqBodySchemaModelUnauthReason.Incomplete,
 *         currency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
 *         fundingCurrency: ButtonclikrApi.TxnsPostReqBodySchemaModelFundingCurrency.Aed,
 *         swiped: 1,
 *         merchant: "p1_mer_5a1ef5e55656a739a85da21",
 *         mid: "mid",
 *         pin: 1,
 *         signature: 1,
 *         total: 100,
 *         unattended: 1,
 *         payment: 1
 *     }
 *
 * @example
 *     {
 *         allowPartial: 1,
 *         authentication: "authentication",
 *         debtRepayment: 1,
 *         fortxn: "fortxn",
 *         origin: 2,
 *         platform: ButtonclikrApi.TxnsPostReqBodySchemaModelPlatform.Apple,
 *         token: "e41272ec5464d9ec81cc85c854837472",
 *         type: ButtonclikrApi.TxnsPostReqBodySchemaModelType.One,
 *         unauthReason: ButtonclikrApi.TxnsPostReqBodySchemaModelUnauthReason.Incomplete,
 *         currency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
 *         fundingCurrency: ButtonclikrApi.TxnsPostReqBodySchemaModelFundingCurrency.Aed,
 *         swiped: 1,
 *         merchant: "p1_mer_5a1ef5e55656a739a85da21",
 *         mid: "mid",
 *         pin: 1,
 *         signature: 1,
 *         total: 100,
 *         unattended: 1
 *     }
 *
 * @example
 *     {
 *         allowPartial: 1,
 *         authentication: "authentication",
 *         debtRepayment: 1,
 *         fortxn: "fortxn",
 *         origin: 2,
 *         platform: ButtonclikrApi.TxnsPostReqBodySchemaModelPlatform.Apple,
 *         token: "e41272ec5464d9ec81cc85c854837472",
 *         type: ButtonclikrApi.TxnsPostReqBodySchemaModelType.One,
 *         unauthReason: ButtonclikrApi.TxnsPostReqBodySchemaModelUnauthReason.Incomplete,
 *         currency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
 *         fundingCurrency: ButtonclikrApi.TxnsPostReqBodySchemaModelFundingCurrency.Aed,
 *         swiped: 1,
 *         merchant: "p1_mer_5a1ef5e55656a739a85da21",
 *         mid: "mid",
 *         pin: 1,
 *         signature: 1,
 *         total: 100,
 *         unattended: 1
 *     }
 *
 * @example
 *     {
 *         allowPartial: 1,
 *         authentication: "authentication",
 *         debtRepayment: 1,
 *         fortxn: "fortxn",
 *         origin: 2,
 *         platform: ButtonclikrApi.TxnsPostReqBodySchemaModelPlatform.Apple,
 *         token: "e41272ec5464d9ec81cc85c854837472",
 *         type: ButtonclikrApi.TxnsPostReqBodySchemaModelType.One,
 *         unauthReason: ButtonclikrApi.TxnsPostReqBodySchemaModelUnauthReason.Incomplete,
 *         currency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
 *         fundingCurrency: ButtonclikrApi.TxnsPostReqBodySchemaModelFundingCurrency.Aed,
 *         swiped: 1,
 *         merchant: "p1_mer_5a1ef5e55656a739a85da21",
 *         mid: "mid",
 *         pin: 1,
 *         signature: 1,
 *         total: 100,
 *         unattended: 1
 *     }
 */
export interface TxnsPostReqBodySchemaModel {
    /**
     * Whether to allow partial amount authorizations of this Transaction.
     * For example, if the transaction amount is $1000 and the processor only authorizes a smaller amount, then enabling this field  lets the Transaction proceed anyway.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Partial amount authorizations are not allowed.**
     *
     * - `1` - **Partial amount authorizations are allowed**
     * </details>
     */
    allowPartial: number;
    /** If the Transaction is linked to a Batch, this field specifies the identifier of the Batch. */
    batch?: string;
    /** Authentication token returned by the network in a 3DSecure txn. */
    authentication: string;
    /** Optional transaction ID returned by the network in a 3DSecure txn. */
    authenticationId?: string;
    /**
     * The type of Card On File transaction when using a token.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `single` - **Individual Transaction.**
     *
     * - `scheduled` - **Scheduled Transaction.**
     *
     * - `unscheduled` - **Unscheduled sequential Transaction.**
     *
     * </details>
     *
     */
    cofType?: ButtonclikrApi.TxnsPostReqBodySchemaModelCofType;
    /**
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *   - `customerAccepted` - **The customer accepted the currency conversion rate**
     *
     *   - `customerRejected` - **The customer rejected the currency conversion rate**
     *
     *   - `notEligible` - **This transaction is not eligible for currency conversion**
     *
     * </details>
     *
     */
    currencyConversion?: ButtonclikrApi.TxnsPostReqBodySchemaModelCurrencyConversion;
    /**
     * If this transaction is for debt repayment.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Not for Debt Repayment.**
     *
     * - `1` - **For Debt Repayment.**
     * </details>
     *
     */
    debtRepayment: number;
    /**
     * The expiration date of this Transaction.
     * This field is stored as a text string in 'MMYY' format, where 'MM' is the number of a month and 'YY' is the last two digits of a year. For example, '0623' for June 2023.
     * The value must reflect a future date.
     */
    expiration?: string;
    /**
     * If this Transaction is related to another Transaction, then this field is set to the identifier of the other Transaction.
     * For example, if this Transaction is a refund, this field could be set to the identifier of the original sale Transaction.
     */
    fortxn: string;
    /** Reauthorize this referenced Transaction. For example, to process a resubmission of a declined Transaction or to reauthorize an expired Transaction. */
    fromtxn?: string;
    /**
     * Reason for copying Transaction referenced in fromtxn field.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `resubmission` - **Resubmission**
     *
     * - `reauthorization` - **Reauthorization**
     * </details>
     *
     */
    copyReason?: ButtonclikrApi.TxnsPostReqBodySchemaModelCopyReason;
    /**
     * Indicates if a transaction is being processed through a Mobile POS
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Non-mobile POS**
     *
     * - `1` - **Mobile POS**
     *
     * </details>
     *
     */
    mobile?: number;
    /**
     * The origin of the transaction.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *    - `1` - **Originated at a credit card terminal.**
     *
     *    - `2` - **Originated through an eCommerce system.**
     *
     *    - `3` - **Originated as a mail order or telephone order transaction.**
     *
     *  - `4` - **Originated with Apple Pay.**
     *
     *  - `5` - **Originated as a Successful 3D Secure transaction.**
     *
     *  - `6` - **Originated as an Attempted 3D Secure transaction.**
     *
     *  - `7` - **Originated as a recurring transaction on the card.**
     *
     *  - `8` - **Originated in a PayFrame.**
     *
     *  </details>
     *
     *
     */
    origin: number;
    /**
     * Indicates the PIN entry capability of the device
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `unknown` - **Unknown PIN Entry Capability.**
     *
     * - `capable` - **Terminal can accept PINs.**
     *
     * - `notCapable` - **Terminal cannot accept entry of PINs.**
     *
     * - `pinPadDown` - **Terminal PIN Pad is down.**
     *
     * </details>
     *
     */
    pinEntryCapability?: ButtonclikrApi.TxnsPostReqBodySchemaModelPinEntryCapability;
    /** The platform used to process this Transaction. */
    platform: ButtonclikrApi.TxnsPostReqBodySchemaModelPlatform;
    /** For entry creation and deletion job sequencing: the current processed sequence number for this transaction. */
    processedSequence?: number;
    /**
     * A date indicating when this Transaction was funded.
     * This field is set automatically.
     */
    funded?: number;
    /** The transaction has been returned by the receiver. */
    returned?: string;
    /**
     * Whether or not funding is enabled for this Txn.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Disabled**
     *
     * - `1` - **Enabled**
     * </details>
     *
     */
    fundingEnabled?: number;
    /** FBO in which each entry origin belongs to. */
    fbo?: string;
    /** For entry creation and deletion job sequencing: the current processed sequence number for this transaction. */
    requestSequence?: number;
    /** The statement ID for which this transaction is being processed as payment. */
    statement?: string;
    /** The token of the Tokens resource this Transaction is associated with. */
    token?: string;
    /**
     * The type of Transaction.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *   - `1` - **Credit Card Only: Sale Transaction.** Processes a sale and charges the customer.
     *
     *   - `2` - **Credit Card Only: Auth Transaction.** Authorizes and holds the requested total on the credit card.
     *
     *   - `3` - **Credit Card Only: Capture Transaction.** Finalizes a prior Auth Transaction and charges the customer.
     *
     *   - `4` - **Credit Card Only: Reverse Authorization.** Reverses a prior Auth or Sale Transaction and releases the credit hold.
     *
     *   - `5` - **Credit Card Only: Refund Transaction.** Refunds a prior Capture or Sale Transaction (total may be specified for a partial refund).
     *
     *   - `7` - **Echeck Only: Echeck Sale Transaction.** Sale Transaction for ECheck payment.
     *
     *   - `8` - **Echeck Only: ECheck Refund Transaction.** Refund Transaction for prior ECheck Sale Transaction.
     *
     *   - `11` - **Echeck Only: Echeck Redeposit Transaction.** Attempt to redeposit a prior failed eCheck Sale Transaction.
     *
     *   - `12` - **Echeck Only: Echeck Account Verification Transaction.** Attempt to verify eCheck payment details.
     *
     *
     *
     *
     * </details>
     *
     */
    type: ButtonclikrApi.TxnsPostReqBodySchemaModelType;
    /**
     * The reason for the auth reversal.
     * This field is set to 'customerCancelled' by default.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `incomplete` - **Transaction Incomplete.**
     *
     * - `timeout` - **Transaction Timeout.**
     *
     * - `clerkCancelled` - **Transaction Cancelled by Clerk.**
     *
     * - `customerCancelled` - **Transaction Cancelled by Customer.**
     *
     * - `misdispense` - **Misdispense.**
     *
     * - `hardwareFailure` - **Hardware Failure.**
     *
     * - `suspectedFraud` - **Suspected Fraud.**
     * </details>
     */
    unauthReason: ButtonclikrApi.TxnsPostReqBodySchemaModelUnauthReason;
    /** The customer identifier from the AuthToken used during authentication. */
    authTokenCustomer?: string;
    /** This field is stored as a text string and must be between 0 and 1000 characters long. */
    channel?: string;
    /**
     * The amount of the total sum of this Transaction that is given as cash back.
     * This field is specified as an integer in cents.
     */
    cashback?: number;
    /**
     * The client ip address from which the Transaction was created.
     * Valid values are any Ipv4 or Ipv6 address.
     */
    clientIp?: string;
    /**
     * The name of the company associated with this Transaction.
     * Setting this field is especially important when processing an eCheck from a company.
     */
    company?: string;
    currency: ButtonclikrApi.TerminalTxnsCurrencyProperty;
    /** The funding currency of the txn. */
    fundingCurrency: ButtonclikrApi.TxnsPostReqBodySchemaModelFundingCurrency;
    /**
     * The status of the CVV on the card.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `notPresent` - **CVV is not present.**
     *
     * - `illegible` - **CVV is illegible.**
     *
     * - `notProvided` - **CVV was not provided.**
     * </details>
     *
     */
    cvvStatus?: ButtonclikrApi.TxnsPostReqBodySchemaModelCvvStatus;
    /**
     * A description of this Transaction.
     * This field is stored as a text string and must be between 0 and 1000 characters long.
     */
    description?: string;
    /** The discount applied to the transaction. */
    discount?: number;
    /** The duty fee applicable to this transaction. */
    duty?: number;
    /** The email associated with this Transaction. */
    email?: string;
    /**
     * Whether the card was swiped during this Transaction.
     * This field is set to '1' automatically if 'track' data was received.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Not swiped**
     *
     * - `1` - **Swiped**
     *
     * </details>
     */
    swiped: number;
    entryMode?: ButtonclikrApi.TerminalTxnsEntryModeProperty;
    /**
     * Optional calculated fee amount indicator. This should be used in conjunction with txnFee setting on Fees resource.
     * This field is specified as an integer in cents.
     */
    fee?: number;
    /**
     * When fee is set, this will track the amount of the fee that has been consumed.
     * This field is specified as an integer in cents.
     */
    feeConsumed?: number;
    /** The first name associated with this Transaction. For eCheck transactions, either first or last is required. */
    first?: string;
    /** The last name associated with this Transaction. For eCheck transactions, either first or last is required. */
    last?: string;
    merchant?: unknown;
    /**
     * The Merchant ID as set by the processor.
     * This field is stored as a text string and must be between 0 and 50 characters long.
     */
    mid: string;
    /** The middle name associated with this Transaction. */
    middle?: string;
    order?: unknown;
    /**
     * Whether this Transaction was verified with a PIN.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **No PIN verification**
     *
     * - `1` - **PIN verification**
     *
     * </details>
     *
     */
    pin: number;
    /** The shipping fee pertaining to this transaction. */
    shipping?: number;
    /**
     * Whether a signature was captured during this Transaction.
     * You can set this field if you took a signature for the Transaction. The API also sets this field automatically if you associate a signature to the Transaction by creating a 'txnDatas' resource.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Not captured**
     *
     * - `1` - **Captured**
     *
     * </details>
     */
    signature: number;
    /**
     * The amount of the total sum of this Transaction that is made up of tax.
     * This field is specified as an integer in cents.
     */
    tax?: number;
    /**
     * The amount of the total sum of this Transaction that is made up of surcharge.
     * This field is specified as an integer in cents.
     */
    surcharge?: number;
    /**
     * The identifier of the terminal that processed this Transaction.
     * The identifier is taken from the terminal system and varies in format according to the type of terminal.
     * This field is stored as a text string and must be between 0 and 50 characters long.
     */
    terminal?: string;
    /**
     * Capabilities of the terminal device.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `1` - **Key entry only terminal.**
     *
     * - `2` - **Can read magnetic stripe.**
     *
     * - `3` - **Integrated circuit reader.**
     *
     * - `4` - **TBD**
     * </details>
     *
     */
    terminalCapability?: number;
    /**
     * The total amount of this Transaction.
     * This field is specified as an integer in cents.
     */
    total: number;
    /**
     * Whether the card was swiped at an unattended terminal during this Transaction.
     * This field is set to '0' by default.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Attended terminal.**
     *
     * - `1` - **Unattended terminal.**
     * </details>
     */
    unattended: number;
    /**
     * The first line of the address associated with this Transaction.
     * This field is stored as a text string and must be between 1 and 500 characters long.
     */
    address1?: string;
    /**
     * The second line of the address associated with this Transaction.
     * This field is stored as a text string and must be between 1 and 500 characters long.
     */
    address2?: string;
    /**
     * The name of the city in the address associated with this Transaction.
     * This field is stored as a text string and must be between 1 and 500 characters long.
     */
    city?: string;
    /**
     * The state associated with this Transaction.
     * If in the U.S. this is specified as the 2 character postal abbreviation for the state, if outside of the U.S. the full state name.
     * This field is stored as a text string and must be between 2 and 100 characters long.
     */
    state?: ButtonclikrApi.TxnsPostReqBodySchemaModelState;
    /**
     * The ZIP code in the address associated with this Transaction.
     * This field is stored as a text string and must be between 1 and 20 characters long.
     */
    zip?: string;
    country?: ButtonclikrApi.TerminalTxnsCountryProperty;
    /**
     * The phone number associated with this Transaction.
     * This field is stored as a text string and must be between 10 and 15 characters long.
     */
    phone?: string;
    /** Threatmetrix session ID, used to trace the financial session and prevent possible frauds. */
    tmxSessionId?: string;
    /** The payment method associated with this Transaction, including the card details. */
    payment?: number;
}
