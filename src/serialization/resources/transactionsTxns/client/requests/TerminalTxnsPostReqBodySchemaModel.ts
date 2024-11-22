/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as ButtonclikrApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { TerminalTxnsPostReqBodySchemaModelBinType } from "../../types/TerminalTxnsPostReqBodySchemaModelBinType";
import { TerminalTxnsPaymentProperty } from "../../../../types/TerminalTxnsPaymentProperty";
import { TerminalTxnsPostReqBodySchemaModelPlatform } from "../../types/TerminalTxnsPostReqBodySchemaModelPlatform";
import { TerminalTxnsPostReqBodySchemaModelReceipt } from "../../types/TerminalTxnsPostReqBodySchemaModelReceipt";
import { TerminalTxnsPostReqBodySchemaModelPaymentMethod } from "../../types/TerminalTxnsPostReqBodySchemaModelPaymentMethod";
import { TerminalTxnsTypeProperty } from "../../../../types/TerminalTxnsTypeProperty";
import { TerminalTxnsCurrencyProperty } from "../../../../types/TerminalTxnsCurrencyProperty";
import { TerminalTxnsPostReqBodySchemaModelCvvStatus } from "../../types/TerminalTxnsPostReqBodySchemaModelCvvStatus";
import { TerminalTxnsEntryModeProperty } from "../../../../types/TerminalTxnsEntryModeProperty";
import { TerminalTxnsPostReqBodySchemaModelState } from "../../types/TerminalTxnsPostReqBodySchemaModelState";
import { TerminalTxnsCountryProperty } from "../../../../types/TerminalTxnsCountryProperty";
import { Inactive } from "../../../../types/Inactive";
import { Frozen } from "../../../../types/Frozen";

export const TerminalTxnsPostReqBodySchemaModel: core.serialization.Schema<
    serializers.TerminalTxnsPostReqBodySchemaModel.Raw,
    ButtonclikrApi.TerminalTxnsPostReqBodySchemaModel
> = core.serialization.object({
    binType: TerminalTxnsPostReqBodySchemaModelBinType,
    expiration: core.serialization.string().optional(),
    forterminalTxn: core.serialization.string().optional(),
    origin: core.serialization.number(),
    payment: TerminalTxnsPaymentProperty.optional(),
    platform: TerminalTxnsPostReqBodySchemaModelPlatform.optional(),
    pos: core.serialization.number(),
    receipt: TerminalTxnsPostReqBodySchemaModelReceipt.optional(),
    tid: core.serialization.string().optional(),
    traceNumber: core.serialization.number().optional(),
    txn: core.serialization.string().optional(),
    token: core.serialization.string().optional(),
    paymentNumber: core.serialization.number().optional(),
    paymentMethod: TerminalTxnsPostReqBodySchemaModelPaymentMethod.optional(),
    type: TerminalTxnsTypeProperty,
    tip: core.serialization.number().optional(),
    originatingApp: core.serialization.string().optional(),
    oemtTxnRefNumber: core.serialization.property("OEMTTxnRefNumber", core.serialization.string().optional()),
    posApplicationId: core.serialization.string().optional(),
    posApplicationName: core.serialization.string().optional(),
    posApplicationVersion: core.serialization.string().optional(),
    customerReferenceNumber: core.serialization.string().optional(),
    gatewayTransactionId: core.serialization.string().optional(),
    customerTicketNumber: core.serialization.string().optional(),
    authCode: core.serialization.string().optional(),
    authDate: core.serialization.number().optional(),
    cashback: core.serialization.number().optional(),
    clientIp: core.serialization.string().optional(),
    company: core.serialization.string().optional(),
    currency: TerminalTxnsCurrencyProperty,
    fundingCurrency: TerminalTxnsCurrencyProperty,
    cvvStatus: TerminalTxnsPostReqBodySchemaModelCvvStatus.optional(),
    description: core.serialization.string().optional(),
    discount: core.serialization.number().optional(),
    duty: core.serialization.number().optional(),
    email: core.serialization.string().optional(),
    swiped: core.serialization.number(),
    entryMode: TerminalTxnsEntryModeProperty.optional(),
    fee: core.serialization.number().optional(),
    feeConsumed: core.serialization.number().optional(),
    first: core.serialization.string().optional(),
    last: core.serialization.string().optional(),
    merchant: core.serialization.string(),
    mid: core.serialization.string(),
    middle: core.serialization.string().optional(),
    order: core.serialization.string().optional(),
    pin: core.serialization.number(),
    reserved: core.serialization.number(),
    shipping: core.serialization.number().optional(),
    signature: core.serialization.number(),
    tax: core.serialization.number().optional(),
    terminal: core.serialization.string().optional(),
    terminalCapability: core.serialization.number().optional(),
    total: core.serialization.number(),
    unattended: core.serialization.number().optional(),
    status: core.serialization.number(),
    address1: core.serialization.string().optional(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    state: TerminalTxnsPostReqBodySchemaModelState.optional(),
    zip: core.serialization.string().optional(),
    country: TerminalTxnsCountryProperty.optional(),
    phone: core.serialization.string().optional(),
    inactive: Inactive,
    frozen: Frozen,
});

export declare namespace TerminalTxnsPostReqBodySchemaModel {
    interface Raw {
        binType: TerminalTxnsPostReqBodySchemaModelBinType.Raw;
        expiration?: string | null;
        forterminalTxn?: string | null;
        origin: number;
        payment?: TerminalTxnsPaymentProperty.Raw | null;
        platform?: TerminalTxnsPostReqBodySchemaModelPlatform.Raw | null;
        pos: number;
        receipt?: TerminalTxnsPostReqBodySchemaModelReceipt.Raw | null;
        tid?: string | null;
        traceNumber?: number | null;
        txn?: string | null;
        token?: string | null;
        paymentNumber?: number | null;
        paymentMethod?: TerminalTxnsPostReqBodySchemaModelPaymentMethod.Raw | null;
        type: TerminalTxnsTypeProperty.Raw;
        tip?: number | null;
        originatingApp?: string | null;
        OEMTTxnRefNumber?: string | null;
        posApplicationId?: string | null;
        posApplicationName?: string | null;
        posApplicationVersion?: string | null;
        customerReferenceNumber?: string | null;
        gatewayTransactionId?: string | null;
        customerTicketNumber?: string | null;
        authCode?: string | null;
        authDate?: number | null;
        cashback?: number | null;
        clientIp?: string | null;
        company?: string | null;
        currency: TerminalTxnsCurrencyProperty.Raw;
        fundingCurrency: TerminalTxnsCurrencyProperty.Raw;
        cvvStatus?: TerminalTxnsPostReqBodySchemaModelCvvStatus.Raw | null;
        description?: string | null;
        discount?: number | null;
        duty?: number | null;
        email?: string | null;
        swiped: number;
        entryMode?: TerminalTxnsEntryModeProperty.Raw | null;
        fee?: number | null;
        feeConsumed?: number | null;
        first?: string | null;
        last?: string | null;
        merchant: string;
        mid: string;
        middle?: string | null;
        order?: string | null;
        pin: number;
        reserved: number;
        shipping?: number | null;
        signature: number;
        tax?: number | null;
        terminal?: string | null;
        terminalCapability?: number | null;
        total: number;
        unattended?: number | null;
        status: number;
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        state?: TerminalTxnsPostReqBodySchemaModelState.Raw | null;
        zip?: string | null;
        country?: TerminalTxnsCountryProperty.Raw | null;
        phone?: string | null;
        inactive: Inactive.Raw;
        frozen: Frozen.Raw;
    }
}