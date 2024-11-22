/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ButtonclikrApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Credentials {
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

/**
 * Represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as send Transactions to the processor, or board a Merchant with the processor.
 */
export class Credentials {
    constructor(protected readonly _options: Credentials.Options) {}

    /**
     * Query a Credential resource that represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as send Transactions to the processor, or board a Merchant with the processor.
     *
     * @param {unknown} id - The ID of this resource and The Credential ID.
     * @param {ButtonclikrApi.GetCredentialsIdRequest} request
     * @param {Credentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.credentials.getCredentialsId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async getCredentialsId(
        id: unknown,
        request: ButtonclikrApi.GetCredentialsIdRequest,
        requestOptions?: Credentials.RequestOptions
    ): Promise<ButtonclikrApi.GetCredentialsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `credentials/${encodeURIComponent(id)}`
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
            return serializers.GetCredentialsIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Update a Credential resource represents an authorization that a given Entity has to connect to an integration to perform a particular action.
     *
     * @param {unknown} id - The ID of this resource and The Credential ID.
     * @param {ButtonclikrApi.PutCredentialsIdRequest} request
     * @param {Credentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.credentials.putCredentialsId({
     *         "key": "value"
     *     }, {
     *         name: {
     *             "key": "value"
     *         },
     *         description: {
     *             "key": "value"
     *         },
     *         username: {
     *             "key": "value"
     *         },
     *         password: {
     *             "key": "value"
     *         },
     *         connectUsername: {
     *             "key": "value"
     *         },
     *         connectPassword: {
     *             "key": "value"
     *         },
     *         secret: {
     *             "key": "value"
     *         },
     *         inactive: ButtonclikrApi.PutCredentialsIdRequestInactive.Zero,
     *         frozen: ButtonclikrApi.PutCredentialsIdRequestFrozen.Zero
     *     })
     */
    public async putCredentialsId(
        id: unknown,
        request: ButtonclikrApi.PutCredentialsIdRequest,
        requestOptions?: Credentials.RequestOptions
    ): Promise<ButtonclikrApi.PutCredentialsIdResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `credentials/${encodeURIComponent(id)}`
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
            body: serializers.PutCredentialsIdRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PutCredentialsIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Delete a Credential resource. A Credential resource represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as delete a Credential resource.
     *
     * @param {unknown} id - The ID of this resource and The Credential ID.
     * @param {ButtonclikrApi.DeleteCredentialsIdRequest} request
     * @param {Credentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.credentials.deleteCredentialsId({
     *         "key": "value"
     *     }, {
     *         expand: "string",
     *         unmask: "string"
     *     })
     */
    public async deleteCredentialsId(
        id: unknown,
        request: ButtonclikrApi.DeleteCredentialsIdRequest,
        requestOptions?: Credentials.RequestOptions
    ): Promise<ButtonclikrApi.DeleteCredentialsIdResponse> {
        const { expand, unmask } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                `credentials/${encodeURIComponent(id)}`
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
            return serializers.DeleteCredentialsIdResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Query a Credential resource. A Credential resource represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as send Transactions to the processor, or board a Merchant with the processor
     *
     * @param {ButtonclikrApi.GetCredentialsRequest} request
     * @param {Credentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.credentials.getCredentials({
     *         expand: "string",
     *         unmask: "string",
     *         pageNumber: "string",
     *         pageLimit: "string"
     *     })
     */
    public async getCredentials(
        request: ButtonclikrApi.GetCredentialsRequest,
        requestOptions?: Credentials.RequestOptions
    ): Promise<ButtonclikrApi.GetCredentialsResponse> {
        const { expand, unmask, pageNumber, pageLimit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["expand"] = expand;
        _queryParams["unmask"] = unmask;
        _queryParams["page[number]"] = pageNumber;
        _queryParams["page[limit]"] = pageLimit;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "credentials"
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
            return serializers.GetCredentialsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Create a Credential resource that represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as send Transactions to the processor, or board a Merchant with the processor.
     *
     * @param {ButtonclikrApi.PostCredentialsRequest} request
     * @param {Credentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.BadRequestError}
     *
     * @example
     *     await client.credentials.postCredentials({
     *         entity: {
     *             "key": "value"
     *         },
     *         name: {
     *             "key": "value"
     *         },
     *         description: {
     *             "key": "value"
     *         },
     *         username: {
     *             "key": "value"
     *         },
     *         password: {
     *             "key": "value"
     *         },
     *         connectUsername: {
     *             "key": "value"
     *         },
     *         connectPassword: {
     *             "key": "value"
     *         },
     *         integration: ButtonclikrApi.PostCredentialsRequestIntegration.Apple,
     *         type: ButtonclikrApi.PostCredentialsRequestType.Transaction,
     *         secret: {
     *             "key": "value"
     *         },
     *         inactive: ButtonclikrApi.PostCredentialsRequestInactive.Zero,
     *         frozen: ButtonclikrApi.PostCredentialsRequestFrozen.Zero
     *     })
     */
    public async postCredentials(
        request: ButtonclikrApi.PostCredentialsRequest,
        requestOptions?: Credentials.RequestOptions
    ): Promise<ButtonclikrApi.PostCredentialsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ButtonclikrApiEnvironment.Default,
                "credentials"
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
            body: serializers.PostCredentialsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PostCredentialsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ButtonclikrApi.BadRequestError(_response.error.body);
                default:
                    throw new errors.ButtonclikrApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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