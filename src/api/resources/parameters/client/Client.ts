/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ButtonclikrApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Parameters {
    interface Options {
        environment?: core.Supplier<environments.ButtonclikrApiEnvironment | string>;
        apiKey: core.Supplier<string>;
        /** Override the search header */
        search?: core.Supplier<string | undefined>;
        /** Override the SESSIONKEY header */
        sessionkey: core.Supplier<string>;
        /** Override the TXNSESSIONKEY header */
        txnsessionkey: core.Supplier<string>;
        /** Override the USERNAME header */
        username: core.Supplier<string>;
        /** Override the PASSWORD header */
        password: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the search header */
        search?: string | undefined;
        /** Override the SESSIONKEY header */
        sessionkey?: string;
        /** Override the TXNSESSIONKEY header */
        txnsessionkey?: string;
        /** Override the USERNAME header */
        username?: string;
        /** Override the PASSWORD header */
        password?: string;
    }
}

export class Parameters {
    constructor(protected readonly _options: Parameters.Options) {}

    /**
     * Query a Parameter resource.
     * A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
     * When applied to an Org, the parameter affects every entity in that Org.
     * Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.GetParametersIdRequest} request
     * @param {Parameters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.parameters.getParametersId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async getParametersId(
        id: unknown,
        request: ButtonclikrApi.GetParametersIdRequest,
        requestOptions?: Parameters.RequestOptions
    ): Promise<ButtonclikrApi.GetParametersIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `parameters/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                search:
                    (await core.Supplier.get(this._options.search)) != null
                        ? await core.Supplier.get(this._options.search)
                        : undefined,
                SESSIONKEY: await core.Supplier.get(this._options.sessionkey),
                TXNSESSIONKEY: await core.Supplier.get(this._options.txnsessionkey),
                USERNAME: await core.Supplier.get(this._options.username),
                PASSWORD: await core.Supplier.get(this._options.password),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@imdb/sdk-9754",
                "X-Fern-SDK-Version": "0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetParametersIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ButtonclikrApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ButtonclikrApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ButtonclikrApiTimeoutError();
            case "unknown":
                throw new errors.ButtonclikrApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update a Parameter resource.
     * A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
     * When applied to an Org, the parameter affects every entity in that Org.
     * Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.PutParametersIdRequest} request
     * @param {Parameters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.parameters.putParametersId({
     *         "key": "value"
     *     }, {
     *         division: {
     *             "key": "value"
     *         },
     *         login: {
     *             "key": "value"
     *         },
     *         org: {
     *             "key": "value"
     *         },
     *         partition: {
     *             "key": "value"
     *         },
     *         minTxnTotal: {
     *             "key": "value"
     *         },
     *         maxTxnTotal: {
     *             "key": "value"
     *         },
     *         maxTxnDailyTotal: {
     *             "key": "value"
     *         },
     *         maxTxnDailyNum: {
     *             "key": "value"
     *         },
     *         maxTxnMonthlyTotal: {
     *             "key": "value"
     *         },
     *         maxTxnMonthlyNum: {
     *             "key": "value"
     *         },
     *         minFundsPayoutTotal: {
     *             "key": "value"
     *         },
     *         minDebitedAvailableFunds: {
     *             "key": "value"
     *         },
     *         maxSubscriptionFailures: {
     *             "key": "value"
     *         },
     *         minPayoutCreditTotal: {
     *             "key": "value"
     *         },
     *         maxPayoutCreditTotal: {
     *             "key": "value"
     *         },
     *         minPayoutDebitTotal: {
     *             "key": "value"
     *         },
     *         maxPayoutDebitTotal: {
     *             "key": "value"
     *         },
     *         minAvailableFunds: {
     *             "key": "value"
     *         },
     *         minStatementDebitPayoutDelay: {
     *             "key": "value"
     *         },
     *         minPayoutDelay: {
     *             "key": "value"
     *         },
     *         minFirstPayoutDelay: {
     *             "key": "value"
     *         },
     *         payoutAdjustSubcents: ButtonclikrApi.PutParametersIdRequestPayoutAdjustSubcents.Zero,
     *         payoutDelayIncludeOffDays: ButtonclikrApi.PutParametersIdRequestPayoutDelayIncludeOffDays.Zero,
     *         payoutIncludePending: ButtonclikrApi.PutParametersIdRequestPayoutIncludePending.Zero,
     *         amexEnabled: ButtonclikrApi.PutParametersIdRequestAmexEnabled.Zero,
     *         optBlueEnabled: ButtonclikrApi.PutParametersIdRequestOptBlueEnabled.Zero,
     *         discoverEnabled: ButtonclikrApi.PutParametersIdRequestDiscoverEnabled.Zero,
     *         discoverAcquiredEnabled: ButtonclikrApi.PutParametersIdRequestDiscoverAcquiredEnabled.Zero,
     *         mc3DsEnabled: ButtonclikrApi.PutParametersIdRequestMc3DsEnabled.Zero,
     *         visa3DsEnabled: ButtonclikrApi.PutParametersIdRequestVisa3DsEnabled.Zero,
     *         amex3DsEnabled: ButtonclikrApi.PutParametersIdRequestAmex3DsEnabled.Zero,
     *         discover3DsEnabled: ButtonclikrApi.PutParametersIdRequestDiscover3DsEnabled.Zero,
     *         eCheckEnabled: ButtonclikrApi.PutParametersIdRequestECheckEnabled.Zero,
     *         fundingEnabled: ButtonclikrApi.PutParametersIdRequestFundingEnabled.Zero,
     *         vendorFeesEnabled: ButtonclikrApi.PutParametersIdRequestVendorFeesEnabled.Zero,
     *         vendorFeesExternal: ButtonclikrApi.PutParametersIdRequestVendorFeesExternal.Zero,
     *         verifyDisabled: ButtonclikrApi.PutParametersIdRequestVerifyDisabled.Zero,
     *         verifyForBoardingNotRequired: ButtonclikrApi.PutParametersIdRequestVerifyForBoardingNotRequired.Zero,
     *         verifyForPayoutNotRequired: ButtonclikrApi.PutParametersIdRequestVerifyForPayoutNotRequired.Zero,
     *         refundReleasesReserve: ButtonclikrApi.PutParametersIdRequestRefundReleasesReserve.Zero,
     *         visaMisuseSettlement: {
     *             "key": "value"
     *         },
     *         visaMisuseTravelAutoSettlement: {
     *             "key": "value"
     *         },
     *         visaMisuseCardPresentReversal: {
     *             "key": "value"
     *         },
     *         visaMisuseCardNotPresentReversal: {
     *             "key": "value"
     *         },
     *         mcMisuseSettlement: {
     *             "key": "value"
     *         },
     *         mcMisuseCardPresentReversal: {
     *             "key": "value"
     *         },
     *         mcMisuseCardNotPresentReversal: {
     *             "key": "value"
     *         },
     *         mcMisuseTravelAutoReversal: {
     *             "key": "value"
     *         },
     *         minEcheckCaptureDelay: {
     *             "key": "value"
     *         },
     *         minDebitProcessingDelay: {
     *             "key": "value"
     *         },
     *         boardingDisabled: ButtonclikrApi.PutParametersIdRequestBoardingDisabled.Zero,
     *         autoReboardDays: {
     *             "key": "value"
     *         },
     *         minBoardingOwnership: {
     *             "key": "value"
     *         },
     *         debtRepaymentEnabled: ButtonclikrApi.PutParametersIdRequestDebtRepaymentEnabled.Zero,
     *         boardingExemptionsDisabled: ButtonclikrApi.PutParametersIdRequestBoardingExemptionsDisabled.Zero,
     *         autoTaxExemptEnabled: ButtonclikrApi.PutParametersIdRequestAutoTaxExemptEnabled.Zero,
     *         surchargeEnabled: ButtonclikrApi.PutParametersIdRequestSurchargeEnabled.Zero,
     *         mcInstantPayoutsEnabled: ButtonclikrApi.PutParametersIdRequestMcInstantPayoutsEnabled.Zero,
     *         visaInstantPayoutsEnabled: ButtonclikrApi.PutParametersIdRequestVisaInstantPayoutsEnabled.Zero,
     *         mcInstantPayoutMin: {
     *             "key": "value"
     *         },
     *         mcInstantPayoutMax: {
     *             "key": "value"
     *         },
     *         visaInstantPayoutMin: {
     *             "key": "value"
     *         },
     *         visaInstantPayoutMax: {
     *             "key": "value"
     *         },
     *         sameDayPayoutsEnabled: ButtonclikrApi.PutParametersIdRequestSameDayPayoutsEnabled.Zero,
     *         sameDayPayoutsDailyMax: {
     *             "key": "value"
     *         },
     *         minSameDayPayoutCreditTotal: {
     *             "key": "value"
     *         },
     *         maxSameDayPayoutCreditTotal: {
     *             "key": "value"
     *         },
     *         minSameDayPayoutDebitTotal: {
     *             "key": "value"
     *         },
     *         maxSameDayPayoutDebitTotal: {
     *             "key": "value"
     *         },
     *         applePayEnabled: ButtonclikrApi.PutParametersIdRequestApplePayEnabled.Zero,
     *         googlePayEnabled: ButtonclikrApi.PutParametersIdRequestGooglePayEnabled.Zero,
     *         accountUpdaterEnabled: ButtonclikrApi.PutParametersIdRequestAccountUpdaterEnabled.Zero,
     *         updateAllTokensEnabled: ButtonclikrApi.PutParametersIdRequestUpdateAllTokensEnabled.Zero,
     *         accountUpdaterFrequency: {
     *             "key": "value"
     *         },
     *         getParametersEnabled: ButtonclikrApi.PutParametersIdRequestGetParametersEnabled.Zero,
     *         payoutCutoffTime: {
     *             "key": "value"
     *         },
     *         declineNotificationEmail: ButtonclikrApi.PutParametersIdRequestDeclineNotificationEmail.Zero,
     *         decisionMicroserviceEnabled: ButtonclikrApi.PutParametersIdRequestDecisionMicroserviceEnabled.Zero,
     *         holdMessagesDisabled: ButtonclikrApi.PutParametersIdRequestHoldMessagesDisabled.Zero,
     *         txnDecisionMicroserviceEnabled: ButtonclikrApi.PutParametersIdRequestTxnDecisionMicroserviceEnabled.Zero,
     *         omniTokenEnabled: ButtonclikrApi.PutParametersIdRequestOmniTokenEnabled.Zero,
     *         passTokenEnabled: ButtonclikrApi.PutParametersIdRequestPassTokenEnabled.Zero,
     *         debitGracePeriod: {
     *             "key": "value"
     *         },
     *         negativeBalanceLimit: {
     *             "key": "value"
     *         },
     *         negativeBalanceEmail: ButtonclikrApi.PutParametersIdRequestNegativeBalanceEmail.Zero,
     *         positiveBalanceEmail: ButtonclikrApi.PutParametersIdRequestPositiveBalanceEmail.Zero,
     *         loginAsEnabled: ButtonclikrApi.PutParametersIdRequestLoginAsEnabled.Zero,
     *         mfaEnabled: ButtonclikrApi.PutParametersIdRequestMfaEnabled.Zero,
     *         portalAccessEnabled: ButtonclikrApi.PutParametersIdRequestPortalAccessEnabled.Zero,
     *         bankAccountAddStopEmail: ButtonclikrApi.PutParametersIdRequestBankAccountAddStopEmail.Zero,
     *         bankAccountUpdateStopEmail: ButtonclikrApi.PutParametersIdRequestBankAccountUpdateStopEmail.Zero,
     *         inactive: ButtonclikrApi.PutParametersIdRequestInactive.Zero,
     *         frozen: ButtonclikrApi.PutParametersIdRequestFrozen.Zero
     *     })
     */
    public async putParametersId(
        id: unknown,
        request: ButtonclikrApi.PutParametersIdRequest,
        requestOptions?: Parameters.RequestOptions
    ): Promise<ButtonclikrApi.PutParametersIdResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `parameters/${encodeURIComponent(id)}`
            ),
            method: "PUT",
            headers: {
                search:
                    (await core.Supplier.get(this._options.search)) != null
                        ? await core.Supplier.get(this._options.search)
                        : undefined,
                SESSIONKEY: await core.Supplier.get(this._options.sessionkey),
                TXNSESSIONKEY: await core.Supplier.get(this._options.txnsessionkey),
                USERNAME: await core.Supplier.get(this._options.username),
                PASSWORD: await core.Supplier.get(this._options.password),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@imdb/sdk-9754",
                "X-Fern-SDK-Version": "0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PutParametersIdRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PutParametersIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ButtonclikrApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ButtonclikrApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ButtonclikrApiTimeoutError();
            case "unknown":
                throw new errors.ButtonclikrApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a Parameter resource.
     * A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
     * When applied to an Org, the parameter affects every entity in that Org.
     * Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.DeleteParametersIdRequest} request
     * @param {Parameters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.parameters.deleteParametersId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async deleteParametersId(
        id: unknown,
        request: ButtonclikrApi.DeleteParametersIdRequest,
        requestOptions?: Parameters.RequestOptions
    ): Promise<ButtonclikrApi.DeleteParametersIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `parameters/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                search:
                    (await core.Supplier.get(this._options.search)) != null
                        ? await core.Supplier.get(this._options.search)
                        : undefined,
                SESSIONKEY: await core.Supplier.get(this._options.sessionkey),
                TXNSESSIONKEY: await core.Supplier.get(this._options.txnsessionkey),
                USERNAME: await core.Supplier.get(this._options.username),
                PASSWORD: await core.Supplier.get(this._options.password),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@imdb/sdk-9754",
                "X-Fern-SDK-Version": "0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DeleteParametersIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ButtonclikrApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ButtonclikrApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ButtonclikrApiTimeoutError();
            case "unknown":
                throw new errors.ButtonclikrApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Query a Parameter resource.
     * A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
     * When applied to an Org, the parameter affects every entity in that Org.
     * Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.
     *
     * @param {ButtonclikrApi.GetParametersRequest} request
     * @param {Parameters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.parameters.getParameters({
     *         expand: "string",
     *         unmask: "string",
     *         pageNumber: "string",
     *         pageLimit: "string"
     *     })
     */
    public async getParameters(
        request: ButtonclikrApi.GetParametersRequest,
        requestOptions?: Parameters.RequestOptions
    ): Promise<ButtonclikrApi.GetParametersResponse> {
        const { expand, unmask, pageNumber, pageLimit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        _queryParams["page[number]"] = pageNumber;
        _queryParams["page[limit]"] = pageLimit;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "parameters"
            ),
            method: "GET",
            headers: {
                search:
                    (await core.Supplier.get(this._options.search)) != null
                        ? await core.Supplier.get(this._options.search)
                        : undefined,
                SESSIONKEY: await core.Supplier.get(this._options.sessionkey),
                TXNSESSIONKEY: await core.Supplier.get(this._options.txnsessionkey),
                USERNAME: await core.Supplier.get(this._options.username),
                PASSWORD: await core.Supplier.get(this._options.password),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@imdb/sdk-9754",
                "X-Fern-SDK-Version": "0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetParametersResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ButtonclikrApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ButtonclikrApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ButtonclikrApiTimeoutError();
            case "unknown":
                throw new errors.ButtonclikrApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a Parameter resource.
     * A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
     * When applied to an Org, the parameter affects every entity in that Org.
     * Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.
     *
     * @param {ButtonclikrApi.PostParametersRequest} request
     * @param {Parameters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.parameters.postParameters({
     *         division: {
     *             "key": "value"
     *         },
     *         login: {
     *             "key": "value"
     *         },
     *         org: {
     *             "key": "value"
     *         },
     *         partition: {
     *             "key": "value"
     *         },
     *         minTxnTotal: {
     *             "key": "value"
     *         },
     *         maxTxnTotal: {
     *             "key": "value"
     *         },
     *         maxTxnDailyTotal: {
     *             "key": "value"
     *         },
     *         maxTxnDailyNum: {
     *             "key": "value"
     *         },
     *         maxTxnMonthlyTotal: {
     *             "key": "value"
     *         },
     *         maxTxnMonthlyNum: {
     *             "key": "value"
     *         },
     *         minFundsPayoutTotal: {
     *             "key": "value"
     *         },
     *         minDebitedAvailableFunds: {
     *             "key": "value"
     *         },
     *         maxSubscriptionFailures: {
     *             "key": "value"
     *         },
     *         minPayoutCreditTotal: {
     *             "key": "value"
     *         },
     *         maxPayoutCreditTotal: {
     *             "key": "value"
     *         },
     *         minPayoutDebitTotal: {
     *             "key": "value"
     *         },
     *         maxPayoutDebitTotal: {
     *             "key": "value"
     *         },
     *         minAvailableFunds: {
     *             "key": "value"
     *         },
     *         minStatementDebitPayoutDelay: {
     *             "key": "value"
     *         },
     *         minPayoutDelay: {
     *             "key": "value"
     *         },
     *         minFirstPayoutDelay: {
     *             "key": "value"
     *         },
     *         payoutAdjustSubcents: ButtonclikrApi.PostParametersRequestPayoutAdjustSubcents.Zero,
     *         payoutDelayIncludeOffDays: ButtonclikrApi.PostParametersRequestPayoutDelayIncludeOffDays.Zero,
     *         payoutIncludePending: ButtonclikrApi.PostParametersRequestPayoutIncludePending.Zero,
     *         amexEnabled: ButtonclikrApi.PostParametersRequestAmexEnabled.Zero,
     *         optBlueEnabled: ButtonclikrApi.PostParametersRequestOptBlueEnabled.Zero,
     *         discoverEnabled: ButtonclikrApi.PostParametersRequestDiscoverEnabled.Zero,
     *         discoverAcquiredEnabled: ButtonclikrApi.PostParametersRequestDiscoverAcquiredEnabled.Zero,
     *         mc3DsEnabled: ButtonclikrApi.PostParametersRequestMc3DsEnabled.Zero,
     *         visa3DsEnabled: ButtonclikrApi.PostParametersRequestVisa3DsEnabled.Zero,
     *         amex3DsEnabled: ButtonclikrApi.PostParametersRequestAmex3DsEnabled.Zero,
     *         discover3DsEnabled: ButtonclikrApi.PostParametersRequestDiscover3DsEnabled.Zero,
     *         eCheckEnabled: ButtonclikrApi.PostParametersRequestECheckEnabled.Zero,
     *         fundingEnabled: ButtonclikrApi.PostParametersRequestFundingEnabled.Zero,
     *         vendorFeesEnabled: ButtonclikrApi.PostParametersRequestVendorFeesEnabled.Zero,
     *         vendorFeesExternal: ButtonclikrApi.PostParametersRequestVendorFeesExternal.Zero,
     *         verifyDisabled: ButtonclikrApi.PostParametersRequestVerifyDisabled.Zero,
     *         verifyForBoardingNotRequired: ButtonclikrApi.PostParametersRequestVerifyForBoardingNotRequired.Zero,
     *         verifyForPayoutNotRequired: ButtonclikrApi.PostParametersRequestVerifyForPayoutNotRequired.Zero,
     *         refundReleasesReserve: ButtonclikrApi.PostParametersRequestRefundReleasesReserve.Zero,
     *         visaMisuseSettlement: {
     *             "key": "value"
     *         },
     *         visaMisuseTravelAutoSettlement: {
     *             "key": "value"
     *         },
     *         visaMisuseCardPresentReversal: {
     *             "key": "value"
     *         },
     *         visaMisuseCardNotPresentReversal: {
     *             "key": "value"
     *         },
     *         mcMisuseSettlement: {
     *             "key": "value"
     *         },
     *         mcMisuseCardPresentReversal: {
     *             "key": "value"
     *         },
     *         mcMisuseCardNotPresentReversal: {
     *             "key": "value"
     *         },
     *         mcMisuseTravelAutoReversal: {
     *             "key": "value"
     *         },
     *         minEcheckCaptureDelay: {
     *             "key": "value"
     *         },
     *         minDebitProcessingDelay: {
     *             "key": "value"
     *         },
     *         boardingDisabled: ButtonclikrApi.PostParametersRequestBoardingDisabled.Zero,
     *         autoReboardDays: {
     *             "key": "value"
     *         },
     *         minBoardingOwnership: {
     *             "key": "value"
     *         },
     *         debtRepaymentEnabled: ButtonclikrApi.PostParametersRequestDebtRepaymentEnabled.Zero,
     *         boardingExemptionsDisabled: ButtonclikrApi.PostParametersRequestBoardingExemptionsDisabled.Zero,
     *         autoTaxExemptEnabled: ButtonclikrApi.PostParametersRequestAutoTaxExemptEnabled.Zero,
     *         surchargeEnabled: ButtonclikrApi.PostParametersRequestSurchargeEnabled.Zero,
     *         mcInstantPayoutsEnabled: ButtonclikrApi.PostParametersRequestMcInstantPayoutsEnabled.Zero,
     *         visaInstantPayoutsEnabled: ButtonclikrApi.PostParametersRequestVisaInstantPayoutsEnabled.Zero,
     *         mcInstantPayoutMin: {
     *             "key": "value"
     *         },
     *         mcInstantPayoutMax: {
     *             "key": "value"
     *         },
     *         visaInstantPayoutMin: {
     *             "key": "value"
     *         },
     *         visaInstantPayoutMax: {
     *             "key": "value"
     *         },
     *         sameDayPayoutsEnabled: ButtonclikrApi.PostParametersRequestSameDayPayoutsEnabled.Zero,
     *         sameDayPayoutsDailyMax: {
     *             "key": "value"
     *         },
     *         minSameDayPayoutCreditTotal: {
     *             "key": "value"
     *         },
     *         maxSameDayPayoutCreditTotal: {
     *             "key": "value"
     *         },
     *         minSameDayPayoutDebitTotal: {
     *             "key": "value"
     *         },
     *         maxSameDayPayoutDebitTotal: {
     *             "key": "value"
     *         },
     *         applePayEnabled: ButtonclikrApi.PostParametersRequestApplePayEnabled.Zero,
     *         googlePayEnabled: ButtonclikrApi.PostParametersRequestGooglePayEnabled.Zero,
     *         accountUpdaterEnabled: ButtonclikrApi.PostParametersRequestAccountUpdaterEnabled.Zero,
     *         updateAllTokensEnabled: ButtonclikrApi.PostParametersRequestUpdateAllTokensEnabled.Zero,
     *         accountUpdaterFrequency: {
     *             "key": "value"
     *         },
     *         getParametersEnabled: ButtonclikrApi.PostParametersRequestGetParametersEnabled.Zero,
     *         payoutCutoffTime: {
     *             "key": "value"
     *         },
     *         declineNotificationEmail: ButtonclikrApi.PostParametersRequestDeclineNotificationEmail.Zero,
     *         decisionMicroserviceEnabled: ButtonclikrApi.PostParametersRequestDecisionMicroserviceEnabled.Zero,
     *         holdMessagesDisabled: ButtonclikrApi.PostParametersRequestHoldMessagesDisabled.Zero,
     *         txnDecisionMicroserviceEnabled: ButtonclikrApi.PostParametersRequestTxnDecisionMicroserviceEnabled.Zero,
     *         omniTokenEnabled: ButtonclikrApi.PostParametersRequestOmniTokenEnabled.Zero,
     *         passTokenEnabled: ButtonclikrApi.PostParametersRequestPassTokenEnabled.Zero,
     *         debitGracePeriod: {
     *             "key": "value"
     *         },
     *         negativeBalanceLimit: {
     *             "key": "value"
     *         },
     *         negativeBalanceEmail: ButtonclikrApi.PostParametersRequestNegativeBalanceEmail.Zero,
     *         positiveBalanceEmail: ButtonclikrApi.PostParametersRequestPositiveBalanceEmail.Zero,
     *         loginAsEnabled: ButtonclikrApi.PostParametersRequestLoginAsEnabled.Zero,
     *         mfaEnabled: ButtonclikrApi.PostParametersRequestMfaEnabled.Zero,
     *         portalAccessEnabled: ButtonclikrApi.PostParametersRequestPortalAccessEnabled.Zero,
     *         bankAccountAddStopEmail: ButtonclikrApi.PostParametersRequestBankAccountAddStopEmail.Zero,
     *         bankAccountUpdateStopEmail: ButtonclikrApi.PostParametersRequestBankAccountUpdateStopEmail.Zero,
     *         inactive: ButtonclikrApi.PostParametersRequestInactive.Zero,
     *         frozen: ButtonclikrApi.PostParametersRequestFrozen.Zero
     *     })
     */
    public async postParameters(
        request: ButtonclikrApi.PostParametersRequest,
        requestOptions?: Parameters.RequestOptions
    ): Promise<ButtonclikrApi.PostParametersResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "parameters"
            ),
            method: "POST",
            headers: {
                search:
                    (await core.Supplier.get(this._options.search)) != null
                        ? await core.Supplier.get(this._options.search)
                        : undefined,
                SESSIONKEY: await core.Supplier.get(this._options.sessionkey),
                TXNSESSIONKEY: await core.Supplier.get(this._options.txnsessionkey),
                USERNAME: await core.Supplier.get(this._options.username),
                PASSWORD: await core.Supplier.get(this._options.password),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@imdb/sdk-9754",
                "X-Fern-SDK-Version": "0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PostParametersRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PostParametersResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ButtonclikrApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ButtonclikrApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ButtonclikrApiTimeoutError();
            case "unknown":
                throw new errors.ButtonclikrApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { APIKEY: apiKeyValue };
    }
}
