/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ButtonclikrApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Verifications {
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

export class Verifications {
    constructor(protected readonly _options: Verifications.Options) {}

    /**
     * Query a Verification.
     * A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
     * Any messages associated with the Verification are stored in verificationResults resources.
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.GetVerificationsIdRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.getVerificationsId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async getVerificationsId(
        id: unknown,
        request: ButtonclikrApi.GetVerificationsIdRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.GetVerificationsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `verifications/${encodeURIComponent(id)}`
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
            return serializers.GetVerificationsIdResponse.parseOrThrow(_response.body, {
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
     * Update a Verification.
     * A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
     * Any messages associated with the Verification are stored in verificationResults resources.
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.PutVerificationsIdRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.putVerificationsId({
     *         "key": "value"
     *     }, {
     *         login: {
     *             "key": "value"
     *         },
     *         decision: {
     *             "key": "value"
     *         },
     *         level: {
     *             "key": "value"
     *         },
     *         fromCache: {
     *             "key": "value"
     *         },
     *         additionalOptions: {
     *             "key": "value"
     *         },
     *         options: {
     *             "key": "value"
     *         },
     *         score: {
     *             "key": "value"
     *         },
     *         description: {
     *             "key": "value"
     *         },
     *         ref: {
     *             "key": "value"
     *         },
     *         generated: ButtonclikrApi.PutVerificationsIdRequestGenerated.Zero
     *     })
     */
    public async putVerificationsId(
        id: unknown,
        request: ButtonclikrApi.PutVerificationsIdRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.PutVerificationsIdResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `verifications/${encodeURIComponent(id)}`
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
            body: serializers.PutVerificationsIdRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PutVerificationsIdResponse.parseOrThrow(_response.body, {
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
     * Delete a Verification.
     * A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
     * Any messages associated with the Verification are stored in verificationResults resources.
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.DeleteVerificationsIdRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.deleteVerificationsId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async deleteVerificationsId(
        id: unknown,
        request: ButtonclikrApi.DeleteVerificationsIdRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.DeleteVerificationsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `verifications/${encodeURIComponent(id)}`
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
            return serializers.DeleteVerificationsIdResponse.parseOrThrow(_response.body, {
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
     * Query a Verification.
     * A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
     * Any messages associated with the Verification are stored in verificationResults resources.
     *
     * @param {ButtonclikrApi.GetVerificationsRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.getVerifications({
     *         expand: "string",
     *         unmask: "string",
     *         pageNumber: "string",
     *         pageLimit: "string"
     *     })
     */
    public async getVerifications(
        request: ButtonclikrApi.GetVerificationsRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.GetVerificationsResponse> {
        const { expand, unmask, pageNumber, pageLimit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        _queryParams["page[number]"] = pageNumber;
        _queryParams["page[limit]"] = pageLimit;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "verifications"
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
            return serializers.GetVerificationsResponse.parseOrThrow(_response.body, {
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
     * Create a Verification.
     * A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
     * Any messages associated with the Verification are stored in verificationResults resources.
     *
     * @param {ButtonclikrApi.PostVerificationsRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.postVerifications({
     *         login: {
     *             "key": "value"
     *         },
     *         entity: {
     *             "key": "value"
     *         },
     *         member: {
     *             "key": "value"
     *         },
     *         txn: {
     *             "key": "value"
     *         },
     *         terminalTxn: {
     *             "key": "value"
     *         },
     *         account: {
     *             "key": "value"
     *         },
     *         decision: {
     *             "key": "value"
     *         },
     *         type: ButtonclikrApi.PostVerificationsRequestType.AccountBalance,
     *         level: {
     *             "key": "value"
     *         },
     *         fromCache: {
     *             "key": "value"
     *         },
     *         additionalOptions: {
     *             "key": "value"
     *         },
     *         options: {
     *             "key": "value"
     *         },
     *         value: {
     *             "key": "value"
     *         },
     *         score: {
     *             "key": "value"
     *         },
     *         description: {
     *             "key": "value"
     *         },
     *         ref: {
     *             "key": "value"
     *         },
     *         generated: ButtonclikrApi.PostVerificationsRequestGenerated.Zero
     *     })
     */
    public async postVerifications(
        request: ButtonclikrApi.PostVerificationsRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.PostVerificationsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "verifications"
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
            body: serializers.PostVerificationsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PostVerificationsResponse.parseOrThrow(_response.body, {
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
     * Query a VerificationRef.
     * A VerificationRef is a record used to store the reference number returned by bigbux Risk Integration.
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.GetVerificationRefsIdRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.getVerificationRefsId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async getVerificationRefsId(
        id: unknown,
        request: ButtonclikrApi.GetVerificationRefsIdRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.GetVerificationRefsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `verificationRefs/${encodeURIComponent(id)}`
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
            return serializers.GetVerificationRefsIdResponse.parseOrThrow(_response.body, {
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
     * Query a VerificationRef.
     * A VerificationRef is a record used to store the reference number returned by bigbux Risk Integration.
     *
     * @param {ButtonclikrApi.GetVerificationRefsRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.getVerificationRefs({
     *         expand: "string",
     *         unmask: "string",
     *         pageNumber: "string",
     *         pageLimit: "string"
     *     })
     */
    public async getVerificationRefs(
        request: ButtonclikrApi.GetVerificationRefsRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.GetVerificationRefsResponse> {
        const { expand, unmask, pageNumber, pageLimit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        _queryParams["page[number]"] = pageNumber;
        _queryParams["page[limit]"] = pageLimit;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "verificationRefs"
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
            return serializers.GetVerificationRefsResponse.parseOrThrow(_response.body, {
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
     * Query an accountVerificationResults resource.
     * An accountVerificationResults resource represents the result of an attempt to verify a bank account. It is linked to an accountVerification resource.
     *
     * @param {unknown} id - The ID of this resource.
     * @param {ButtonclikrApi.GetVerificationResultsIdRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.getVerificationResultsId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async getVerificationResultsId(
        id: unknown,
        request: ButtonclikrApi.GetVerificationResultsIdRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.GetVerificationResultsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `verificationResults/${encodeURIComponent(id)}`
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
            return serializers.GetVerificationResultsIdResponse.parseOrThrow(_response.body, {
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
     * Query an accountVerificationResults resource.
     * An accountVerificationResults resource represents the result of an attempt to verify a bank account. It is linked to an accountVerification resource.
     *
     * @param {ButtonclikrApi.GetVerificationResultsRequest} request
     * @param {Verifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.verifications.getVerificationResults({
     *         expand: "string",
     *         unmask: "string",
     *         pageNumber: "string",
     *         pageLimit: "string"
     *     })
     */
    public async getVerificationResults(
        request: ButtonclikrApi.GetVerificationResultsRequest,
        requestOptions?: Verifications.RequestOptions
    ): Promise<ButtonclikrApi.GetVerificationResultsResponse> {
        const { expand, unmask, pageNumber, pageLimit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        _queryParams["page[number]"] = pageNumber;
        _queryParams["page[limit]"] = pageLimit;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "verificationResults"
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
            return serializers.GetVerificationResultsResponse.parseOrThrow(_response.body, {
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