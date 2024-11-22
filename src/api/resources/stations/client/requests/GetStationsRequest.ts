/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         coordinates: "52.5200,13.4050",
 *         country: "DE"
 *     }
 */
export interface GetStationsRequest {
    /**
     * The page number to return
     */
    page?: number;
    /**
     * The number of items to return per page
     */
    limit?: number;
    /**
     * The latitude and longitude of the user's location, to narrow down the search results to sites within a proximity of this location.
     */
    coordinates?: string;
    /**
     * A search term to filter the list of stations by name or address.
     */
    search?: string;
    /**
     * Filter stations by country code
     */
    country?: string;
}
