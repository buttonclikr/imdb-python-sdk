/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../index";

export interface TerminalTxnsMetadatasModel {
    id?: ButtonclikrApi.Id;
    created?: ButtonclikrApi.Created;
    modified?: ButtonclikrApi.Modified;
    creator?: ButtonclikrApi.Creator;
    modifier?: ButtonclikrApi.Modifier;
    /** The identifier of the Terminal Transaction associated with this TerminalTxnMetadatas resource. */
    terminalTxn?: string;
    /**
     * The type of metadata associated with the Terminal transcation.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     * - `amounts` - **Transaction Amounts**
     *
     * - `emv` - **EuroPay, Mastercard, Visa Transactions**
     *
     * - `network` - **Network Transactions**
     *
     * - `timeout` - **Transaction Timeouts**
     *
     * - `firstTxn` - **First Transaction**
     *
     * - `discretionary` - **Custom Transaction Field Value**
     *
     * </details>
     */
    type?: ButtonclikrApi.TerminalTxnsMetadatasModelType;
    /**
     * The discretionary field being stored.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *   - `discretionary1` - **Custom Field 1**
     *
     *   - `discretionary2` - **Custom Field 2**
     *
     *   - `discretionary3` - **Custom Field 3**
     *
     * </details>
     */
    field?: ButtonclikrApi.TerminalTxnsMetadatasModelField;
    /** The value of the field. This field is stored as a text string and must be between 1 and 500 characters long. */
    value?: string;
}
