# Reference

## Imdb

<details><summary><code>client.imdb.<a href="/src/api/resources/imdb/client/Client.ts">createMovie</a>({ ...params }) -> ButtonclikrApi.MovieId</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a movie to the database

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
await client.imdb.createMovie({
    title: "string",
    rating: 1.1,
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

**request:** `ButtonclikrApi.CreateMovieRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Imdb.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.imdb.<a href="/src/api/resources/imdb/client/Client.ts">getMovie</a>(id) -> ButtonclikrApi.Movie</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a movie from the database based on the ID

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
await client.imdb.getMovie("tt0111161");
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

**id:** `ButtonclikrApi.MovieId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Imdb.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
