/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as ButtonclikrApi from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Imdb {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Imdb {
    constructor(protected readonly _options: Imdb.Options) {}

    /**
     * Add a movie to the database
     *
     * @param {ButtonclikrApi.CreateMovieRequest} request
     * @param {Imdb.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.imdb.createMovie({
     *         title: "string",
     *         rating: 1.1
     *     })
     */
    public async createMovie(
        request: ButtonclikrApi.CreateMovieRequest,
        requestOptions?: Imdb.RequestOptions
    ): Promise<ButtonclikrApi.MovieId> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/movies/create-movie"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateMovieRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.MovieId.parseOrThrow(_response.body, {
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
     * Retrieve a movie from the database based on the ID
     *
     * @param {ButtonclikrApi.MovieId} id
     * @param {Imdb.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ButtonclikrApi.MovieDoesNotExistError}
     *
     * @example
     *     await client.imdb.getMovie("tt0111161")
     *
     * @example
     *     await client.imdb.getMovie("tt1234")
     */
    public async getMovie(
        id: ButtonclikrApi.MovieId,
        requestOptions?: Imdb.RequestOptions
    ): Promise<ButtonclikrApi.Movie> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `/movies/${encodeURIComponent(serializers.MovieId.jsonOrThrow(id))}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Movie.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new ButtonclikrApi.MovieDoesNotExistError(
                        serializers.MovieId.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
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
}
