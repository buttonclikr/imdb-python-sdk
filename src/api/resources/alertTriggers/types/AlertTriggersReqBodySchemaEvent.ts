/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The event type that triggers the associated Alert. <details> <summary>Valid Values</summary>
 *
 * - `create` - **Triggers when the associated resource is created.**
 *
 * - `update` - **Triggers when the associated resource is updated.**
 *
 * - `delete` - **Triggers when the associated resource is deleted.**
 *
 * - `ownership` - **Triggers when the ownership of the associated resource changes.**
 *
 * - `batch` - **Triggers when Transactions are captured in a batch.**
 *
 * - `account` - **Triggers when the Account associated with a Merchant is updated.**
 *
 * - `account.created` - **TBD**
 *
 * - `account.updated` - **TBD**
 *
 * - `payout` - **Triggers when a Payout occurs.**
 *
 * - `fee` - **Triggers when an Entity is charged a Fee.**
 *
 * - `changerequest.declined` - **TBD**
 *
 * - `changerequest.created` - **TBD**
 *
 * - `changerequest.approved` - **TBD**
 *
 * - `changerequest.manualReview` - **TBD**
 *
 * - `chargeback` - **Triggers alert when Chargeback Reports are created.**
 *
 * - `chargeback.opened` - **TBD**
 *
 * - `chargeback.closed` - **TBD**
 *
 * - `chargeback.created` - **Triggers alert when a Chargeback is created.**
 *
 * - `chargeback.lost` - **Triggers alert when a Chargeback dispute was lost.**
 *
 * - `chargeback.won` - **Triggers alert when a Chargeback dispute was won.**
 *
 * - `chargebackdocument.uploaded` - **TBD**
 *
 * - `debit.disbursement.recovery` - **TBD**
 *
 * - `disbursement.requested` - **Triggers alert when a Disbursement is requested.**
 *
 * - `disbursement.processing` - **Triggers alert when a Disbursement is processing.**
 *
 * - `disbursement.processed` - **Triggers alert when a Disbursement has been processed.**
 *
 * - `disbursement.failed` - **Triggers alert when a Disbursement has failed.**
 *
 * - `disbursement.denied` - **Triggers alert when a Disbursement has been denied.**
 *
 * - `disbursement.report` - **Triggers alert when Disbursements are processed.**
 *
 * - `disbursement.returned` - **Triggers alert when Disbursement has returned.**
 *
 * - `disbursementEntries.processed` - **TBD**
 *
 * - `invoice.created` - **Triggers alert when an invoice has been created.**
 *
 * - `invoice.cancelled` - **Triggers alert when an invoice has been cancelled.**
 *
 * - `invoice.emailed` - **Triggers alert when an invoice has been emailed.**
 *
 * - `invoice.expired` - **Triggers alert when an invoice has expired.**
 *
 * - `invoice.paid` - **Triggers alert when an invoice has been paid.**
 *
 * - `invoice.refunded` - **TBD**
 *
 * - `invoice.viewed` - **Triggers alert when an invoice has been viewed.**
 *
 * - `invoiceResult.failure` - **Triggers alert when an invoice result has failed.**
 *
 * - `merchant.created` - **Triggers alert when a Merchant has been created.**
 *
 * - `merchant.boarding` - **Triggers alert when a Merchant is boarding.**
 *
 * - `merchant.boarded` - **Triggers alert when a Merchant has been boarded.**
 *
 * - `merchant.closed` - **TBD**
 *
 * - `merchant.pending` - **TBD**
 *
 * - `merchant.incomplete` - **TBD**
 *
 * - `merchant.failed` - **Triggers alert when Merchant boarding has failed.**
 *
 * - `merchant.held` - **Triggers alert when a Merchant boarding requires manual review.**
 *
 * - `message.created` - **Triggers alert when a Message was created.**
 *
 * - `paymentupdate.report` - **TBD**
 *
 * - `resource.created` - **Triggers alert when a Resource was created.**
 *
 * - `resource.updated` - **Triggers alert when a Resource was updated.**
 *
 * - `subscription.created` - **Triggers alert when a Subscription was created.**
 *
 * - `subscription.approved` - **Triggers alert when a Subscription was approved.**
 *
 * - `subscription.failed` - **Triggers alert when a Subscription has failed.**
 *
 * - `terminalTxn.created` - **TBD**
 *
 * - `terminalTxn.approved` - **TBD**
 *
 * - `terminalTxn.failed` - **TBD**
 *
 * - `txn.created` - **Triggers alert when a Transaction is created.**
 *
 * - `txn.approved` - **Triggers alert when a Transaction has been approved.**
 *
 * - `txn.failed` - **Triggers alert when a Transaction has failed.**
 *
 * - `txn.captured` - **Triggers alert when a Transaction has been captured.**
 *
 * - `txn.settled` - **Triggers alert when a Transaction has been settled.**
 *
 * - `txn.returned` - **Triggers alert when a Transaction has been returned.**
 *
 * - `txn.echeck.funded` - **TBD**
 *
 * - `txn.delayed.funding` - **TBD**
 *
 * - `upcoming.debit.disbursement` - **TBD**
 * </details>
 */
export type AlertTriggersReqBodySchemaEvent =
    | "create"
    | "update"
    | "delete"
    | "ownership"
    | "batch"
    | "account"
    | "account.created"
    | "account.updated"
    | "payout"
    | "fee"
    | "changerequest.declined"
    | "changerequest.created"
    | "changerequest.approved"
    | "changerequest.manualReview"
    | "chargeback"
    | "chargeback.opened"
    | "chargeback.closed"
    | "chargeback.created"
    | "chargeback.lost"
    | "chargeback.won"
    | "chargebackdocument.uploaded"
    | "debit.disbursement.recovery"
    | "disbursement.requested"
    | "disbursement.processing"
    | "disbursement.processed"
    | "disbursement.failed"
    | "disbursement.denied"
    | "disbursement.report"
    | "disbursement.returned"
    | "disbursementEntries.processed"
    | "invoice.created"
    | "invoice.cancelled"
    | "invoice.emailed"
    | "invoice.expired"
    | "invoice.paid"
    | "invoice.refunded"
    | "invoice.viewed"
    | "invoiceResult.failure"
    | "merchant.created"
    | "merchant.boarding"
    | "merchant.boarded"
    | "merchant.closed"
    | "merchant.pending"
    | "merchant.incomplete"
    | "merchant.failed"
    | "merchant.held"
    | "message.created"
    | "paymentupdate.report"
    | "resource.created"
    | "resource.updated"
    | "subscription.created"
    | "subscription.approved"
    | "subscription.failed"
    | "terminalTxn.created"
    | "terminalTxn.approved"
    | "terminalTxn.failed"
    | "txn.created"
    | "txn.approved"
    | "txn.failed"
    | "txn.captured"
    | "txn.settled"
    | "txn.returned"
    | "txn.echeck.funded"
    | "txn.delayed.funding"
    | "upcoming.debit.disbursement";

export const AlertTriggersReqBodySchemaEvent = {
    Create: "create",
    Update: "update",
    Delete: "delete",
    Ownership: "ownership",
    Batch: "batch",
    Account: "account",
    AccountCreated: "account.created",
    AccountUpdated: "account.updated",
    Payout: "payout",
    Fee: "fee",
    ChangerequestDeclined: "changerequest.declined",
    ChangerequestCreated: "changerequest.created",
    ChangerequestApproved: "changerequest.approved",
    ChangerequestManualReview: "changerequest.manualReview",
    Chargeback: "chargeback",
    ChargebackOpened: "chargeback.opened",
    ChargebackClosed: "chargeback.closed",
    ChargebackCreated: "chargeback.created",
    ChargebackLost: "chargeback.lost",
    ChargebackWon: "chargeback.won",
    ChargebackdocumentUploaded: "chargebackdocument.uploaded",
    DebitDisbursementRecovery: "debit.disbursement.recovery",
    DisbursementRequested: "disbursement.requested",
    DisbursementProcessing: "disbursement.processing",
    DisbursementProcessed: "disbursement.processed",
    DisbursementFailed: "disbursement.failed",
    DisbursementDenied: "disbursement.denied",
    DisbursementReport: "disbursement.report",
    DisbursementReturned: "disbursement.returned",
    DisbursementEntriesProcessed: "disbursementEntries.processed",
    InvoiceCreated: "invoice.created",
    InvoiceCancelled: "invoice.cancelled",
    InvoiceEmailed: "invoice.emailed",
    InvoiceExpired: "invoice.expired",
    InvoicePaid: "invoice.paid",
    InvoiceRefunded: "invoice.refunded",
    InvoiceViewed: "invoice.viewed",
    InvoiceResultFailure: "invoiceResult.failure",
    MerchantCreated: "merchant.created",
    MerchantBoarding: "merchant.boarding",
    MerchantBoarded: "merchant.boarded",
    MerchantClosed: "merchant.closed",
    MerchantPending: "merchant.pending",
    MerchantIncomplete: "merchant.incomplete",
    MerchantFailed: "merchant.failed",
    MerchantHeld: "merchant.held",
    MessageCreated: "message.created",
    PaymentupdateReport: "paymentupdate.report",
    ResourceCreated: "resource.created",
    ResourceUpdated: "resource.updated",
    SubscriptionCreated: "subscription.created",
    SubscriptionApproved: "subscription.approved",
    SubscriptionFailed: "subscription.failed",
    TerminalTxnCreated: "terminalTxn.created",
    TerminalTxnApproved: "terminalTxn.approved",
    TerminalTxnFailed: "terminalTxn.failed",
    TxnCreated: "txn.created",
    TxnApproved: "txn.approved",
    TxnFailed: "txn.failed",
    TxnCaptured: "txn.captured",
    TxnSettled: "txn.settled",
    TxnReturned: "txn.returned",
    TxnEcheckFunded: "txn.echeck.funded",
    TxnDelayedFunding: "txn.delayed.funding",
    UpcomingDebitDisbursement: "upcoming.debit.disbursement",
} as const;
