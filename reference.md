# Reference

## Stations

<details><summary><code>client.stations.<a href="/src/api/resources/stations/client/Client.ts">getStations</a>({ ...params }) -> ButtonclikrApi.GetStationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated and searchable list of all train stations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stations.getStations({
    coordinates: "52.5200,13.4050",
    country: "DE",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ButtonclikrApi.GetStationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Stations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Trips

<details><summary><code>client.trips.<a href="/src/api/resources/trips/client/Client.ts">getTrips</a>({ ...params }) -> ButtonclikrApi.GetTripsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.trips.getTrips({
    origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    date: new Date("2024-02-01T09:00:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTripsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Trips.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bookings

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">getBookings</a>({ ...params }) -> ButtonclikrApi.GetBookingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all trip bookings by the authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.getBookings();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ButtonclikrApi.GetBookingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">createBooking</a>({ ...params }) -> ButtonclikrApi.CreateBookingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.createBooking({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ButtonclikrApi.Booking`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">getBooking</a>(bookingId) -> ButtonclikrApi.GetBookingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the details of a specific booking.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.getBooking("1725ff48-ab45-4bb5-9d02-88745177dedb");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**bookingId:** `string` — The ID of the booking to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bookings.<a href="/src/api/resources/bookings/client/Client.ts">deleteBooking</a>(bookingId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a booking, cancelling the hold on the trip.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bookings.deleteBooking("1725ff48-ab45-4bb5-9d02-88745177dedb");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**bookingId:** `string` — The ID of the booking to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bookings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payments

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">createBookingPayment</a>(bookingId, { ...params }) -> ButtonclikrApi.CreateBookingPaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.createBookingPayment("1725ff48-ab45-4bb5-9d02-88745177dedb", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**bookingId:** `string` — The ID of the booking to pay for.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.BookingPayment`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
