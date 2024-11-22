/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         binType: ButtonclikrApi.TerminalTxnsUpdateReqBodySchemaModelBinType.Credit,
 *         swiped: 1,
 *         emv: 1,
 *         reserved: 1,
 *         signature: 1,
 *         total: 1,
 *         status: 1,
 *         inactive: 1,
 *         frozen: 1
 *     }
 */
export interface TerminalTxnsUpdateReqBodySchemaModel {
    /**
     * The type of bank issuer number (BIN) that allows for resulting transactions.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `CREDIT` - **Credit BIN Type.**
     *
     * - `DEBIT` - **Debit BIN Type.**
     *
     * </details>
     *
     */
    binType: ButtonclikrApi.TerminalTxnsUpdateReqBodySchemaModelBinType;
    /**  The expiration date of this Transaction. This field is stored as a text string in 'MMYY' format, where 'MM' is the number of a month and 'YY' is the last two digits of a year. For example, '0623' for June 2023. The value must reflect a future date. */
    expiration?: string;
    /** The payment method associated with this Transaction, including the card details. */
    payment?: string;
    /** Sequencial number that uniquely identifies the terminalTxn. */
    traceNumber?: number;
    /** The related txn this terminalTxn belongs to. */
    txn?: string;
    /** The ID of the token record from which to retrieve the payment and customer details. */
    token?: string;
    /** The last four numbers of the credit card associated with this Transaction. */
    paymentNumber?: number;
    /** The payment method for this Transaction. */
    paymentMethod?: number;
    tip?: number;
    originatingApp?: string;
    oemtTxnRefNumber?: string;
    /** Express assigned identifier i.e. Software Id being used in express terminal. */
    posApplicationId?: string;
    /** Software Name being used in express terminal. */
    posApplicationName?: string;
    /** Software version being used in express terminal. */
    posApplicationVersion?: string;
    /** Express Reference Number. */
    customerReferenceNumber?: string;
    /** The gateway transaction ID relates to Express Transaction ID. */
    gatewayTransactionId?: string;
    /** Express ticket Number. */
    customerTicketNumber?: string;
    /** The client IP address from which the transaction was created, valid values are any IPv4 or IPv6 address. */
    clientIp?: string;
    /** A description of this Transaction. This field is stored as a text string and must be between 0 and 1000 characters long. */
    description?: string;
    /**
     * Whether the card was swiped during this Transaction. This field is set to '1' automatically if 'track' data was received.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *   - `0` - **Not Swiped.**
     *
     *   - `1` - **Swiped.**
     * </details>
     *
     */
    swiped: number;
    /** Whether the card was dipped (using the EMV chip) during this Transaction. */
    emv: number;
    entryMode?: ButtonclikrApi.TerminalTxnsEntryModeProperty;
    feeConsumed?: unknown;
    /** The first name associated with this Transaction. For eCheck transactions, either first or last is required. */
    first?: string;
    /** The last name associated with this Transaction. For eCheck transactions, either first or last is required. */
    last?: string;
    /** The middle name associated with this Transaction. */
    middle?: string;
    /** The identifier of the Order associated with this Transaction, This field is stored as a text string and must be between 0 and 1000 characters long. */
    order?: string;
    /** Indicates whether the Transaction is reserved and the action that will be taken as a result, with valid values including No reserve, Transaction processing withheld, Transaction capture withheld pending manual review, Move all funds from this Transaction into a reserve, Block current activity, no change for merchant, TBD, and TBD. */
    reserved: number;
    /** Whether a signature should be captured during this Transaction: You can set this field if want the terminal to take a signature for the Transaction, The API also sets this field automatically if you associate a signature to the Transaction by creating a 'terminalTxnDatas' resource. */
    signature: number;
    /** The total amount of this Transaction, This field is specified as an integer in cents. */
    total: number;
    /**
     * The status of the Transaction.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `0` - **Pending**
     *
     * - `1` - **Approved**
     *
     * - `2` - **Failed**
     *
     * - `3` - **Captured**
     *
     * - `4` - **Settled**
     *
     * - `5` - **Returned**
     *
     * </details>
     *
     */
    status: number;
    inactive: ButtonclikrApi.Inactive;
    frozen: ButtonclikrApi.Frozen;
}
