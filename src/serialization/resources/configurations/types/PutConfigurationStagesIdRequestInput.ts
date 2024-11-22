/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PutConfigurationStagesIdRequestInput: core.serialization.Schema<
    serializers.PutConfigurationStagesIdRequestInput.Raw,
    ButtonclikrApi.PutConfigurationStagesIdRequestInput
> = core.serialization.enum_([
    "APPLE_PAYMENTSESSION_REQUEST_JSON",
    "APPLE_REGISTER_MERCHANT_REQUEST_JSON",
    "APPLE_UNREGISTER_MERCHANT_REQUEST_JSON",
    "EFT",
    "ELAVON_BATCH_FLAT",
    "ELAVON_BATCH_READ_FLAT",
    "ELAVON_BOARD_JSON",
    "ELAVON_REPORTS_CSV",
    "ELAVON_TXN_XML",
    "FEDACH_REPORT_FLAT",
    "FIRSTDATA_BATCH_FLAT",
    "FIRSTDATA_BATCH_READ_FLAT",
    "FIRSTDATA_BOARD_JSON",
    "FIRSTDATA_REPORTS_FLAT",
    "FIRSTDATA_SRS_XML",
    "FIRSTDATA_TXN_XML",
    "FIRSTDATA_SINGLE_BATCH_FLAT",
    "FIRSTDATA_SINGLE_TXN_XML",
    "NACHA",
    "NEUTRINO_CSV",
    "NEUTRINO_FORM",
    "NEUTRINO_JSON",
    "OFAC_XML",
    "bigbux_CHARGEBACK_JSON",
    "bigbux_DECISION_JSON",
    "bigbux_ENCRYPTION_JSON",
    "bigbux_GOOGLEPAY_DECRYPTION_JSON",
    "bigbux_TXN_JSON",
    "PUSHY_TXN_JSON",
    "SIFT_JSON",
    "SOCURE_ALLOY_JSON",
    "SOCURE_FORM",
    "SOCURE_JSON",
    "SOUNDPAYMENTS_TXN_FORM",
    "SOUNDPAYMENTS_TXN_XML",
    "VANTIV_BATCH_XML",
    "VANTIV_BOARD_XML",
    "VANTIV_CHARGEBACK_XML",
    "VANTIV_PAYMENT_UPDATES_XML",
    "VANTIV_PAYOUT_CSV",
    "VANTIV_PAYOUT_XML",
    "VANTIV_PAYOUT_XML_V9",
    "VANTIV_REPORTS_CSV",
    "VANTIV_TXN_CSV",
    "VANTIV_TXN_XML",
    "VCORE_BATCH_FLAT",
    "VCORE_BATCH_READ_FLAT",
    "VCORE_BINREPORT_FLAT",
    "VCORE_BOARD_API",
    "VCORE_BOARD_FLAT",
    "VCORE_CHARGEBACK_FLAT",
    "VCORE_OMNITOKEN_JSON",
    "VCORE_REPORTS_FLAT",
    "VCORE_SAFERPAYMENT_JSON",
    "VCORE_TXN_ISO8583",
    "VCORE_UPDATE_FLAT",
    "VCORE_VARSHEET_JSON",
    "WEBSHIELD_FORM",
    "WEBSHIELD_JSON",
    "WELLSACH_BATCH_FLAT",
    "WELLSACH_PAYOUT_FLAT",
    "WELLSACH_TXN_FLAT",
    "WELLSFARGO_BOARD_XML",
    "WELLSFARGO_REPORT_CSV",
    "WELLSFARGO_REPORT_FLAT",
    "WFSINGLE_REPORT_FLAT",
    "WFSINGLE_BOARD_XML",
]);

export declare namespace PutConfigurationStagesIdRequestInput {
    type Raw =
        | "APPLE_PAYMENTSESSION_REQUEST_JSON"
        | "APPLE_REGISTER_MERCHANT_REQUEST_JSON"
        | "APPLE_UNREGISTER_MERCHANT_REQUEST_JSON"
        | "EFT"
        | "ELAVON_BATCH_FLAT"
        | "ELAVON_BATCH_READ_FLAT"
        | "ELAVON_BOARD_JSON"
        | "ELAVON_REPORTS_CSV"
        | "ELAVON_TXN_XML"
        | "FEDACH_REPORT_FLAT"
        | "FIRSTDATA_BATCH_FLAT"
        | "FIRSTDATA_BATCH_READ_FLAT"
        | "FIRSTDATA_BOARD_JSON"
        | "FIRSTDATA_REPORTS_FLAT"
        | "FIRSTDATA_SRS_XML"
        | "FIRSTDATA_TXN_XML"
        | "FIRSTDATA_SINGLE_BATCH_FLAT"
        | "FIRSTDATA_SINGLE_TXN_XML"
        | "NACHA"
        | "NEUTRINO_CSV"
        | "NEUTRINO_FORM"
        | "NEUTRINO_JSON"
        | "OFAC_XML"
        | "bigbux_CHARGEBACK_JSON"
        | "bigbux_DECISION_JSON"
        | "bigbux_ENCRYPTION_JSON"
        | "bigbux_GOOGLEPAY_DECRYPTION_JSON"
        | "bigbux_TXN_JSON"
        | "PUSHY_TXN_JSON"
        | "SIFT_JSON"
        | "SOCURE_ALLOY_JSON"
        | "SOCURE_FORM"
        | "SOCURE_JSON"
        | "SOUNDPAYMENTS_TXN_FORM"
        | "SOUNDPAYMENTS_TXN_XML"
        | "VANTIV_BATCH_XML"
        | "VANTIV_BOARD_XML"
        | "VANTIV_CHARGEBACK_XML"
        | "VANTIV_PAYMENT_UPDATES_XML"
        | "VANTIV_PAYOUT_CSV"
        | "VANTIV_PAYOUT_XML"
        | "VANTIV_PAYOUT_XML_V9"
        | "VANTIV_REPORTS_CSV"
        | "VANTIV_TXN_CSV"
        | "VANTIV_TXN_XML"
        | "VCORE_BATCH_FLAT"
        | "VCORE_BATCH_READ_FLAT"
        | "VCORE_BINREPORT_FLAT"
        | "VCORE_BOARD_API"
        | "VCORE_BOARD_FLAT"
        | "VCORE_CHARGEBACK_FLAT"
        | "VCORE_OMNITOKEN_JSON"
        | "VCORE_REPORTS_FLAT"
        | "VCORE_SAFERPAYMENT_JSON"
        | "VCORE_TXN_ISO8583"
        | "VCORE_UPDATE_FLAT"
        | "VCORE_VARSHEET_JSON"
        | "WEBSHIELD_FORM"
        | "WEBSHIELD_JSON"
        | "WELLSACH_BATCH_FLAT"
        | "WELLSACH_PAYOUT_FLAT"
        | "WELLSACH_TXN_FLAT"
        | "WELLSFARGO_BOARD_XML"
        | "WELLSFARGO_REPORT_CSV"
        | "WELLSFARGO_REPORT_FLAT"
        | "WFSINGLE_REPORT_FLAT"
        | "WFSINGLE_BOARD_XML";
}
