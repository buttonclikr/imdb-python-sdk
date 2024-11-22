/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ButtonclikrApi from "../../../../index";

/**
 * @example
 *     {
 *         txn: "txn",
 *         ref: "ref",
 *         stage: ButtonclikrApi.TxnRefsPostReqBodySchemaModelStage.Auth,
 *         platform: ButtonclikrApi.TxnRefsPostReqBodySchemaModelPlatform.Apple
 *     }
 */
export interface TxnRefsPostReqBodySchemaModel {
    /** The parent transaction that owns this txnRef and to which this reference applies. */
    txn: string;
    /** The reference value retrieved from the third party (platform). */
    ref: string;
    /**
     * An indicator showing what this txnRef refers to.
     *
     * <details>
     * <summary>Valid Values</summary>
     *
     *   - `auth` - **Related to transaction authorization stage.**
     *
     *   - `capture` - **Related to transaction capture stage.**
     *
     *   - `draft` - **Transaction is in draft stage. Draft locator for transaction.**
     *
     *   - `file` - **Import Transaction Reference file.**
     *
     *   - `network` - **A reference from the network.**
     *
     *   - `refund` - **Related to transaction refund stage.**
     *
     *   - `retrieval` - **A reference to the retrieval number (a reference exchanged with the processor for later cross-reference).**
     *
     *  - `threatMetrix` - **Threat Matrix.**
     *
     *
     *
     *
     * </details>
     *
     */
    stage: ButtonclikrApi.TxnRefsPostReqBodySchemaModelStage;
    /** The platform that issued this txnRef. */
    platform: ButtonclikrApi.TxnRefsPostReqBodySchemaModelPlatform;
}
