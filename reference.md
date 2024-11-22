# Reference

## Accounts

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountsId</a>(id, { ...params }) -> ButtonclikrApi.GetAccountsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Account. An Account represents a bank account associated with an Entity.

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
await client.accounts.getAccountsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAccountsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">putAccountsId</a>(id, { ...params }) -> ButtonclikrApi.PutAccountsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing Account representing a bank account associated with an Entity.

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
await client.accounts.putAccountsId("p1_ent_1a2b3cd45ef6g789h10i11j,", {
    account: 1,
    name: "TD Bank",
    primary: 1,
    type: ButtonclikrApi.AccountsUpdateReqBodySchemaType.All,
    status: 1,
    reserved: 1,
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this entity, associated with the bank account.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.AccountsUpdateReqBodySchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">deleteAccountsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAccountsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Account. An Account represents a bank account associated with an Entity.

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
await client.accounts.deleteAccountsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAccountsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccounts</a>({ ...params }) -> ButtonclikrApi.GetAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Account representing a bank account associated with an Entity.

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
await client.accounts.getAccounts();
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

**request:** `ButtonclikrApi.GetAccountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">postAccounts</a>({ ...params }) -> ButtonclikrApi.PostAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an account, representing a bank account, to associate bank information with one or more entities.

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
await client.accounts.postAccounts({
    entity: "p1_ent_5a1ef5e5565631155c95344",
    account: {
        method: 8,
        number: 123456789012345,
        routing: 63013924,
    },
    primary: 1,
    type: ButtonclikrApi.AccountsAddBankAccountReqBodyType.All,
    status: 1,
    reserved: 1,
    currency: ButtonclikrApi.AccountsAddBankAccountReqBodyCurrency.Aed,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.AccountsAddBankAccountReqBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountRefsId</a>(id, { ...params }) -> ButtonclikrApi.GetAccountRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on accountRefs coming soon

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
await client.accounts.getAccountRefsId("id");
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

**id:** `string` — The ID of this resource, or the (unknown) ID associated with the account.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAccountRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">putAccountRefsId</a>(id, { ...params }) -> ButtonclikrApi.PutAccountRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on accountRefs coming soon TBD

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
await client.accounts.putAccountRefsId("id", {
    account: "account",
    ref: "ref",
    stage: ButtonclikrApi.AccountRefUpdateStage.AccessToken,
    platform: "PLAID",
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

**id:** `string` — The ID of this resource, or the (unknown) ID associated with the account.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.AccountRefUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">deleteAccountRefsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAccountRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for delete on accountRefs coming soon

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
await client.accounts.deleteAccountRefsId("id");
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

**id:** `string` — The ID of this resource, or the ID associated with the account.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAccountRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountRefs</a>({ ...params }) -> ButtonclikrApi.GetAccountRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on accountRefs coming soon. TBD.

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
await client.accounts.getAccountRefs();
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

**request:** `ButtonclikrApi.GetAccountRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">postAccountRefs</a>({ ...params }) -> ButtonclikrApi.PostAccountRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on accountRefs coming soon. TBD

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
await client.accounts.postAccountRefs({
    account: "account",
    ref: "ref",
    stage: ButtonclikrApi.AccountRefUpdateStage.AccessToken,
    platform: "PLAID",
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

**request:** `ButtonclikrApi.AccountRefUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountVerificationResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetAccountVerificationResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an accountVerificationResults resource.
An accountVerificationResults resource represents the result of an attempt to verify a bank account. It is linked to an accountVerification resource.

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
await client.accounts.getAccountVerificationResultsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAccountVerificationResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountVerificationResults</a>({ ...params }) -> ButtonclikrApi.GetAccountVerificationResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an accountVerificationResults resource.
An accountVerificationResults resource represents the result of an attempt to verify a bank account. It is linked to an accountVerification resource.

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
await client.accounts.getAccountVerificationResults();
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

**request:** `ButtonclikrApi.GetAccountVerificationResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountVerificationsId</a>(id, { ...params }) -> ButtonclikrApi.GetAccountVerificationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of all account verifications that query an accountVerifications resource, representing attempts to verify the ownership of a particular bank account by verifying a known deposit amount or credential.

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
await client.accounts.getAccountVerificationsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAccountVerificationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">deleteAccountVerificationsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAccountVerificationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an accountVerifications resource.
An accountVerifications resource represents an attempt to verify the ownership of a particular bank account by verifying a known deposit amount or credential.

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
await client.accounts.deleteAccountVerificationsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAccountVerificationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountVerifications</a>({ ...params }) -> ButtonclikrApi.GetAccountVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of all account verifications representing attempts to verify the ownership of a particular bank account by verifying a known deposit amount or credential.

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
await client.accounts.getAccountVerifications();
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

**request:** `ButtonclikrApi.GetAccountVerificationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">postAccountVerifications</a>({ ...params }) -> ButtonclikrApi.PostAccountVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an accountVerifications resource.
An accountVerifications resource represents an attempt to verify the ownership of a particular bank account by verifying a known deposit amount or credential.

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
await client.accounts.postAccountVerifications({
    account: "account",
    type: ButtonclikrApi.CreateAccountVerificationRequestBodySchemaType.Debit,
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

**request:** `ButtonclikrApi.CreateAccountVerificationRequestBodySchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getChangeRequestsId</a>(id, { ...params }) -> ButtonclikrApi.GetChangeRequestsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Change Request.
ChangeRequests is a resource that manages changes to a certain resource.

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
await client.accounts.getChangeRequestsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetChangeRequestsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">putChangeRequestsId</a>(id, { ...params }) -> ButtonclikrApi.PutChangeRequestsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Change Request.
ChangeRequests is a resource that manages changes to a certain resource.

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
await client.accounts.putChangeRequestsId("id", {
    login: "login",
    status: ButtonclikrApi.ChangeRequestStatus.Pending,
    reasonType: "reasonType",
    reason: "reason",
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.ChangeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">deleteChangeRequestsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteChangeRequestsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Change Request.
ChangeRequests is a resource that manages changes to a certain resource.

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
await client.accounts.deleteChangeRequestsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteChangeRequestsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getChangeRequests</a>({ ...params }) -> ButtonclikrApi.GetChangeRequestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Change Request.
ChangeRequests is a resource that manages changes to a certain resource.

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
await client.accounts.getChangeRequests();
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

**request:** `ButtonclikrApi.GetChangeRequestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entries

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getAdjustmentsId</a>(id, { ...params }) -> ButtonclikrApi.GetAdjustmentsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Adjustment, which is a way to make monetary adjustments to an entity's funds.

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
await client.entries.getAdjustmentsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Adjustment ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAdjustmentsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getAdjustments</a>({ ...params }) -> ButtonclikrApi.GetAdjustmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Adjustment, which is a way to make monetary adjustments to an entity's funds.

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
await client.entries.getAdjustments({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAdjustmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">postAdjustments</a>({ ...params }) -> ButtonclikrApi.PostAdjustmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Adjustment.
An Adjustment is a way to make monetary adjustments to an entity's funds.

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
await client.entries.postAdjustments({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    fromentity: {
        key: "value",
    },
    onentity: {
        key: "value",
    },
    disbursement: {
        key: "value",
    },
    description: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    currency: ButtonclikrApi.PostAdjustmentsRequestCurrency.Aed,
    funding: {
        key: "value",
    },
    platform: {
        key: "value",
    },
    fbo: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostAdjustmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getDisbursementEntriesId</a>(id, { ...params }) -> ButtonclikrApi.GetDisbursementEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Disbursement Entry that is a record of disbursement amounts coming from.

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
await client.entries.getDisbursementEntriesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this disbursement entry.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDisbursementEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">putDisbursementEntriesId</a>(id, { ...params }) -> ButtonclikrApi.PutDisbursementEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a DisbursementEntry.
An DisbursementEntry is a record of disbursement amount come from.

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
await client.entries.putDisbursementEntriesId(
    {
        key: "value",
    },
    {
        disbursement: {
            key: "value",
        },
        entry: {
            key: "value",
        },
        pendingEntry: {
            key: "value",
        },
        reserveEntry: {
            key: "value",
        },
        event: ButtonclikrApi.PutDisbursementEntriesIdRequestEvent.One,
        eventId: {
            key: "value",
        },
        amount: {
            key: "value",
        },
        amountUsed: {
            key: "value",
        },
        description: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutDisbursementEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">deleteDisbursementEntriesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteDisbursementEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a DisbursementEntry.
An DisbursementEntry is a record of disbursement amount come from.

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
await client.entries.deleteDisbursementEntriesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteDisbursementEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getDisbursementEntries</a>({ ...params }) -> ButtonclikrApi.GetDisbursementEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a DisbursementEntry to get a record of where the disbursement amount is coming from.

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
await client.entries.getDisbursementEntries({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetDisbursementEntriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">postDisbursementEntries</a>({ ...params }) -> ButtonclikrApi.PostDisbursementEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a DisbursementEntry.
An DisbursementEntry is a record of disbursement amount come from.

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
await client.entries.postDisbursementEntries({
    disbursement: {
        key: "value",
    },
    entry: {
        key: "value",
    },
    pendingEntry: {
        key: "value",
    },
    reserveEntry: {
        key: "value",
    },
    event: ButtonclikrApi.PostDisbursementEntriesRequestEvent.One,
    eventId: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    amountUsed: {
        key: "value",
    },
    description: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostDisbursementEntriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getEntriesId</a>(id, { ...params }) -> ButtonclikrApi.GetEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Entry resource.

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
await client.entries.getEntriesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Entry ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getEntries</a>({ ...params }) -> ButtonclikrApi.GetEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Entry resource. An Entry resource represents a record of amounts moving in or out of the funds held by an Entity. This could be a time-based activity such as a weekly or monthly summary, or an event-based activity such as a Capture, a Payout, or a Fee. In the case of an event-based activity, the Entry contains references to the activity in the appropriate field.

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
await client.entries.getEntries({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getEntryOriginsId</a>(id, { ...params }) -> ButtonclikrApi.GetEntryOriginsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Entry Origin, details for which coming soon.

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
await client.entries.getEntryOriginsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The Entry Origin ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntryOriginsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getEntryOrigins</a>({ ...params }) -> ButtonclikrApi.GetEntryOriginsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on entryOrigins coming soon

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
await client.entries.getEntryOrigins({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntryOriginsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getPendingEntriesId</a>(id, { ...params }) -> ButtonclikrApi.GetPendingEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Pending Entry resource.

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
await client.entries.getPendingEntriesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Pending Entry ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetPendingEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getPendingEntries</a>({ ...params }) -> ButtonclikrApi.GetPendingEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a PendingEntry resource.
A PendingEntry resource represents a record of amounts moving in or out of the funds held by an Entity.
For example, this could be a time-based activity such as a weekly or monthly summary, or an event-based activity such as a Capture, a Payout, or a Fee. In the case of an event-based activity, the PendingEntry contains references the activity in the appropriate field. Eventually the PendingEntry will trigger the creation of an Entry resource and its amount will reflect any unsourced amounts for the Entry.

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
await client.entries.getPendingEntries({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetPendingEntriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getReserveEntriesId</a>(id, { ...params }) -> ButtonclikrApi.GetReserveEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Reserve Entry resource that describes a record of funds moving in or out of reserve and can be associated with either a Transaction, a Reserve, an entityReserve, or another reserveEntry resource.

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
await client.entries.getReserveEntriesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this reserve entry.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetReserveEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getReserveEntries</a>({ ...params }) -> ButtonclikrApi.GetReserveEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a reserveEntry resource.
A reserveEntry resource describes a record of funds moving in or out of reserve. It can be associated with either a Transaction, a Reserve, an entityReserve, or another reserveEntry resource.

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
await client.entries.getReserveEntries({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetReserveEntriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">postReserveEntries</a>({ ...params }) -> ButtonclikrApi.PostReserveEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Reserve Entry resource that describes a record of funds moving in or out of reserve and can be associated with either a Transaction, a Reserve, an entityReserve, or another reserveEntry resource.

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
await client.entries.postReserveEntries({
    login: {
        key: "value",
    },
    fund: {
        key: "value",
    },
    entry: {
        key: "value",
    },
    hold: {
        key: "value",
    },
    txn: {
        key: "value",
    },
    reserve: {
        key: "value",
    },
    entityReserve: {
        key: "value",
    },
    reserveEntry: {
        key: "value",
    },
    onentity: {
        key: "value",
    },
    event: "string",
    eventId: {
        key: "value",
    },
    description: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    release: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostReserveEntriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getStatementEntriesId</a>(id, { ...params }) -> ButtonclikrApi.GetStatementEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a StatementEntry resource. A StatementEntry resource represents a record of funds owed for a billing schedule.

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
await client.entries.getStatementEntriesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this statement entry.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetStatementEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">putStatementEntriesId</a>(id, { ...params }) -> ButtonclikrApi.PutStatementEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a StatementEntry resource.
A StatementEntry resource represents a record of funds owed for a billing schedule.
For example, this could be a scheduled weekly or monthly fee, or an event-based activity such as a capture or payout fee.

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
await client.entries.putStatementEntriesId(
    {
        key: "value",
    },
    {
        billing: {
            key: "value",
        },
        statement: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        onentity: {
            key: "value",
        },
        forentity: {
            key: "value",
        },
        fee: {
            key: "value",
        },
        profitShare: {
            key: "value",
        },
        event: ButtonclikrApi.PutStatementEntriesIdRequestEvent.One,
        eventId: {
            key: "value",
        },
        originalEvent: ButtonclikrApi.PutStatementEntriesIdRequestOriginalEvent.One,
        originalEventId: {
            key: "value",
        },
        description: {
            key: "value",
        },
        amount: {
            key: "value",
        },
        deductedFromBalance: ButtonclikrApi.PutStatementEntriesIdRequestDeductedFromBalance.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutStatementEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">deleteStatementEntriesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteStatementEntriesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a StatementEntry resource.
A StatementEntry resource represents a record of funds owed for a billing schedule.
For example, this could be a scheduled weekly or monthly fee, or an event-based activity such as a capture or payout fee.

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
await client.entries.deleteStatementEntriesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteStatementEntriesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">getStatementEntries</a>({ ...params }) -> ButtonclikrApi.GetStatementEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a StatementEntry resource.
A StatementEntry resource represents a record of funds owed for a billing schedule.
For example, this could be a scheduled weekly or monthly fee, or an event-based activity such as a capture or payout fee.

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
await client.entries.getStatementEntries({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetStatementEntriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">postStatementEntries</a>({ ...params }) -> ButtonclikrApi.PostStatementEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a StatementEntry resource.
A StatementEntry resource represents a record of funds owed for a billing schedule.
For example, this could be a scheduled weekly or monthly fee, or an event-based activity such as a capture or payout fee.

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
await client.entries.postStatementEntries({
    billing: {
        key: "value",
    },
    statement: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    onentity: {
        key: "value",
    },
    forentity: {
        key: "value",
    },
    fee: {
        key: "value",
    },
    profitShare: {
        key: "value",
    },
    event: ButtonclikrApi.PostStatementEntriesRequestEvent.One,
    eventId: {
        key: "value",
    },
    originalEvent: ButtonclikrApi.PostStatementEntriesRequestOriginalEvent.One,
    originalEventId: {
        key: "value",
    },
    description: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    deductedFromBalance: ButtonclikrApi.PostStatementEntriesRequestDeductedFromBalance.Zero,
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

**request:** `ButtonclikrApi.PostStatementEntriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Aggregations

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">getAggregationResultGroupsId</a>(id, { ...params }) -> ButtonclikrApi.GetAggregationResultGroupsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an AggregationResultGroup resource, which holds data regarding a processed aggregation.

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
await client.aggregations.getAggregationResultGroupsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Aggregation Result Group ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAggregationResultGroupsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">deleteAggregationResultGroupsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAggregationResultGroupsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Aggregation Result Group, which holds data regarding a processed aggregation.

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
await client.aggregations.deleteAggregationResultGroupsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Aggregation Result Group ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAggregationResultGroupsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">getAggregationResultGroups</a>({ ...params }) -> ButtonclikrApi.GetAggregationResultGroupsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an AggregationResultGroup resource, which holds data regarding a processed aggregation.

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
await client.aggregations.getAggregationResultGroups({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAggregationResultGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">getAggregationResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetAggregationResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an AggregationResult.

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
await client.aggregations.getAggregationResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Aggregation Result ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAggregationResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">deleteAggregationResultsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAggregationResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Aggregation Result that holds a field totals calculated when processing an aggregation.

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
await client.aggregations.deleteAggregationResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Aggregation Result ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAggregationResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">getAggregationResults</a>({ ...params }) -> ButtonclikrApi.GetAggregationResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an AggregationResult resource holding field totals calculated when processing an aggregation.

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
await client.aggregations.getAggregationResults({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAggregationResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">getAggregationsId</a>(id, { ...params }) -> ButtonclikrApi.GetAggregationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Aggregation resource that uses a search to query for records on the given resource and applies the desired calculations (count, sum, min, and/or max) to the field in question.

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
await client.aggregations.getAggregationsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Aggregation ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAggregationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">putAggregationsId</a>(id, { ...params }) -> ButtonclikrApi.PutAggregationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Aggregation resource or Update an Aggregation.

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
await client.aggregations.putAggregationsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        forlogin: {
            key: "value",
        },
        org: {
            key: "value",
        },
        team: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        type: ButtonclikrApi.PutAggregationsIdRequestType.EntityEntryEventMerchant,
        level: ButtonclikrApi.PutAggregationsIdRequestLevel.Admin,
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        resource: "string",
        totals: {
            key: "value",
        },
        degrouping: {
            key: "value",
        },
        status: ButtonclikrApi.PutAggregationsIdRequestStatus.NotReady,
        schedule: ButtonclikrApi.PutAggregationsIdRequestSchedule.Hours,
        scheduleFactor: {
            key: "value",
        },
        start: {
            key: "value",
        },
        default: ButtonclikrApi.PutAggregationsIdRequestDefault.Zero,
        inactive: ButtonclikrApi.PutAggregationsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutAggregationsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource or The Aggregation ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutAggregationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">deleteAggregationsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAggregationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Aggregation resource or an Aggregation.

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
await client.aggregations.deleteAggregationsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Aggregation ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAggregationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">getAggregations</a>({ ...params }) -> ButtonclikrApi.GetAggregationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Aggregation resource using the search to query for records on the given resource and apply desired calculations (count, sum, min, and/or max) to the specified field.

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
await client.aggregations.getAggregations({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAggregationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregations.<a href="/src/api/resources/aggregations/client/Client.ts">postAggregations</a>({ ...params }) -> ButtonclikrApi.PostAggregationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Aggregation resource that uses the search to query for records on a given resource and applies the desired calculations (count, sum, min, and/or max) to the field in question.

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
await client.aggregations.postAggregations({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    forlogin: {
        key: "value",
    },
    org: {
        key: "value",
    },
    team: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    type: ButtonclikrApi.PostAggregationsRequestType.EntityEntryEventMerchant,
    level: ButtonclikrApi.PostAggregationsRequestLevel.Admin,
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    resource: 1,
    search: {
        key: "value",
    },
    totals: {
        key: "value",
    },
    degrouping: {
        key: "value",
    },
    status: ButtonclikrApi.PostAggregationsRequestStatus.NotReady,
    schedule: ButtonclikrApi.PostAggregationsRequestSchedule.Hours,
    scheduleFactor: {
        key: "value",
    },
    start: {
        key: "value",
    },
    default: ButtonclikrApi.PostAggregationsRequestDefault.Zero,
    inactive: ButtonclikrApi.PostAggregationsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostAggregationsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostAggregationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Alert Actions

<details><summary><code>client.alertActions.<a href="/src/api/resources/alertActions/client/Client.ts">getAlertActionsId</a>(id, { ...params }) -> ButtonclikrApi.GetAlertActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an alertAction; An alertAction resource represents a particular instance of an Alert that is sent out through one particular channel, for example, SMS, mobile application notification, or email, each alertAction being associated with an Alert resource.

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
await client.alertActions.getAlertActionsId("id");
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

**id:** `string` — The ID of this resource and The Alert Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAlertActionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alertActions.<a href="/src/api/resources/alertActions/client/Client.ts">putAlertActionsId</a>(id, { ...params }) -> ButtonclikrApi.PutAlertActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an alertAction representing a particular instance of an Alert that is sent out through one particular channel, for example, SMS, mobile application notification, or email, each being associated with an Alert resource.

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
await client.alertActions.putAlertActionsId("id", {
    alert: "alert",
    options: "options",
    value: "value",
    maxAttemptsTempDisabled: 1,
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this resource and The Alert Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.UpdateAlertActionsRequestBodySchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alertActions.<a href="/src/api/resources/alertActions/client/Client.ts">deleteAlertActionsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAlertActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an alertAction TBD.

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
await client.alertActions.deleteAlertActionsId("id");
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

**id:** `string` — The ID of this resource and The Alert Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAlertActionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alertActions.<a href="/src/api/resources/alertActions/client/Client.ts">getAlertActions</a>({ ...params }) -> ButtonclikrApi.GetAlertActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an alertAction representing a particular instance of an Alert that is sent out through one particular channel. For example, SMS, mobile application notification, or email, each being associated with an Alert resource.

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
await client.alertActions.getAlertActions();
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

**request:** `ButtonclikrApi.GetAlertActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alertActions.<a href="/src/api/resources/alertActions/client/Client.ts">postAlertActions</a>({ ...params }) -> ButtonclikrApi.PostAlertActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an alertAction, which represents a particular instance of an Alert sent out through one particular channel, such as SMS, mobile application notification, or email, and each alertAction is associated with an Alert resource.

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
await client.alertActions.postAlertActions({
    alert: "alert",
    type: ButtonclikrApi.CreateNewAlertActionSchemaType.Email,
    options: "options",
    value: "value",
    maxAttemptsTempDisabled: 1,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.CreateNewAlertActionSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Alerts

<details><summary><code>client.alerts.<a href="/src/api/resources/alerts/client/Client.ts">getAlertsId</a>(id, { ...params }) -> ButtonclikrApi.GetAlertsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Alert resource, which represents a particular event notification delivered to a user, and you can invoke alerts by setting up triggers in an alertTriggers resource.

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
await client.alerts.getAlertsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this alert.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAlertsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alerts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alerts.<a href="/src/api/resources/alerts/client/Client.ts">putAlertsId</a>(id, { ...params }) -> ButtonclikrApi.PutAlertsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Alert resource, which represents a particular event notification delivered to a user, and you can invoke alerts by setting up triggers in an alertTriggers resource.

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
await client.alerts.putAlertsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        forlogin: {
            key: "value",
        },
        team: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutAlertsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutAlertsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this alert.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutAlertsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alerts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alerts.<a href="/src/api/resources/alerts/client/Client.ts">deleteAlertsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAlertsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Alert resource, which represents a particular event notification delivered to a user, and you can invoke alerts by setting up triggers in an alertTriggers resource.

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
await client.alerts.deleteAlertsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this alert.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAlertsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alerts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alerts.<a href="/src/api/resources/alerts/client/Client.ts">getAlerts</a>({ ...params }) -> ButtonclikrApi.GetAlertsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Alert resource, which represents a particular event notification delivered to a user; you can invoke alerts by setting up triggers in an alertTriggers resource.

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
await client.alerts.getAlerts({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAlertsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alerts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alerts.<a href="/src/api/resources/alerts/client/Client.ts">postAlerts</a>({ ...params }) -> ButtonclikrApi.PostAlertsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Alert resource, which represents a particular event notification delivered to a user, and you can invoke alerts by setting up triggers in an alertTriggers resource.

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
await client.alerts.postAlerts({
    login: {
        key: "value",
    },
    forlogin: {
        key: "value",
    },
    team: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostAlertsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostAlertsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostAlertsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alerts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Alert Triggers

<details><summary><code>client.alertTriggers.<a href="/src/api/resources/alertTriggers/client/Client.ts">getAlertTriggersId</a>(id, { ...params }) -> ButtonclikrApi.GetAlertTriggersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an alertTrigger resource that represents a set of triggers causing an Alert to be sent, for example, the levying of a Fee or a Payout occurring, each linked to a particular Alert, with the action to take when triggered set up in the alertActions resource.

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
await client.alertTriggers.getAlertTriggersId("id");
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

**id:** `string` — The ID of this alert trigger.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAlertTriggersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertTriggers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alertTriggers.<a href="/src/api/resources/alertTriggers/client/Client.ts">putAlertTriggersId</a>(id, { ...params }) -> ButtonclikrApi.PutAlertTriggersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an alertTrigger resource that represents a set of triggers causing an Alert to be sent, for example levying a Fee or a Payout occurring, with each trigger linked to a particular Alert and the action taken when triggered set up in the alertActions resource.

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
await client.alertTriggers.putAlertTriggersId("id", {
    alert: "alert",
    event: ButtonclikrApi.AlertTriggersReqBodySchemaEvent.Create,
    resource: 1,
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this alert trigger.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.AlertTriggersReqBodySchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertTriggers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alertTriggers.<a href="/src/api/resources/alertTriggers/client/Client.ts">deleteAlertTriggersId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAlertTriggersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an alertTrigger resource that represents a set of triggers causing an Alert to be sent, for example levying a Fee or a Payout occurring, each linked to a particular Alert with the action to take set up in the alertActions resource.

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
await client.alertTriggers.deleteAlertTriggersId("id");
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

**id:** `string` — The ID of this alert trigger.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAlertTriggersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertTriggers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alertTriggers.<a href="/src/api/resources/alertTriggers/client/Client.ts">getAlertTriggers</a>({ ...params }) -> ButtonclikrApi.GetAlertTriggersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an alertTrigger resource that represents a set of triggers that cause an Alert to be sent, where for example this could be the levying of a Fee or a Payout occurring, and each alertTrigger is linked to a particular Alert, with the action to take when an Alert is triggered set up in the alertActions resource.

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
await client.alertTriggers.getAlertTriggers({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAlertTriggersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertTriggers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.alertTriggers.<a href="/src/api/resources/alertTriggers/client/Client.ts">postAlertTriggers</a>({ ...params }) -> ButtonclikrApi.PostAlertTriggersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an alertTrigger resource that represents a set of triggers causing an Alert to be sent, such as the levying of a Fee or a Payout occurring, and each alertTrigger is linked to a particular Alert with actions set up in the alertActions resource.

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
await client.alertTriggers.postAlertTriggers({
    alert: {
        key: "value",
    },
    event: 1,
    resource: "string",
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostAlertTriggersRequestInactive.Zero,
    frozen: ButtonclikrApi.PostAlertTriggersRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostAlertTriggersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertTriggers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## API Keys

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">getApikeysId</a>(id, { ...params }) -> ButtonclikrApi.GetApikeysIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an API key that represents a permanent method of authentication to the API, remaining active until marked as inactive or deleted.

Details:

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
await client.apiKeys.getApikeysId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The API Key ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetApikeysIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">putApikeysId</a>(id, { ...params }) -> ButtonclikrApi.PutApikeysIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an API key, which represents a permanent method of authentication to the API, and each API key remains active until you mark it as inactive, or delete it.

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
await client.apiKeys.putApikeysId(
    {
        key: "value",
    },
    {
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        token: ButtonclikrApi.PutApikeysIdRequestToken.Zero,
        inactive: ButtonclikrApi.PutApikeysIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutApikeysIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The API Key ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutApikeysIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">deleteApikeysId</a>(id, { ...params }) -> ButtonclikrApi.DeleteApikeysIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an API key that represents a permanent method of authentication to the API and remains active until marked as inactive or deleted.

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
await client.apiKeys.deleteApikeysId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The API Key ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteApikeysIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">getApikeys</a>({ ...params }) -> ButtonclikrApi.GetApikeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an API key that represents a permanent method of authentication to the API and remains active until marked as inactive or deleted.

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
await client.apiKeys.getApikeys({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetApikeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">postApikeys</a>({ ...params }) -> ButtonclikrApi.PostApikeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an API key that represents a permanent method of authentication to the API, and remains active until marked as inactive or deleted.

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
await client.apiKeys.postApikeys({
    login: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    public: ButtonclikrApi.PostApikeysRequestPublic.Zero,
    token: ButtonclikrApi.PostApikeysRequestToken.Zero,
    inactive: ButtonclikrApi.PostApikeysRequestInactive.Zero,
    frozen: ButtonclikrApi.PostApikeysRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostApikeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Fees

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getAssessmentsId</a>(id, { ...params }) -> ButtonclikrApi.GetAssessmentsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Assessment resource represents a record of fees charged by processors or other third-parties to Entities or Orgs, which can represent either charges that are levied on a one-off, regularly scheduled, or event-driven basis.

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
await client.fees.getAssessmentsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this assessment.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAssessmentsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getAssessments</a>({ ...params }) -> ButtonclikrApi.GetAssessmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Assessment resource that represents a record of fees charged by processors or other third-parties to Entities or Orgs, that are levied on a one-off, regularly scheduled, or event-driven basis.

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
await client.fees.getAssessments({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAssessmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">postAssessments</a>({ ...params }) -> ButtonclikrApi.PostAssessmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Assessment resource.
An Assessment resource represents a record of fees charged by processors or other third-parties to Entities or Orgs.
These can represent either charges that are levied on a one-off, regularly scheduled, or event-driven basis.

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
await client.fees.postAssessments({
    entity: {
        key: "value",
    },
    onentity: {
        key: "value",
    },
    forentity: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    fee: {
        key: "value",
    },
    disbursement: {
        key: "value",
    },
    txn: {
        key: "value",
    },
    chargeback: {
        key: "value",
    },
    merchant: {
        key: "value",
    },
    event: ButtonclikrApi.PostAssessmentsRequestEvent.One,
    eventId: {
        key: "value",
    },
    description: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    platform: ButtonclikrApi.PostAssessmentsRequestPlatform.Apple,
    currency: ButtonclikrApi.PostAssessmentsRequestCurrency.Aed,
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

**request:** `ButtonclikrApi.PostAssessmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getExternalFeesId</a>(id, { ...params }) -> ButtonclikrApi.GetExternalFeesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query External Fees, Details for query on externalFees coming soon.

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
await client.fees.getExternalFeesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The External Fee ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetExternalFeesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">putExternalFeesId</a>(id, { ...params }) -> ButtonclikrApi.PutExternalFeesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an External Fee: Details for update on external fees coming soon.

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
await client.fees.putExternalFeesId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        filename: {
            key: "value",
        },
        date: {
            key: "value",
        },
        type: ButtonclikrApi.PutExternalFeesIdRequestType.Fanf,
        lineNumber: {
            key: "value",
        },
        amount: {
            key: "value",
        },
        metadata: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource and The External Fee ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutExternalFeesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">deleteExternalFeesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteExternalFeesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an External Fee; Details for deletion of external fees coming soon.

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
await client.fees.deleteExternalFeesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The External Fee ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteExternalFeesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getExternalFees</a>({ ...params }) -> ButtonclikrApi.GetExternalFeesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on externalFees coming soon

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
await client.fees.getExternalFees({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetExternalFeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">postExternalFees</a>({ ...params }) -> ButtonclikrApi.PostExternalFeesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on externalFees coming soon

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
await client.fees.postExternalFees({
    entity: {
        key: "value",
    },
    filename: {
        key: "value",
    },
    date: {
        key: "value",
    },
    type: ButtonclikrApi.PostExternalFeesRequestType.Fanf,
    lineNumber: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    metadata: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostExternalFeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getFeeModifiersId</a>(id, { ...params }) -> ButtonclikrApi.GetFeeModifiersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fee Modifier that can change the total amount of the fee or whoever will pay it, such as applying a 10% markup on the fee total for a specific org.

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
await client.fees.getFeeModifiersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Fee Modifier ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetFeeModifiersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">putFeeModifiersId</a>(id, { ...params }) -> ButtonclikrApi.PutFeeModifiersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Fee Modifier that can change the total amount of the fee or whoever will pay it, such as applying a 10% markup on the fee total for a specific org.

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
await client.fees.putFeeModifiersId(
    {
        key: "value",
    },
    {
        fee: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        org: {
            key: "value",
        },
        fromentity: {
            key: "value",
        },
        markupUm: ButtonclikrApi.PutFeeModifiersIdRequestMarkupUm.One,
        markupAmount: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutFeeModifiersIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutFeeModifiersIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource or The Fee Modifier ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutFeeModifiersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">deleteFeeModifiersId</a>(id, { ...params }) -> ButtonclikrApi.DeleteFeeModifiersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Fee Modifier that can change the total amount of the fee or whoever will pay it, such as applying a 10% markup on the fee total for a specific org.

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
await client.fees.deleteFeeModifiersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The Fee Modifier ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteFeeModifiersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getFeeModifiers</a>({ ...params }) -> ButtonclikrApi.GetFeeModifiersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fee Modifier that can change the total amount of the fee or whoever will pay it. For example, a Fee Modifier could apply a 10% markup on the fee total for a specific org.

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
await client.fees.getFeeModifiers({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetFeeModifiersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">postFeeModifiers</a>({ ...params }) -> ButtonclikrApi.PostFeeModifiersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Fee Modifier that can change the total amount of the fee or the party responsible for paying it. For example, a Fee Modifier could apply a 10% markup on the fee total for a specific org.

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
await client.fees.postFeeModifiers({
    fee: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    org: {
        key: "value",
    },
    fromentity: {
        key: "value",
    },
    markupUm: ButtonclikrApi.PostFeeModifiersRequestMarkupUm.One,
    markupAmount: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostFeeModifiersRequestInactive.Zero,
    frozen: ButtonclikrApi.PostFeeModifiersRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostFeeModifiersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getFeeRulesId</a>(id, { ...params }) -> ButtonclikrApi.GetFeeRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fee Rule that makes a Fee apply only in certain circumstances, such as applying an administration charge if a payment is under $50.

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
await client.fees.getFeeRulesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this fee rule.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetFeeRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">putFeeRulesId</a>(id, { ...params }) -> ButtonclikrApi.PutFeeRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Fee Rule that makes a Fee apply only in certain circumstances, for example, applying an administration charge if a payment is under $50.

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
await client.fees.putFeeRulesId(
    {
        key: "value",
    },
    {
        fee: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        type: ButtonclikrApi.PutFeeRulesIdRequestType.Less,
        application: ButtonclikrApi.PutFeeRulesIdRequestApplication.Both,
        value: ButtonclikrApi.PutFeeRulesIdRequestValue.Zero,
        grouping: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutFeeRulesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutFeeRulesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this fee rule.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutFeeRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">deleteFeeRulesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteFeeRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Fee Rule that makes a Fee apply only in certain circumstances, such as applying an administration charge if a payment is under $50.

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
await client.fees.deleteFeeRulesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this fee rule.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteFeeRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getFeeRules</a>({ ...params }) -> ButtonclikrApi.GetFeeRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fee Rule that makes a Fee apply only in certain circumstances, such as applying an administration charge if a payment is under $50.

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
await client.fees.getFeeRules({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetFeeRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">postFeeRules</a>({ ...params }) -> ButtonclikrApi.PostFeeRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a conditional Fee Rule that makes fees apply only in certain circumstances, such as applying an administration charge if a payment is under $50.

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
await client.fees.postFeeRules({
    fee: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    type: ButtonclikrApi.PostFeeRulesRequestType.Less,
    application: ButtonclikrApi.PostFeeRulesRequestApplication.Both,
    value: ButtonclikrApi.PostFeeRulesRequestValue.Zero,
    grouping: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostFeeRulesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostFeeRulesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostFeeRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getFeesId</a>(id, { ...params }) -> ButtonclikrApi.GetFeesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fee that is an amount one Entity can charge another Entity according to a particular schedule, or based on certain events.

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
await client.fees.getFeesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Fee ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetFeesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">putFeesId</a>(id, { ...params }) -> ButtonclikrApi.PutFeesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Fee that is an amount one Entity can charge another Entity according to a particular schedule, or based on certain events.

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
await client.fees.putFeesId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        forentity: {
            key: "value",
        },
        fromentity: {
            key: "value",
        },
        org: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        type: ButtonclikrApi.PutFeesIdRequestType.One,
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        schedule: ButtonclikrApi.PutFeesIdRequestSchedule.One,
        scheduleFactor: {
            key: "value",
        },
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        collection: ButtonclikrApi.PutFeesIdRequestCollection.One,
        collectionFactor: {
            key: "value",
        },
        collectionOffset: {
            key: "value",
        },
        collectionIncludeCurrent: {
            key: "value",
        },
        um: ButtonclikrApi.PutFeesIdRequestUm.One,
        amount: {
            key: "value",
        },
        maximum: {
            key: "value",
        },
        currency: ButtonclikrApi.PutFeesIdRequestCurrency.Aed,
        txnFee: ButtonclikrApi.PutFeesIdRequestTxnFee.Zero,
        inactive: ButtonclikrApi.PutFeesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutFeesIdRequestFrozen.Zero,
        sscheduleFactor: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource and The Fee ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutFeesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">deleteFeesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteFeesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Fee that is an amount one Entity can charge another Entity according to a particular schedule, or based on certain events.

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
await client.fees.deleteFeesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Fee ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteFeesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">getFees</a>({ ...params }) -> ButtonclikrApi.GetFeesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fee that is an amount that one Entity can charge another Entity according to a particular schedule, or based on certain events, such as being charged weekly, after boarding, or when an overdraft is used.

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
await client.fees.getFees({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetFeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fees.<a href="/src/api/resources/fees/client/Client.ts">postFees</a>({ ...params }) -> ButtonclikrApi.PostFeesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Fee that is an amount one Entity can charge another Entity according to a particular schedule or based on certain events.For example, Fees can be charged on a weekly basis, after boarding, or when an overdraft is used to cover a charge.

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
await client.fees.postFees({
    entity: {
        key: "value",
    },
    forentity: {
        key: "value",
    },
    fromentity: {
        key: "value",
    },
    org: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    type: ButtonclikrApi.PostFeesRequestType.One,
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    schedule: ButtonclikrApi.PostFeesRequestSchedule.One,
    scheduleFactor: {
        key: "value",
    },
    start: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    collection: ButtonclikrApi.PostFeesRequestCollection.One,
    collectionFactor: {
        key: "value",
    },
    collectionOffset: {
        key: "value",
    },
    collectionIncludeCurrent: {
        key: "value",
    },
    um: ButtonclikrApi.PostFeesRequestUm.One,
    amount: {
        key: "value",
    },
    maximum: {
        key: "value",
    },
    currency: ButtonclikrApi.PostFeesRequestCurrency.Aed,
    txnFee: ButtonclikrApi.PostFeesRequestTxnFee.Zero,
    inactive: ButtonclikrApi.PostFeesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostFeesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostFeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AuditLogs

<details><summary><code>client.auditLogs.<a href="/src/api/resources/auditLogs/client/Client.ts">getAuditLogsId</a>(id, { ...params }) -> ButtonclikrApi.GetAuditLogsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on auditLogs coming soon

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
await client.auditLogs.getAuditLogsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAuditLogsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditLogs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auditLogs.<a href="/src/api/resources/auditLogs/client/Client.ts">getAuditLogs</a>({ ...params }) -> ButtonclikrApi.GetAuditLogsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on auditLogs coming soon

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
await client.auditLogs.getAuditLogs({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAuditLogsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditLogs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Authentication Tokens

<details><summary><code>client.authenticationTokens.<a href="/src/api/resources/authenticationTokens/client/Client.ts">getAuthTokensId</a>(id, { ...params }) -> ButtonclikrApi.GetAuthTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an AuthToken, an AuthToken resource is an additional layer of authentication security and tracking for Apikeys and Sessions.

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
await client.authenticationTokens.getAuthTokensId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Authentication Token ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetAuthTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthenticationTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authenticationTokens.<a href="/src/api/resources/authenticationTokens/client/Client.ts">putAuthTokensId</a>(id, { ...params }) -> ButtonclikrApi.PutAuthTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an AuthToken to add an additional layer of authentication security and tracking for Apikeys and Sessions.

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
await client.authenticationTokens.putAuthTokensId(
    {
        key: "value",
    },
    {
        used: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutAuthTokensIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutAuthTokensIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Authentication Token ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutAuthTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthenticationTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authenticationTokens.<a href="/src/api/resources/authenticationTokens/client/Client.ts">deleteAuthTokensId</a>(id, { ...params }) -> ButtonclikrApi.DeleteAuthTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an AuthToken, which is an additional layer of authentication security and tracking for Apikeys and Sessions.

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
await client.authenticationTokens.deleteAuthTokensId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Authentication Token ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteAuthTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthenticationTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authenticationTokens.<a href="/src/api/resources/authenticationTokens/client/Client.ts">getAuthTokens</a>({ ...params }) -> ButtonclikrApi.GetAuthTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an AuthToken, which is an additional layer of authentication security and tracking for Apikeys and Sessions.

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
await client.authenticationTokens.getAuthTokens({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetAuthTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthenticationTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authenticationTokens.<a href="/src/api/resources/authenticationTokens/client/Client.ts">postAuthTokens</a>({ ...params }) -> ButtonclikrApi.PostAuthTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an AuthToken to add an additional layer of authentication, security, and tracking for Apikeys and Sessions.

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
await client.authenticationTokens.postAuthTokens({
    login: {
        key: "value",
    },
    customer: {
        key: "value",
    },
    token: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostAuthTokensRequestInactive.Zero,
    frozen: ButtonclikrApi.PostAuthTokensRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostAuthTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthenticationTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Batches (Settlements)

<details><summary><code>client.batchesSettlements.<a href="/src/api/resources/batchesSettlements/client/Client.ts">getBatchesId</a>(id, { ...params }) -> ButtonclikrApi.GetBatchesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Batch, a Batch resource represents a group of Transactions that are sent together to the processor to be settled.

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
await client.batchesSettlements.getBatchesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Batch ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetBatchesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesSettlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batchesSettlements.<a href="/src/api/resources/batchesSettlements/client/Client.ts">putBatchesId</a>(id, { ...params }) -> ButtonclikrApi.PutBatchesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Batch. A Batch resource represents a group of Transactions that are sent together to the processor to be settled.

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
await client.batchesSettlements.putBatchesId(
    {
        key: "value",
    },
    {
        status: ButtonclikrApi.PutBatchesIdRequestStatus.Open,
        ref: {
            key: "value",
        },
        clientRef: {
            key: "value",
        },
        processingId: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutBatchesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutBatchesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Batch ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutBatchesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesSettlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batchesSettlements.<a href="/src/api/resources/batchesSettlements/client/Client.ts">getBatches</a>({ ...params }) -> ButtonclikrApi.GetBatchesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Batch, which represents a group of Transactions that are sent together to the processor to be settled.

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
await client.batchesSettlements.getBatches({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetBatchesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesSettlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batchesSettlements.<a href="/src/api/resources/batchesSettlements/client/Client.ts">postBatches</a>({ ...params }) -> ButtonclikrApi.PostBatchesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Batch. A Batch resource represents a group of Transactions that are sent together to the processor to be settled.

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
await client.batchesSettlements.postBatches({
    merchant: {
        key: "value",
    },
    platform: ButtonclikrApi.PostBatchesRequestPlatform.Apple,
    status: ButtonclikrApi.PostBatchesRequestStatus.Open,
    ref: {
        key: "value",
    },
    clientRef: {
        key: "value",
    },
    processingId: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostBatchesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostBatchesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostBatchesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesSettlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batchesSettlements.<a href="/src/api/resources/batchesSettlements/client/Client.ts">getBatchRefsId</a>(id, { ...params }) -> ButtonclikrApi.GetBatchRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Batch Reference that represents a reference code issued to a batch when a batch file is sent.

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
await client.batchesSettlements.getBatchRefsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Batch Reference ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetBatchRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesSettlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batchesSettlements.<a href="/src/api/resources/batchesSettlements/client/Client.ts">putBatchRefsId</a>(id, { ...params }) -> ButtonclikrApi.PutBatchRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Batch Reference, which represents a reference code issued to a batch when a batch file is sent.

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
await client.batchesSettlements.putBatchRefsId(
    {
        key: "value",
    },
    {
        batch: {
            key: "value",
        },
        stage: ButtonclikrApi.PutBatchRefsIdRequestStage.All,
        ref: {
            key: "value",
        },
        file: {
            key: "value",
        },
        status: ButtonclikrApi.PutBatchRefsIdRequestStatus.Created,
    }
);
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

**id:** `unknown` — The ID of this resource or The Batch Reference ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutBatchRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesSettlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batchesSettlements.<a href="/src/api/resources/batchesSettlements/client/Client.ts">getBatchRefs</a>({ ...params }) -> ButtonclikrApi.GetBatchRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a batchRef or Batch Reference resource that represents a reference code issued to a batch when a batch file is sent.

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
await client.batchesSettlements.getBatchRefs({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetBatchRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesSettlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batchesSettlements.<a href="/src/api/resources/batchesSettlements/client/Client.ts">postBatchRefs</a>({ ...params }) -> ButtonclikrApi.PostBatchRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Batch Reference that represents a reference code issued to a batch when a batch file is sent.

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
await client.batchesSettlements.postBatchRefs({
    batch: {
        key: "value",
    },
    stage: ButtonclikrApi.PostBatchRefsRequestStage.All,
    ref: {
        key: "value",
    },
    file: {
        key: "value",
    },
    status: ButtonclikrApi.PostBatchRefsRequestStatus.Created,
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

**request:** `ButtonclikrApi.PostBatchRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchesSettlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">getBillingEventsId</a>(id, { ...params }) -> ButtonclikrApi.GetBillingEventsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Billing Event details for query on billingEvents coming soon.

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
await client.billing.getBillingEventsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this billing event.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetBillingEventsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">putBillingEventsId</a>(id, { ...params }) -> ButtonclikrApi.PutBillingEventsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Billing Event details for update on billingEvents coming soon.

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
await client.billing.putBillingEventsId(
    {
        key: "value",
    },
    {
        billing: {
            key: "value",
        },
        event: ButtonclikrApi.PutBillingEventsIdRequestEvent.Fees,
        eventSchedule: {
            key: "value",
        },
        deductFromBalance: ButtonclikrApi.PutBillingEventsIdRequestDeductFromBalance.Zero,
        inactive: ButtonclikrApi.PutBillingEventsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutBillingEventsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this billing event.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutBillingEventsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">deleteBillingEventsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteBillingEventsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Billing Event details for coming soon.

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
await client.billing.deleteBillingEventsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this billing event.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteBillingEventsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">getBillingEvents</a>({ ...params }) -> ButtonclikrApi.GetBillingEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for querying a Billing Event are coming soon.

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
await client.billing.getBillingEvents({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetBillingEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">postBillingEvents</a>({ ...params }) -> ButtonclikrApi.PostBillingEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on billingEvents coming soon.

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
await client.billing.postBillingEvents({
    billing: {
        key: "value",
    },
    event: ButtonclikrApi.PostBillingEventsRequestEvent.Fees,
    eventSchedule: {
        key: "value",
    },
    deductFromBalance: ButtonclikrApi.PostBillingEventsRequestDeductFromBalance.Zero,
    inactive: ButtonclikrApi.PostBillingEventsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostBillingEventsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostBillingEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">getBillingModifiersId</a>(id, { ...params }) -> ButtonclikrApi.GetBillingModifiersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Billing Modifier that can change the total amount of the billing or whoever will pay it, such as applying a 10% markup on the fee total for a specific org.

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
await client.billing.getBillingModifiersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this billing modifer.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetBillingModifiersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">putBillingModifiersId</a>(id, { ...params }) -> ButtonclikrApi.PutBillingModifiersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Billing Modifier that can change the total amount of the billing or whoever will pay it, such as applying a 10% markup on the fee total for a specific org.

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
await client.billing.putBillingModifiersId(
    {
        key: "value",
    },
    {
        billing: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        org: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        fromentity: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutBillingModifiersIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutBillingModifiersIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this billing modifer.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutBillingModifiersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">deleteBillingModifiersId</a>(id, { ...params }) -> ButtonclikrApi.DeleteBillingModifiersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Billing Modifier that can change the total amount of the billing or whoever will pay it.

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
await client.billing.deleteBillingModifiersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this billing modifer.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteBillingModifiersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">getBillingModifiers</a>({ ...params }) -> ButtonclikrApi.GetBillingModifiersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Billing Modifier that can change the total amount of the billing or determine who will pay it. For example, a Billing Modifier may apply a 10% markup on the fee total for a specific organization.

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
await client.billing.getBillingModifiers({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetBillingModifiersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">postBillingModifiers</a>({ ...params }) -> ButtonclikrApi.PostBillingModifiersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Billing Modifier that can change the total amount of the billing or adjust who will pay it, such as applying a 10% markup on the fee total for a specific organization.

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
await client.billing.postBillingModifiers({
    billing: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    org: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    fromentity: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostBillingModifiersRequestInactive.Zero,
    frozen: ButtonclikrApi.PostBillingModifiersRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostBillingModifiersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">getBillingsId</a>(id, { ...params }) -> ButtonclikrApi.GetBillingsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Billing that is a means to collect and invoice for any funds owed for a particular period of time, such as setting up a billing to collect fees and create a statement on a monthly basis.

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
await client.billing.getBillingsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Billing ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetBillingsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">putBillingsId</a>(id, { ...params }) -> ButtonclikrApi.PutBillingsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Billing, which is a means to collect and invoice for any funds owed for a particular period of time, such as setting up a billing to collect fees and create a statement on a monthly basis.

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
await client.billing.putBillingsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        forentity: {
            key: "value",
        },
        org: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        description: {
            key: "value",
        },
        schedule: ButtonclikrApi.PutBillingsIdRequestSchedule.Days,
        scheduleFactor: {
            key: "value",
        },
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        collectionFactor: ButtonclikrApi.PutBillingsIdRequestCollectionFactor.Days,
        collectionOffset: {
            key: "value",
        },
        collectionIncludeCurrent: ButtonclikrApi.PutBillingsIdRequestCollectionIncludeCurrent.Zero,
        currency: ButtonclikrApi.PutBillingsIdRequestCurrency.Aed,
        inactive: ButtonclikrApi.PutBillingsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutBillingsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Billing ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutBillingsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">deleteBillingsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteBillingsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Billing that is a means to collect and invoice for any funds owed for a particular period of time, such as setting up a billing to collect fees and create a statement on a monthly basis.

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
await client.billing.deleteBillingsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Billing ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteBillingsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">getBillings</a>({ ...params }) -> ButtonclikrApi.GetBillingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Billing is a means to collect and invoice for any funds owed for a particular period of time, such as setting up a billing to collect fees and create a statement on a monthly basis.

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
await client.billing.getBillings({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetBillingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.<a href="/src/api/resources/billing/client/Client.ts">postBillings</a>({ ...params }) -> ButtonclikrApi.PostBillingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Billing that is a means to collect and invoice for any funds owed for a particular period of time, such as statement of fees collected on a monthly basis.

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
await client.billing.postBillings({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    forentity: {
        key: "value",
    },
    org: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    description: {
        key: "value",
    },
    schedule: ButtonclikrApi.PostBillingsRequestSchedule.Days,
    scheduleFactor: {
        key: "value",
    },
    start: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    collectionFactor: ButtonclikrApi.PostBillingsRequestCollectionFactor.Days,
    collectionOffset: {
        key: "value",
    },
    collectionIncludeCurrent: ButtonclikrApi.PostBillingsRequestCollectionIncludeCurrent.Zero,
    currency: ButtonclikrApi.PostBillingsRequestCurrency.Aed,
    inactive: ButtonclikrApi.PostBillingsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostBillingsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostBillingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Billing.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Customers

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getBinsId</a>(id, { ...params }) -> ButtonclikrApi.GetBinsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a BIN, which holds information about the issuer of a card.

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
await client.customers.getBinsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The BIN ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetBinsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">putBinsId</a>(id, { ...params }) -> ButtonclikrApi.PutBinsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Bin.
A Bin resource holds information about the issuer of a card.

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
await client.customers.putBinsId(
    {
        key: "value",
    },
    {
        bin: {
            key: "value",
        },
        method: ButtonclikrApi.PutBinsIdRequestMethod.One,
        type: ButtonclikrApi.PutBinsIdRequestType.Credit,
        category: ButtonclikrApi.PutBinsIdRequestCategory.Classic,
        name: {
            key: "value",
        },
        address: {
            key: "value",
        },
        city: {
            key: "value",
        },
        state: "string",
        country: ButtonclikrApi.PutBinsIdRequestCountry.Abw,
        zip: {
            key: "value",
        },
        locationType: ButtonclikrApi.PutBinsIdRequestLocationType.Branch,
        newBin: {
            key: "value",
        },
        website: {
            key: "value",
        },
        phone: {
            key: "value",
        },
        transferEnabled: ButtonclikrApi.PutBinsIdRequestTransferEnabled.Zero,
        numberLength: {
            key: "value",
        },
        debitOverCreditEnabled: ButtonclikrApi.PutBinsIdRequestDebitOverCreditEnabled.Zero,
        billPayEnabled: ButtonclikrApi.PutBinsIdRequestBillPayEnabled.Zero,
        pinlessSupport: ButtonclikrApi.PutBinsIdRequestPinlessSupport.None,
        inactive: ButtonclikrApi.PutBinsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutBinsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutBinsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">deleteBinsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteBinsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Bin.
A Bin resource holds information about the issuer of a card.

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
await client.customers.deleteBinsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteBinsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getBins</a>({ ...params }) -> ButtonclikrApi.GetBinsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Querying a BIN resource, which holds information about the issuer of a card.

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
await client.customers.getBins({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetBinsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">postBins</a>({ ...params }) -> ButtonclikrApi.PostBinsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Bin.
A Bin resource holds information about the issuer of a card.

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
await client.customers.postBins({
    bin: {
        key: "value",
    },
    method: ButtonclikrApi.PostBinsRequestMethod.One,
    type: ButtonclikrApi.PostBinsRequestType.Credit,
    category: ButtonclikrApi.PostBinsRequestCategory.Classic,
    name: {
        key: "value",
    },
    address: {
        key: "value",
    },
    city: {
        key: "value",
    },
    state: "string",
    country: ButtonclikrApi.PostBinsRequestCountry.Abw,
    zip: {
        key: "value",
    },
    locationType: ButtonclikrApi.PostBinsRequestLocationType.Branch,
    newBin: {
        key: "value",
    },
    website: {
        key: "value",
    },
    phone: {
        key: "value",
    },
    transferEnabled: ButtonclikrApi.PostBinsRequestTransferEnabled.Zero,
    numberLength: {
        key: "value",
    },
    debitOverCreditEnabled: ButtonclikrApi.PostBinsRequestDebitOverCreditEnabled.Zero,
    billPayEnabled: ButtonclikrApi.PostBinsRequestBillPayEnabled.Zero,
    pinlessSupport: ButtonclikrApi.PostBinsRequestPinlessSupport.None,
    inactive: ButtonclikrApi.PostBinsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostBinsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostBinsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getCustomersId</a>(id, { ...params }) -> ButtonclikrApi.GetCustomersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Customer, which is a record that stores data about a particular customer of a Merchant and can be used to associate payment data or with other API features.

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
await client.customers.getCustomersId("id");
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

**id:** `string` — The ID of this customer.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetCustomersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">putCustomersId</a>(id, { ...params }) -> ButtonclikrApi.PutCustomersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Customer. A Customer is a record that is used to store data about a particular customer of a Merchant, which you can use to associate payment data or for use with other API features.

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
await client.customers.putCustomersId("id", {
    login: "login",
    frozen: 1,
    inactive: 1,
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

**id:** `string` — The ID of this customer.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutCustomersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">deleteCustomersId</a>(id, { ...params }) -> ButtonclikrApi.DeleteCustomersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Customer. A Customer is a record that is used to store data about a particular customer of a Merchant. You can use it to associate payment data to the Customer, or for use with other API features.

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
await client.customers.deleteCustomersId("id");
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

**id:** `string` — The ID of this customer.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteCustomersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getCustomers</a>({ ...params }) -> ButtonclikrApi.GetCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Querying a Customer, a record used to store data about a particular customer of a Merchant, that is used to associate payment data to the Customer and for other API features.

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
await client.customers.getCustomers();
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

**request:** `ButtonclikrApi.GetCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">postCustomers</a>({ ...params }) -> ButtonclikrApi.PostCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Customer record to store data about a particular customer of a Merchant, that is used to associate payment data to the Customer and for other API features.

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
await client.customers.postCustomers({
    login: "login",
    frozen: 1,
    inactive: 1,
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

**request:** `ButtonclikrApi.PostCustomersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getPaymentUpdateGroupsId</a>(id, { ...params }) -> ButtonclikrApi.GetPaymentUpdateGroupsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Payment Update Group that has a collection of payment updates owned by the merchant's entity.

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
await client.customers.getPaymentUpdateGroupsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this payment update group.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetPaymentUpdateGroupsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">putPaymentUpdateGroupsId</a>(id, { ...params }) -> ButtonclikrApi.PutPaymentUpdateGroupsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a PaymentUpdateGroup.
A PaymentUpdateGroup has a collection of paymentUpdates owned by the merchant's entity.

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
await client.customers.putPaymentUpdateGroupsId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        payment: {
            method: ButtonclikrApi.PutPaymentUpdateGroupsIdRequestPaymentMethod.One,
            number: {
                key: "value",
            },
        },
        processing: {
            key: "value",
        },
        processed: {
            key: "value",
        },
        numberUpdated: ButtonclikrApi.PutPaymentUpdateGroupsIdRequestNumberUpdated.Zero,
        expirationUpdated: ButtonclikrApi.PutPaymentUpdateGroupsIdRequestExpirationUpdated.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutPaymentUpdateGroupsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">deletePaymentUpdateGroupsId</a>(id, { ...params }) -> ButtonclikrApi.DeletePaymentUpdateGroupsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a PaymentUpdateGroup.
A PaymentUpdateGroup has a collection of paymentUpdates owned by the merchant's entity.

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
await client.customers.deletePaymentUpdateGroupsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeletePaymentUpdateGroupsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getPaymentUpdateGroups</a>({ ...params }) -> ButtonclikrApi.GetPaymentUpdateGroupsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a PaymentUpdateGroup.
A PaymentUpdateGroup has a collection of paymentUpdates owned by the merchant's entity.

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
await client.customers.getPaymentUpdateGroups({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetPaymentUpdateGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">postPaymentUpdateGroups</a>({ ...params }) -> ButtonclikrApi.PostPaymentUpdateGroupsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a PaymentUpdateGroup.
A PaymentUpdateGroup represents a batch of PaymentUpdates requested at one time for an Entity.

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
await client.customers.postPaymentUpdateGroups({
    entity: {
        key: "value",
    },
    payment: {
        method: ButtonclikrApi.PostPaymentUpdateGroupsRequestPaymentMethod.One,
        number: {
            key: "value",
        },
    },
    processing: {
        key: "value",
    },
    processed: {
        key: "value",
    },
    numberUpdated: ButtonclikrApi.PostPaymentUpdateGroupsRequestNumberUpdated.Zero,
    expirationUpdated: ButtonclikrApi.PostPaymentUpdateGroupsRequestExpirationUpdated.Zero,
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

**request:** `ButtonclikrApi.PostPaymentUpdateGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getPaymentUpdatesId</a>(id, { ...params }) -> ButtonclikrApi.GetPaymentUpdatesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

\_CONFLICT Query a Payment Update that holds information about the payment update, related to a payment, subscriptionToken or account, and owned by a paymentUpdateGroup.

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
await client.customers.getPaymentUpdatesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this payment update.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetPaymentUpdatesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">putPaymentUpdatesId</a>(id, { ...params }) -> ButtonclikrApi.PutPaymentUpdatesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a PaymentUpdate.
A PaymentUpdate holds information about the payment update. The paymentUpdate will be related to a payment, subscriptionToken or account, and owned by a paymentUpdateGroup.

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
await client.customers.putPaymentUpdatesId(
    {
        key: "value",
    },
    {
        paymentUpdateGroup: {
            key: "value",
        },
        payment: {
            method: ButtonclikrApi.PutPaymentUpdatesIdRequestPaymentMethod.One,
            number: {
                key: "value",
            },
        },
        status: ButtonclikrApi.PutPaymentUpdatesIdRequestStatus.Pending,
        token: {
            key: "value",
        },
        account: {
            key: "value",
        },
        platform: ButtonclikrApi.PutPaymentUpdatesIdRequestPlatform.Apple,
        ref: {
            key: "value",
        },
        clientRef: {
            key: "value",
        },
        message: {
            key: "value",
        },
        expiration: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutPaymentUpdatesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">deletePaymentUpdatesId</a>(id, { ...params }) -> ButtonclikrApi.DeletePaymentUpdatesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a PaymentUpdate.
A PaymentUpdate holds information about the payment update. The paymentUpdate will be related to a payment, subscriptionToken or account, and owned by a paymentUpdateGroup.

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
await client.customers.deletePaymentUpdatesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeletePaymentUpdatesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getPaymentUpdates</a>({ ...params }) -> ButtonclikrApi.GetPaymentUpdatesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a PaymentUpdate.
A PaymentUpdate holds information about the payment update. The paymentUpdate will be related to a payment, subscriptionToken or account, and owned by a paymentUpdateGroup.

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
await client.customers.getPaymentUpdates({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetPaymentUpdatesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">postPaymentUpdates</a>({ ...params }) -> ButtonclikrApi.PostPaymentUpdatesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a PaymentUpdate.
A PaymentUpdate represents a record of an update request for a payment method used in a Subscription (via SubscriptionToken) or Account.

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
await client.customers.postPaymentUpdates();
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

**request:** `ButtonclikrApi.PostPaymentUpdatesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getTokensId</a>(id, { ...params }) -> ButtonclikrApi.GetTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Token, which is a resource that acts as a storage place for credit card and customer information, allowing you to run Transactions.

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
await client.customers.getTokensId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this token.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">putTokensId</a>(id, { ...params }) -> ButtonclikrApi.PutTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Token. A Token is a resource that acts as a storage place for credit card and customer information, allowing you to run Transactions.

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
await client.customers.putTokensId(
    {
        key: "value",
    },
    {
        status: ButtonclikrApi.PutTokensIdRequestStatus.Pending,
        payment: {
            method: "string",
            number: {
                key: "value",
            },
            routing: {
                key: "value",
            },
            expiration: {
                key: "value",
            },
            cvv: {
                key: "value",
            },
            track: {
                key: "value",
            },
        },
        token: {
            key: "value",
        },
        expiration: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        custom: {
            key: "value",
        },
        authTokenCustomer: {
            key: "value",
        },
        internalToken: {
            key: "value",
        },
        type: ButtonclikrApi.PutTokensIdRequestType.Omnitoken,
        inactive: ButtonclikrApi.PutTokensIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutTokensIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this token.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">deleteTokensId</a>(id, { ...params }) -> ButtonclikrApi.DeleteTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Token, which is a resource that acts as a storage place for credit card and customer information, allowing you to run Transactions.

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
await client.customers.deleteTokensId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this token.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">getTokens</a>({ ...params }) -> ButtonclikrApi.GetTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Token. A Token is a resource that acts as a storage place for credit card and customer information. You can use a Token to run Transactions.

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
await client.customers.getTokens({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">postTokens</a>({ ...params }) -> ButtonclikrApi.PostTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Token. A Token is a resource that acts as a storage place for credit card and customer information. You can use a Token to run Transactions.

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
await client.customers.postTokens({
    customer: {
        key: "value",
    },
    status: ButtonclikrApi.PostTokensRequestStatus.Pending,
    payment: {
        method: "string",
        number: {
            key: "value",
        },
        routing: {
            key: "value",
        },
        expiration: {
            key: "value",
        },
        cvv: {
            key: "value",
        },
        track: {
            key: "value",
        },
    },
    expiration: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    custom: {
        key: "value",
    },
    authTokenCustomer: {
        key: "value",
    },
    internalToken: {
        key: "value",
    },
    type: ButtonclikrApi.PostTokensRequestType.Omnitoken,
    inactive: ButtonclikrApi.PostTokensRequestInactive.Zero,
    frozen: ButtonclikrApi.PostTokensRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Chargebacks

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebackDocumentsId</a>(id, { ...params }) -> ButtonclikrApi.GetChargebackDocumentsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a chargebackDocument, A chargebackDocument resource represents a file related to the Chargeback.

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
await client.chargebacks.getChargebackDocumentsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this chargeback document.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetChargebackDocumentsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">putChargebackDocumentsId</a>(id, { ...params }) -> ButtonclikrApi.PutChargebackDocumentsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a chargebackDocument, A chargebackDocument resource represents a file related to the Chargeback.

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
await client.chargebacks.putChargebackDocumentsId(
    {
        key: "value",
    },
    {
        type: ButtonclikrApi.PutChargebackDocumentsIdRequestType.Jpg,
        ref: {
            key: "value",
        },
        description: {
            key: "value",
        },
        status: ButtonclikrApi.PutChargebackDocumentsIdRequestStatus.Created,
        name: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutChargebackDocumentsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutChargebackDocumentsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this chargeback document.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutChargebackDocumentsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">deleteChargebackDocumentsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteChargebackDocumentsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a chargebackDocument, A chargebackDocument resource represents a file related to the Chargeback.

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
await client.chargebacks.deleteChargebackDocumentsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this chargeback document.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteChargebackDocumentsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebackDocuments</a>({ ...params }) -> ButtonclikrApi.GetChargebackDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a chargebackDocument, which represents a file related to the Chargeback.

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
await client.chargebacks.getChargebackDocuments({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetChargebackDocumentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">postChargebackDocuments</a>({ ...params }) -> ButtonclikrApi.PostChargebackDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a chargebackDocument resource that represents a file related to the Chargeback.

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
await client.chargebacks.postChargebackDocuments({
    chargeback: {
        key: "value",
    },
    type: ButtonclikrApi.PostChargebackDocumentsRequestType.Jpg,
    ref: {
        key: "value",
    },
    description: {
        key: "value",
    },
    status: ButtonclikrApi.PostChargebackDocumentsRequestStatus.Created,
    name: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostChargebackDocumentsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostChargebackDocumentsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostChargebackDocumentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebackMessageResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetChargebackMessageResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a chargebackMessageResults resource, which represents a message that is received from the processor in relation to a Chargeback message.

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
await client.chargebacks.getChargebackMessageResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The Chargeback Message Result ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetChargebackMessageResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebackMessageResults</a>({ ...params }) -> ButtonclikrApi.GetChargebackMessageResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a chargebackMessageResults resource, which represents a message that is received from the processor in relation to a Chargeback message.

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
await client.chargebacks.getChargebackMessageResults({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetChargebackMessageResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebackMessagesId</a>(id, { ...params }) -> ButtonclikrApi.GetChargebackMessagesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a chargebackMessage. A chargebackMessage resource represents a message that is sent by a Merchant, processor, or bank in relation to a Chargeback.

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
await client.chargebacks.getChargebackMessagesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this chargeback message.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetChargebackMessagesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebackMessages</a>({ ...params }) -> ButtonclikrApi.GetChargebackMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a chargebackMessage resource, which represents a message that is sent by a Merchant, processor, or bank in relation to a Chargeback.

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
await client.chargebacks.getChargebackMessages({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetChargebackMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">postChargebackMessages</a>({ ...params }) -> ButtonclikrApi.PostChargebackMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a chargebackMessage. A chargebackMessage resource represents a message that is sent by a Merchant, processor, or bank in relation to a Chargeback.

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
await client.chargebacks.postChargebackMessages({
    chargeback: {
        key: "value",
    },
    date: {
        key: "value",
    },
    type: ButtonclikrApi.PostChargebackMessagesRequestType.Assign,
    fromQueue: {
        key: "value",
    },
    toQueue: {
        key: "value",
    },
    contact: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    currency: ButtonclikrApi.PostChargebackMessagesRequestCurrency.Aed,
    note: {
        key: "value",
    },
    status: ButtonclikrApi.PostChargebackMessagesRequestStatus.Requested,
    imported: ButtonclikrApi.PostChargebackMessagesRequestImported.Zero,
    inactive: ButtonclikrApi.PostChargebackMessagesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostChargebackMessagesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostChargebackMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebacksId</a>(id, { ...params }) -> ButtonclikrApi.GetChargebacksIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Chargeback: A Chargeback is the reversal of a Transaction and means that the funds have been returned to their source; The resource for each Chargeback gives details of the Chargeback, including the reason why it occurred and the date when it occurred.

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
await client.chargebacks.getChargebacksId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Chargeback ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetChargebacksIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">putChargebacksId</a>(id, { ...params }) -> ButtonclikrApi.PutChargebacksIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on chargebacks coming soon

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
await client.chargebacks.putChargebacksId(
    {
        key: "value",
    },
    {
        txn: {
            key: "value",
        },
        merchant: {
            key: "value",
        },
        mid: {
            key: "value",
        },
        total: {
            key: "value",
        },
        representedTotal: {
            key: "value",
        },
        description: {
            key: "value",
        },
        currency: ButtonclikrApi.PutChargebacksIdRequestCurrency.Aed,
        platform: ButtonclikrApi.PutChargebacksIdRequestPlatform.Apple,
        paymentMethod: ButtonclikrApi.PutChargebacksIdRequestPaymentMethod.Zero,
        ref: {
            key: "value",
        },
        cycle: ButtonclikrApi.PutChargebacksIdRequestCycle.Retrieval,
        reason: {
            key: "value",
        },
        reasonCode: {
            key: "value",
        },
        issued: {
            key: "value",
        },
        received: {
            key: "value",
        },
        reply: {
            key: "value",
        },
        bankRef: {
            key: "value",
        },
        chargebackRef: {
            key: "value",
        },
        status: ButtonclikrApi.PutChargebacksIdRequestStatus.Open,
        lastStatusChange: {
            key: "value",
        },
        actionable: ButtonclikrApi.PutChargebacksIdRequestActionable.Zero,
        shadow: ButtonclikrApi.PutChargebacksIdRequestShadow.Zero,
        inactive: ButtonclikrApi.PutChargebacksIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutChargebacksIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutChargebacksIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebacks</a>({ ...params }) -> ButtonclikrApi.GetChargebacksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Chargeback. A Chargeback is the reversal of a Transaction, meaning that the funds have been returned to their source, with the resource for each Chargeback giving details of the Chargeback, including the reason why it occurred and the date when it occurred.

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
await client.chargebacks.getChargebacks({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetChargebacksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">postChargebacks</a>({ ...params }) -> ButtonclikrApi.PostChargebacksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on chargebacks coming soon

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
await client.chargebacks.postChargebacks({
    txn: {
        key: "value",
    },
    merchant: {
        key: "value",
    },
    mid: {
        key: "value",
    },
    total: {
        key: "value",
    },
    representedTotal: {
        key: "value",
    },
    description: {
        key: "value",
    },
    currency: ButtonclikrApi.PostChargebacksRequestCurrency.Aed,
    platform: ButtonclikrApi.PostChargebacksRequestPlatform.Apple,
    paymentMethod: ButtonclikrApi.PostChargebacksRequestPaymentMethod.Zero,
    ref: {
        key: "value",
    },
    cycle: ButtonclikrApi.PostChargebacksRequestCycle.Retrieval,
    reason: {
        key: "value",
    },
    reasonCode: {
        key: "value",
    },
    issued: {
        key: "value",
    },
    received: {
        key: "value",
    },
    reply: {
        key: "value",
    },
    bankRef: {
        key: "value",
    },
    chargebackRef: {
        key: "value",
    },
    status: ButtonclikrApi.PostChargebacksRequestStatus.Open,
    lastStatusChange: {
        key: "value",
    },
    actionable: ButtonclikrApi.PostChargebacksRequestActionable.Zero,
    shadow: ButtonclikrApi.PostChargebacksRequestShadow.Zero,
    inactive: ButtonclikrApi.PostChargebacksRequestInactive.Zero,
    frozen: ButtonclikrApi.PostChargebacksRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostChargebacksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebackStatusesId</a>(id, { ...params }) -> ButtonclikrApi.GetChargebackStatusesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query ChargebackStatuses. A ChargebackStatuses is the logged status changes of a Chargeback, The resource for each Chargeback gives details of the Chargeback, including the reason why it occurred and the date when it occurred.

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
await client.chargebacks.getChargebackStatusesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The Chargeback Status ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetChargebackStatusesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">getChargebackStatuses</a>({ ...params }) -> ButtonclikrApi.GetChargebackStatusesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query ChargebackStatuses. A ChargebackStatuses is the logged status changes of a Chargeback; The resource for each Chargeback gives details of the Chargeback, including the reason why it occurred and the date when it occurred.

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
await client.chargebacks.getChargebackStatuses({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetChargebackStatusesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargebacks.<a href="/src/api/resources/chargebacks/client/Client.ts">postChargebackStatuses</a>({ ...params }) -> ButtonclikrApi.PostChargebackStatusesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on chargebackStatuses coming soon

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
await client.chargebacks.postChargebackStatuses({
    chargeback: {
        key: "value",
    },
    chargebackMessage: {
        key: "value",
    },
    status: ButtonclikrApi.PostChargebackStatusesRequestStatus.Open,
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

**request:** `ButtonclikrApi.PostChargebackStatusesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chargebacks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Configurations

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">getConfigurationsId</a>(id, { ...params }) -> ButtonclikrApi.GetConfigurationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Configuration resource.
A Configuration resource will hold relevant information about an integration configuration.

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
await client.configurations.getConfigurationsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetConfigurationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">putConfigurationsId</a>(id, { ...params }) -> ButtonclikrApi.PutConfigurationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Configuration resource.
A Configuration resource will hold relevant information about an integration configuration.

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
await client.configurations.putConfigurationsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        division: {
            key: "value",
        },
        org: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        integration: ButtonclikrApi.PutConfigurationsIdRequestIntegration.Ach,
        name: ButtonclikrApi.PutConfigurationsIdRequestName.Account,
        type: ButtonclikrApi.PutConfigurationsIdRequestType.Create,
        options: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutConfigurationsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutConfigurationsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutConfigurationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">deleteConfigurationsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteConfigurationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Configuration resource.
A Configuration resource will hold relevant information about an integration configuration.

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
await client.configurations.deleteConfigurationsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteConfigurationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">getConfigurations</a>({ ...params }) -> ButtonclikrApi.GetConfigurationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Configuration resource.
A Configuration resource will hold relevant information about an integration configuration.

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
await client.configurations.getConfigurations({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetConfigurationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">postConfigurations</a>({ ...params }) -> ButtonclikrApi.PostConfigurationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Configuration resource.
A Configuration resource will hold relevant information about an integration configuration.

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
await client.configurations.postConfigurations({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    division: {
        key: "value",
    },
    org: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    integration: ButtonclikrApi.PostConfigurationsRequestIntegration.Ach,
    name: ButtonclikrApi.PostConfigurationsRequestName.Account,
    type: ButtonclikrApi.PostConfigurationsRequestType.Create,
    options: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostConfigurationsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostConfigurationsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostConfigurationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">getConfigurationStagesId</a>(id, { ...params }) -> ButtonclikrApi.GetConfigurationStagesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a ConfigurationStage resource.
A ConfigurationStage resource will hold relevant information about a certain stage of integration configuration.

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
await client.configurations.getConfigurationStagesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetConfigurationStagesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">putConfigurationStagesId</a>(id, { ...params }) -> ButtonclikrApi.PutConfigurationStagesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a ConfigurationStage resource.
A ConfigurationStage resource will hold relevant information about a certain stage of integration configuration.

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
await client.configurations.putConfigurationStagesId(
    {
        key: "value",
    },
    {
        configuration: {
            key: "value",
        },
        name: ButtonclikrApi.PutConfigurationStagesIdRequestName.Blank,
        method: ButtonclikrApi.PutConfigurationStagesIdRequestMethod.SftpUpload,
        sequence: {
            key: "value",
        },
        input: ButtonclikrApi.PutConfigurationStagesIdRequestInput.ApplePaymentsessionRequestJson,
        output: ButtonclikrApi.PutConfigurationStagesIdRequestOutput.ApplePaymentsessionRequestJson,
        credential: ButtonclikrApi.PutConfigurationStagesIdRequestCredential.Transaction,
        url: {
            key: "value",
        },
        dir: {
            key: "value",
        },
        restId: {
            key: "value",
        },
        mapToData: {
            key: "value",
        },
        file: {
            key: "value",
        },
        filter: {
            key: "value",
        },
        extension: ButtonclikrApi.PutConfigurationStagesIdRequestExtension.Jpg,
        namespace: {
            key: "value",
        },
        dynamicStage: {
            key: "value",
        },
        curlOptions: {
            key: "value",
        },
        headers: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutConfigurationStagesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutConfigurationStagesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutConfigurationStagesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">deleteConfigurationStagesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteConfigurationStagesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a ConfigurationStage resource.
A ConfigurationStage resource will hold relevant information about a certain stage of integration configuration.

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
await client.configurations.deleteConfigurationStagesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteConfigurationStagesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">getConfigurationStages</a>({ ...params }) -> ButtonclikrApi.GetConfigurationStagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a ConfigurationStage resource.
A ConfigurationStage resource will hold relevant information about a certain stage of integration configuration.

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
await client.configurations.getConfigurationStages({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetConfigurationStagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.configurations.<a href="/src/api/resources/configurations/client/Client.ts">postConfigurationStages</a>({ ...params }) -> ButtonclikrApi.PostConfigurationStagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a ConfigurationStage resource.
A ConfigurationStage resource will hold relevant information about a certain stage of integration configuration.

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
await client.configurations.postConfigurationStages({
    configuration: {
        key: "value",
    },
    name: ButtonclikrApi.PostConfigurationStagesRequestName.Blank,
    method: ButtonclikrApi.PostConfigurationStagesRequestMethod.SftpUpload,
    sequence: {
        key: "value",
    },
    input: ButtonclikrApi.PostConfigurationStagesRequestInput.ApplePaymentsessionRequestJson,
    output: ButtonclikrApi.PostConfigurationStagesRequestOutput.ApplePaymentsessionRequestJson,
    credential: ButtonclikrApi.PostConfigurationStagesRequestCredential.Transaction,
    url: {
        key: "value",
    },
    dir: {
        key: "value",
    },
    restId: {
        key: "value",
    },
    mapToData: {
        key: "value",
    },
    file: {
        key: "value",
    },
    filter: {
        key: "value",
    },
    extension: ButtonclikrApi.PostConfigurationStagesRequestExtension.Jpg,
    namespace: {
        key: "value",
    },
    dynamicStage: {
        key: "value",
    },
    curlOptions: {
        key: "value",
    },
    headers: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostConfigurationStagesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostConfigurationStagesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostConfigurationStagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configurations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Confirmation Codes

<details><summary><code>client.confirmationCodes.<a href="/src/api/resources/confirmationCodes/client/Client.ts">getConfirmCodesId</a>(id, { ...params }) -> ButtonclikrApi.GetConfirmCodesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a confirmCode resource, which represents a unique confirmation code issued to an email address, either when a user indicates that they have forgotten their password, or when the system needs to verify the email address associated with a login.

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
await client.confirmationCodes.getConfirmCodesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Confirmation Code ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetConfirmCodesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConfirmationCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.confirmationCodes.<a href="/src/api/resources/confirmationCodes/client/Client.ts">deleteConfirmCodesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteConfirmCodesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a confirmCode resource. A confirmCode resource represents a unique confirmation code issued to an email address, either when a user indicates that they have forgotten their password, or when the system needs to verify the email address associated with a login.

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
await client.confirmationCodes.deleteConfirmCodesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Confirmation Code ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteConfirmCodesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConfirmationCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.confirmationCodes.<a href="/src/api/resources/confirmationCodes/client/Client.ts">getConfirmCodes</a>({ ...params }) -> ButtonclikrApi.GetConfirmCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a confirmCode resource. A confirmCode resource represents a unique confirmation code issued to an email address, either when a user indicates that they have forgotten their password, or when the system needs to verify the email address associated with a login.

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
await client.confirmationCodes.getConfirmCodes({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetConfirmCodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConfirmationCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.confirmationCodes.<a href="/src/api/resources/confirmationCodes/client/Client.ts">postConfirmCodes</a>({ ...params }) -> ButtonclikrApi.PostConfirmCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a confirmCode resource that represents a unique confirmation code issued to an email address, either when a user indicates that they have forgotten their password, or when the system needs to verify the email address associated with a login.

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
await client.confirmationCodes.postConfirmCodes({
    login: {
        key: "value",
    },
    type: ButtonclikrApi.PostConfirmCodesRequestType.Password,
    key: {
        key: "value",
    },
    email: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostConfirmCodesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostConfirmCodesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostConfirmCodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConfirmationCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Contacts

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">getContactsId</a>(id, { ...params }) -> ButtonclikrApi.GetContactsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Contact, which represents an individual who is associated with an Entity.

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
await client.contacts.getContactsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this contact.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetContactsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">putContactsId</a>(id, { ...params }) -> ButtonclikrApi.PutContactsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Contact, A Contact resource represents an individual who is associated with an Entity.

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
await client.contacts.putContactsId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        first: {
            key: "value",
        },
        middle: {
            key: "value",
        },
        last: {
            key: "value",
        },
        description: {
            key: "value",
        },
        email: {
            key: "value",
        },
        address1: {
            key: "value",
        },
        address2: {
            key: "value",
        },
        city: {
            key: "value",
        },
        state: ButtonclikrApi.PutContactsIdRequestState.Ab,
        zip: {
            key: "value",
        },
        country: ButtonclikrApi.PutContactsIdRequestCountry.Abw,
        phone: {
            key: "value",
        },
        fax: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutContactsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutContactsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this contact.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutContactsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">deleteContactsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteContactsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Contact. A Contact resource represents an individual who is associated with an Entity.

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
await client.contacts.deleteContactsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this contact.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteContactsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">getContacts</a>({ ...params }) -> ButtonclikrApi.GetContactsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Contact, which represents an individual who is associated with an Entity.

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
await client.contacts.getContacts({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetContactsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">postContacts</a>({ ...params }) -> ButtonclikrApi.PostContactsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Contact.
A Contact resource represents an individual who is associated with an Entity.

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
await client.contacts.postContacts({
    entity: {
        key: "value",
    },
    first: {
        key: "value",
    },
    middle: {
        key: "value",
    },
    last: {
        key: "value",
    },
    description: {
        key: "value",
    },
    email: {
        key: "value",
    },
    address1: {
        key: "value",
    },
    address2: {
        key: "value",
    },
    city: {
        key: "value",
    },
    state: "string",
    zip: {
        key: "value",
    },
    country: ButtonclikrApi.PostContactsRequestCountry.Abw,
    phone: {
        key: "value",
    },
    fax: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostContactsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostContactsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostContactsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Credentials

<details><summary><code>client.credentials.<a href="/src/api/resources/credentials/client/Client.ts">getCredentialsId</a>(id, { ...params }) -> ButtonclikrApi.GetCredentialsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Credential resource that represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as send Transactions to the processor, or board a Merchant with the processor.

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
await client.credentials.getCredentialsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Credential ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetCredentialsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Credentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.credentials.<a href="/src/api/resources/credentials/client/Client.ts">putCredentialsId</a>(id, { ...params }) -> ButtonclikrApi.PutCredentialsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Credential resource represents an authorization that a given Entity has to connect to an integration to perform a particular action.

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
await client.credentials.putCredentialsId(
    {
        key: "value",
    },
    {
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        username: {
            key: "value",
        },
        password: {
            key: "value",
        },
        connectUsername: {
            key: "value",
        },
        connectPassword: {
            key: "value",
        },
        secret: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutCredentialsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutCredentialsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Credential ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutCredentialsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Credentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.credentials.<a href="/src/api/resources/credentials/client/Client.ts">deleteCredentialsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteCredentialsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Credential resource. A Credential resource represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as delete a Credential resource.

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
await client.credentials.deleteCredentialsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Credential ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteCredentialsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Credentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.credentials.<a href="/src/api/resources/credentials/client/Client.ts">getCredentials</a>({ ...params }) -> ButtonclikrApi.GetCredentialsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Credential resource. A Credential resource represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as send Transactions to the processor, or board a Merchant with the processor

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
await client.credentials.getCredentials({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetCredentialsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Credentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.credentials.<a href="/src/api/resources/credentials/client/Client.ts">postCredentials</a>({ ...params }) -> ButtonclikrApi.PostCredentialsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Credential resource that represents an authorization that a given Entity has to connect to an integration to perform a particular action, such as send Transactions to the processor, or board a Merchant with the processor.

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
await client.credentials.postCredentials({
    entity: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    username: {
        key: "value",
    },
    password: {
        key: "value",
    },
    connectUsername: {
        key: "value",
    },
    connectPassword: {
        key: "value",
    },
    integration: ButtonclikrApi.PostCredentialsRequestIntegration.Apple,
    type: ButtonclikrApi.PostCredentialsRequestType.Transaction,
    secret: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostCredentialsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostCredentialsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostCredentialsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Credentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CurrencyRates

<details><summary><code>client.currencyRates.<a href="/src/api/resources/currencyRates/client/Client.ts">getCurrencyRatesId</a>(id, { ...params }) -> ButtonclikrApi.GetCurrencyRatesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Currency Rate.
A Currency Rate is a record that is used to store data about a particular currency rate of an entity, division, org, or partition. You can use it to associate rate to be used base on entity's default currency, or for use with other API features.

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
await client.currencyRates.getCurrencyRatesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetCurrencyRatesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CurrencyRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyRates.<a href="/src/api/resources/currencyRates/client/Client.ts">putCurrencyRatesId</a>(id, { ...params }) -> ButtonclikrApi.PutCurrencyRatesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Currency Rate.
A Currency Rate is a record that is used to store data about a particular currency rate of an entity, division, org, or partition. You can use it to associate rate to be used base on entity's default currency, or for use with other API features.

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
await client.currencyRates.putCurrencyRatesId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        division: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        org: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        fromCurrency: ButtonclikrApi.PutCurrencyRatesIdRequestFromCurrency.Aed,
        toCurrency: ButtonclikrApi.PutCurrencyRatesIdRequestToCurrency.Aed,
        rate: {
            key: "value",
        },
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutCurrencyRatesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutCurrencyRatesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutCurrencyRatesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CurrencyRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyRates.<a href="/src/api/resources/currencyRates/client/Client.ts">deleteCurrencyRatesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteCurrencyRatesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Currency Rate.
A Currency Rate is a record that is used to store data about a particular currency rate of an entity, division, org, or partition. You can use it to associate rate to be used base on entity's default currency, or for use with other API features.

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
await client.currencyRates.deleteCurrencyRatesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteCurrencyRatesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CurrencyRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyRates.<a href="/src/api/resources/currencyRates/client/Client.ts">getCurrencyRates</a>({ ...params }) -> ButtonclikrApi.GetCurrencyRatesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Currency Rate.
A Currency Rate is a record that is used to store data about a particular currency rate of an entity, division, org, or partition. You can use it to associate rate to be used base on entity's default currency, or for use with other API features.

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
await client.currencyRates.getCurrencyRates({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetCurrencyRatesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CurrencyRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.currencyRates.<a href="/src/api/resources/currencyRates/client/Client.ts">postCurrencyRates</a>({ ...params }) -> ButtonclikrApi.PostCurrencyRatesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Currency Rate.
A Currency Rate is a record that is used to store data about a particular currency rate of an entity, division, org, or partition. You can use it to associate rate to be used base on entity's default currency, or for use with other API features.

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
await client.currencyRates.postCurrencyRates({
    login: {
        key: "value",
    },
    division: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    org: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    fromCurrency: ButtonclikrApi.PostCurrencyRatesRequestFromCurrency.Aed,
    toCurrency: ButtonclikrApi.PostCurrencyRatesRequestToCurrency.Aed,
    rate: {
        key: "value",
    },
    start: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostCurrencyRatesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostCurrencyRatesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostCurrencyRatesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CurrencyRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity Liabilities

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getDebtorEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.GetDebtorEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on debtorEntities coming soon

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
await client.entityLiabilities.getDebtorEntitiesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDebtorEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">putDebtorEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.PutDebtorEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on debtorEntities coming soon

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
await client.entityLiabilities.putDebtorEntitiesId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        date: {
            key: "value",
        },
        deleted: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutDebtorEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">deleteDebtorEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteDebtorEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for delete on debtorEntities coming soon

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
await client.entityLiabilities.deleteDebtorEntitiesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteDebtorEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getDebtorEntities</a>({ ...params }) -> ButtonclikrApi.GetDebtorEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on debtorEntities coming soon

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
await client.entityLiabilities.getDebtorEntities({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetDebtorEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">postDebtorEntities</a>({ ...params }) -> ButtonclikrApi.PostDebtorEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on debtorEntities coming soon

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
await client.entityLiabilities.postDebtorEntities({
    entity: {
        key: "value",
    },
    date: {
        key: "value",
    },
    deleted: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostDebtorEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getEntityDebtsId</a>(id, { ...params }) -> ButtonclikrApi.GetEntityDebtsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityDebt resource.

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
await client.entityLiabilities.getEntityDebtsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this entity debt.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntityDebtsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getEntityDebts</a>({ ...params }) -> ButtonclikrApi.GetEntityDebtsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityDebt resource, which represents a record of a debt between entities or an entity and the System.

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
await client.entityLiabilities.getEntityDebts({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntityDebtsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getEntityReservesId</a>(id, { ...params }) -> ButtonclikrApi.GetEntityReservesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityReserves resource that represents funds held by an Entity in reserve, separately from amounts in any entityFunds.

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
await client.entityLiabilities.getEntityReservesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this entity reserve.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntityReservesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">putEntityReservesId</a>(id, { ...params }) -> ButtonclikrApi.PutEntityReservesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an EntityReserves resource, which represents funds held by an Entity in reserve, separately from amounts in any entityFunds.

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
await client.entityLiabilities.putEntityReservesId(
    {
        key: "value",
    },
    {
        total: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this entity reserve.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutEntityReservesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getEntityReserves</a>({ ...params }) -> ButtonclikrApi.GetEntityReservesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityReserves resource that represents funds held by an Entity in reserve, separately from amounts in any entityFunds.

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
await client.entityLiabilities.getEntityReserves({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntityReservesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">postEntityReserves</a>({ ...params }) -> ButtonclikrApi.PostEntityReservesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an EntityReserves resource that represents funds held by an Entity in reserve, separately from amounts in any entityFunds.

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
await client.entityLiabilities.postEntityReserves({
    login: {
        key: "value",
    },
    fund: {
        key: "value",
    },
    total: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostEntityReservesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getEntityReturnsId</a>(id, { ...params }) -> ButtonclikrApi.GetEntityReturnsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityReturn represents an ACH transaction or disbursement that has been rejected, which will block ACH creations or send out related to its entity and payment.

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
await client.entityLiabilities.getEntityReturnsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this entity return.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntityReturnsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">putEntityReturnsId</a>(id, { ...params }) -> ButtonclikrApi.PutEntityReturnsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an EntityReturn.
An EntityReturn represents an ACH transaction or disbursement that has been rejected.
The EntityReturn will block ACH creations or send out related to its entity and payment.

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
await client.entityLiabilities.putEntityReturnsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutEntityReturnsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutEntityReturnsIdRequestFrozen.Zero,
        payment: {
            method: ButtonclikrApi.PutEntityReturnsIdRequestPaymentMethod.Eight,
            number: {
                key: "value",
            },
            routing: {
                key: "value",
            },
            expiration: {
                key: "value",
            },
        },
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutEntityReturnsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">deleteEntityReturnsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteEntityReturnsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an EntityReturn.
An EntityReturn represents an ACH transaction or disbursement that has been rejected.
The EntityReturn will block ACH creations or send out related to its entity and payment.

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
await client.entityLiabilities.deleteEntityReturnsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteEntityReturnsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getEntityReturns</a>({ ...params }) -> ButtonclikrApi.GetEntityReturnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityReturn represents an ACH transaction or disbursement that has been rejected. The EntityReturn will block ACH creations or send out related to its entity and payment.

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
await client.entityLiabilities.getEntityReturns({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntityReturnsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">postEntityReturns</a>({ ...params }) -> ButtonclikrApi.PostEntityReturnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an EntityReturn.
An EntityReturn represents an ACH transaction or disbursement that has been rejected.
The EntityReturn will block ACH creations or send out related to its entity and payment.

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
await client.entityLiabilities.postEntityReturns({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    payment: {
        method: ButtonclikrApi.PostEntityReturnsRequestPaymentMethod.Eight,
        number: {
            key: "value",
        },
        routing: {
            key: "value",
        },
        expiration: {
            key: "value",
        },
    },
    txn: {
        key: "value",
    },
    disbursement: {
        key: "value",
    },
    actionCode: ButtonclikrApi.PostEntityReturnsRequestActionCode.Unknown,
    code: ButtonclikrApi.PostEntityReturnsRequestCode.R01,
    message: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostEntityReturnsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostEntityReturnsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostEntityReturnsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getProfitShareResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetProfitShareResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a ProfitShareResult or Profit Share Result.

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
await client.entityLiabilities.getProfitShareResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, The Profit Share Result ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetProfitShareResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getProfitShareResults</a>({ ...params }) -> ButtonclikrApi.GetProfitShareResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a ProfitShareResult or Profit Share Result resource, which holds a message regarding a failed ProfitShare process.

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
await client.entityLiabilities.getProfitShareResults({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetProfitShareResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getProfitShareRulesId</a>(id, { ...params }) -> ButtonclikrApi.GetProfitShareRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a ProfitShare Rule, which is a piece of conditional logic that makes a ProfitShare apply only in certain circumstances.

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
await client.entityLiabilities.getProfitShareRulesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Profit Share Rule ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetProfitShareRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">putProfitShareRulesId</a>(id, { ...params }) -> ButtonclikrApi.PutProfitShareRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a ProfitShare Rule, which is a piece of conditional logic that makes a ProfitShare apply only in certain circumstances.

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
await client.entityLiabilities.putProfitShareRulesId(
    {
        key: "value",
    },
    {
        profitShare: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        type: ButtonclikrApi.PutProfitShareRulesIdRequestType.Less,
        value: "string",
        grouping: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutProfitShareRulesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutProfitShareRulesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Profit Share Rule ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutProfitShareRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">deleteProfitShareRulesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteProfitShareRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a ProfitShare Rule, which is a piece of conditional logic that makes a ProfitShare apply only in certain circumstances.

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
await client.entityLiabilities.deleteProfitShareRulesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Profit Share Rule ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteProfitShareRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getProfitShareRules</a>({ ...params }) -> ButtonclikrApi.GetProfitShareRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a ProfitShare Rule.
A ProfitShare Rule is a piece of conditional logic that makes a ProfitShare apply only in certain circumstances.

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
await client.entityLiabilities.getProfitShareRules({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetProfitShareRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">postProfitShareRules</a>({ ...params }) -> ButtonclikrApi.PostProfitShareRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a ProfitShare Rule.
A ProfitShare Rule is a piece of conditional logic that makes a ProfitShare apply only in certain circumstances.

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
await client.entityLiabilities.postProfitShareRules({
    profitShare: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    type: ButtonclikrApi.PostProfitShareRulesRequestType.Less,
    value: "string",
    grouping: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostProfitShareRulesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostProfitShareRulesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostProfitShareRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getProfitSharesId</a>(id, { ...params }) -> ButtonclikrApi.GetProfitSharesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a ProfitShare resource, which will cause an entity to have its earnings/expenses shared with another entity.

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
await client.entityLiabilities.getProfitSharesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, The Profit Share ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetProfitSharesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">putProfitSharesId</a>(id, { ...params }) -> ButtonclikrApi.PutProfitSharesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a ProfitShare resource, which causes an entity's earnings/expenses to be shared with another entity.

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
await client.entityLiabilities.putProfitSharesId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        forentity: {
            key: "value",
        },
        org: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        type: ButtonclikrApi.PutProfitSharesIdRequestType.Income,
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        amount: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutProfitSharesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutProfitSharesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource, The Profit Share ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutProfitSharesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">deleteProfitSharesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteProfitSharesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a ProfitShare resource, which causes an entity's earnings/expenses to be shared with another entity.

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
await client.entityLiabilities.deleteProfitSharesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, The Profit Share ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteProfitSharesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">getProfitShares</a>({ ...params }) -> ButtonclikrApi.GetProfitSharesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a ProfitShare resource.
A ProfitShare resource will cause an entity to have it's earnings/expenses shared with another entity.

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
await client.entityLiabilities.getProfitShares({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetProfitSharesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityLiabilities.<a href="/src/api/resources/entityLiabilities/client/Client.ts">postProfitShares</a>({ ...params }) -> ButtonclikrApi.PostProfitSharesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

reate a ProfitShare resource.
A ProfitShare resource will cause an entity to have it's earnings/expenses shared with another entity.

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
await client.entityLiabilities.postProfitShares({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    forentity: {
        key: "value",
    },
    org: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    type: ButtonclikrApi.PostProfitSharesRequestType.Income,
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostProfitSharesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostProfitSharesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostProfitSharesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityLiabilities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Decision Actions

<details><summary><code>client.decisionActions.<a href="/src/api/resources/decisionActions/client/Client.ts">getDecisionActionsId</a>(id, { ...params }) -> ButtonclikrApi.GetDecisionActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Decision Action, which is a piece of conditional logic that makes a VerificationResult change the application and the decision action in certain circumstances.

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
await client.decisionActions.getDecisionActionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Decision Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDecisionActionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisionActions.<a href="/src/api/resources/decisionActions/client/Client.ts">putDecisionActionsId</a>(id, { ...params }) -> ButtonclikrApi.PutDecisionActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Decision Action, which is a piece of conditional logic that makes a VerificationResult change the application and the decision action in certain circumstances.

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
await client.decisionActions.putDecisionActionsId(
    {
        key: "value",
    },
    {
        decision: {
            key: "value",
        },
        action: ButtonclikrApi.PutDecisionActionsIdRequestAction.One,
        application: ButtonclikrApi.PutDecisionActionsIdRequestApplication.Account,
        scoreType: ButtonclikrApi.PutDecisionActionsIdRequestScoreType.Low,
        type: ButtonclikrApi.PutDecisionActionsIdRequestType.Equal,
        field: {
            key: "value",
        },
        data: {
            key: "value",
        },
        message: {
            key: "value",
        },
        code: {
            key: "value",
        },
        score: {
            key: "value",
        },
        grouping: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutDecisionActionsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutDecisionActionsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Decision Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutDecisionActionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisionActions.<a href="/src/api/resources/decisionActions/client/Client.ts">deleteDecisionActionsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteDecisionActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Decision Action. A Decision Action is a piece of conditional logic that makes a VerificationResult change the application and the decision action in certain circumstances.

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
await client.decisionActions.deleteDecisionActionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Decision Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteDecisionActionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisionActions.<a href="/src/api/resources/decisionActions/client/Client.ts">getDecisionActions</a>({ ...params }) -> ButtonclikrApi.GetDecisionActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Decision Action, A Decision Action is a piece of conditional logic that makes a VerificationResult change the application and the decision action in certain circumstances.

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
await client.decisionActions.getDecisionActions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetDecisionActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisionActions.<a href="/src/api/resources/decisionActions/client/Client.ts">postDecisionActions</a>({ ...params }) -> ButtonclikrApi.PostDecisionActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Decision Action in conjunction with This resource, which is used to further tune the reactions based on conditions defined in the DecisionAction.

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
await client.decisionActions.postDecisionActions({
    decision: {
        key: "value",
    },
    action: ButtonclikrApi.PostDecisionActionsRequestAction.One,
    application: ButtonclikrApi.PostDecisionActionsRequestApplication.Account,
    scoreType: ButtonclikrApi.PostDecisionActionsRequestScoreType.Low,
    type: ButtonclikrApi.PostDecisionActionsRequestType.Equal,
    field: {
        key: "value",
    },
    data: {
        key: "value",
    },
    message: {
        key: "value",
    },
    code: {
        key: "value",
    },
    score: {
        key: "value",
    },
    grouping: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostDecisionActionsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostDecisionActionsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostDecisionActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Decision Rules

<details><summary><code>client.decisionRules.<a href="/src/api/resources/decisionRules/client/Client.ts">getDecisionRulesId</a>(id, { ...params }) -> ButtonclikrApi.GetDecisionRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Decision Rule that makes a Decision apply only in certain circumstances, such as applying an administration charge if a payment is under $50.

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
await client.decisionRules.getDecisionRulesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Decision Rule ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDecisionRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionRules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisionRules.<a href="/src/api/resources/decisionRules/client/Client.ts">putDecisionRulesId</a>(id, { ...params }) -> ButtonclikrApi.PutDecisionRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Decision Rule that makes a Decision apply only in certain circumstances, for example, applying an administration charge if a payment is under $50.

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
await client.decisionRules.putDecisionRulesId(
    {
        key: "value",
    },
    {
        decision: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        type: ButtonclikrApi.PutDecisionRulesIdRequestType.Less,
        value: ButtonclikrApi.PutDecisionRulesIdRequestValue.Aed,
        grouping: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutDecisionRulesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutDecisionRulesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Decision Rule ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutDecisionRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionRules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisionRules.<a href="/src/api/resources/decisionRules/client/Client.ts">deleteDecisionRulesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteDecisionRulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Decision Rule that makes a Decision apply only in certain circumstances, for example, applying an administration charge if a payment is under $50.

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
await client.decisionRules.deleteDecisionRulesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Decision Rule ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteDecisionRulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionRules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisionRules.<a href="/src/api/resources/decisionRules/client/Client.ts">getDecisionRules</a>({ ...params }) -> ButtonclikrApi.GetDecisionRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Decision Rule; A Decision Rule is a piece of conditional logic that makes a Decision apply only in certain circumstances, For example, a Decision Rule could apply an administration charge if a payment is under $50.

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
await client.decisionRules.getDecisionRules({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetDecisionRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionRules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisionRules.<a href="/src/api/resources/decisionRules/client/Client.ts">postDecisionRules</a>({ ...params }) -> ButtonclikrApi.PostDecisionRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Decision Rule that makes a Decision apply only in certain circumstances, such as applying an administration charge if a payment is under $50.

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
await client.decisionRules.postDecisionRules({
    decision: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    type: ButtonclikrApi.PostDecisionRulesRequestType.Less,
    value: ButtonclikrApi.PostDecisionRulesRequestValue.Aed,
    grouping: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostDecisionRulesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostDecisionRulesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostDecisionRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DecisionRules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Decisions

<details><summary><code>client.decisions.<a href="/src/api/resources/decisions/client/Client.ts">getDecisionsId</a>(id, { ...params }) -> ButtonclikrApi.GetDecisionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Decision's resource.

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
await client.decisions.getDecisionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Decision ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDecisionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Decisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisions.<a href="/src/api/resources/decisions/client/Client.ts">putDecisionsId</a>(id, { ...params }) -> ButtonclikrApi.PutDecisionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Decisions resource, which represents the schedule and rules for a check done on Transactions.

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
await client.decisions.putDecisionsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        org: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        decision: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        application: ButtonclikrApi.PutDecisionsIdRequestApplication.Account,
        level: {
            key: "value",
        },
        type: ButtonclikrApi.PutDecisionsIdRequestType.MerchantFailureLimit,
        target: ButtonclikrApi.PutDecisionsIdRequestTarget.Activation,
        action: ButtonclikrApi.PutDecisionsIdRequestAction.Zero,
        sequence: {
            key: "value",
        },
        amount: {
            key: "value",
        },
        value: ButtonclikrApi.PutDecisionsIdRequestValue.One,
        period: ButtonclikrApi.PutDecisionsIdRequestPeriod.Days,
        periodFactor: {
            key: "value",
        },
        schedule: {
            key: "value",
        },
        scheduleFactor: {
            key: "value",
        },
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        low: {
            key: "value",
        },
        high: {
            key: "value",
        },
        useCache: ButtonclikrApi.PutDecisionsIdRequestUseCache.Zero,
        cacheTime: {
            key: "value",
        },
        options: {
            key: "value",
        },
        additionalOptions: {
            key: "value",
        },
        errorMessage: {
            key: "value",
        },
        reason: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutDecisionsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutDecisionsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Decision ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutDecisionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Decisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisions.<a href="/src/api/resources/decisions/client/Client.ts">deleteDecisionsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteDecisionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Decision's resource, which represents the schedule and rules for a check done on Transactions.

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
await client.decisions.deleteDecisionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, also known as The Decision ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteDecisionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Decisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisions.<a href="/src/api/resources/decisions/client/Client.ts">getDecisions</a>({ ...params }) -> ButtonclikrApi.GetDecisionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Decision's resource. A decisions resource represents the schedule and rules for a check done on Transactions.

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
await client.decisions.getDecisions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetDecisionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Decisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.decisions.<a href="/src/api/resources/decisions/client/Client.ts">postDecisions</a>({ ...params }) -> ButtonclikrApi.PostDecisionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Decisions resource that represents the schedule and rules for a check done on Transactions.

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
await client.decisions.postDecisions({
    login: {
        key: "value",
    },
    org: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    decision: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    application: ButtonclikrApi.PostDecisionsRequestApplication.Account,
    level: {
        key: "value",
    },
    type: ButtonclikrApi.PostDecisionsRequestType.MerchantFailureLimit,
    target: ButtonclikrApi.PostDecisionsRequestTarget.Activation,
    action: ButtonclikrApi.PostDecisionsRequestAction.Zero,
    sequence: {
        key: "value",
    },
    amount: {
        key: "value",
    },
    value: ButtonclikrApi.PostDecisionsRequestValue.One,
    period: ButtonclikrApi.PostDecisionsRequestPeriod.Days,
    periodFactor: {
        key: "value",
    },
    schedule: {
        key: "value",
    },
    scheduleFactor: {
        key: "value",
    },
    start: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    low: {
        key: "value",
    },
    high: {
        key: "value",
    },
    useCache: ButtonclikrApi.PostDecisionsRequestUseCache.Zero,
    cacheTime: {
        key: "value",
    },
    options: {
        key: "value",
    },
    additionalOptions: {
        key: "value",
    },
    errorMessage: {
        key: "value",
    },
    reason: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostDecisionsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostDecisionsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostDecisionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Decisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## DisbursementEntitiesLog

<details><summary><code>client.disbursementEntitiesLog.<a href="/src/api/resources/disbursementEntitiesLog/client/Client.ts">getDisbursementEntitiesLog</a>({ ...params }) -> ButtonclikrApi.GetDisbursementEntitiesLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on disbursementEntitiesLog coming soon

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
await client.disbursementEntitiesLog.getDisbursementEntitiesLog({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetDisbursementEntitiesLogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisbursementEntitiesLog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursementEntitiesLog.<a href="/src/api/resources/disbursementEntitiesLog/client/Client.ts">postDisbursementEntitiesLog</a>({ ...params }) -> ButtonclikrApi.PostDisbursementEntitiesLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on disbursementEntitiesLog coming soon

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
await client.disbursementEntitiesLog.postDisbursementEntitiesLog({
    entity: {
        key: "value",
    },
    disbursement: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostDisbursementEntitiesLogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisbursementEntitiesLog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursementEntitiesLog.<a href="/src/api/resources/disbursementEntitiesLog/client/Client.ts">getDisbursementEntitiesLogId</a>(id, { ...params }) -> ButtonclikrApi.GetDisbursementEntitiesLogIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on disbursementEntitiesLog coming soon

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
await client.disbursementEntitiesLog.getDisbursementEntitiesLogId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDisbursementEntitiesLogIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisbursementEntitiesLog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursementEntitiesLog.<a href="/src/api/resources/disbursementEntitiesLog/client/Client.ts">putDisbursementEntitiesLogId</a>(id, { ...params }) -> ButtonclikrApi.PutDisbursementEntitiesLogIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on disbursementEntitiesLog coming soon

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
await client.disbursementEntitiesLog.putDisbursementEntitiesLogId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        disbursement: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutDisbursementEntitiesLogIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisbursementEntitiesLog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursementEntitiesLog.<a href="/src/api/resources/disbursementEntitiesLog/client/Client.ts">deleteDisbursementEntitiesLogId</a>(id, { ...params }) -> ButtonclikrApi.DeleteDisbursementEntitiesLogIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for delete on disbursementEntitiesLog coming soon

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
await client.disbursementEntitiesLog.deleteDisbursementEntitiesLogId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteDisbursementEntitiesLogIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisbursementEntitiesLog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Disbursements

<details><summary><code>client.disbursements.<a href="/src/api/resources/disbursements/client/Client.ts">getDisbursementRefsId</a>(id, { ...params }) -> ButtonclikrApi.GetDisbursementRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Disbursement Reference that represents a reference code issued by the Payout facilitator when a Disbursement is paid.

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
await client.disbursements.getDisbursementRefsId("id");
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

**id:** `string` — The ID of this resource, also known as The Disbursement Reference ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDisbursementRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disbursements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursements.<a href="/src/api/resources/disbursements/client/Client.ts">getDisbursementRefs</a>({ ...params }) -> ButtonclikrApi.GetDisbursementRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Disbursement Reference that represents a reference code issued by the Payout facilitator when a Disbursement is paid.

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
await client.disbursements.getDisbursementRefs();
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

**request:** `ButtonclikrApi.GetDisbursementRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disbursements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursements.<a href="/src/api/resources/disbursements/client/Client.ts">postDisbursementRefs</a>({ ...params }) -> ButtonclikrApi.PostDisbursementRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Disbursement Reference, a resource that represents a reference code issued by the Payout facilitator when a Disbursement is paid.

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
await client.disbursements.postDisbursementRefs({
    disbursement: "disbursement",
    platform: ButtonclikrApi.DisbursementRefsRequestModelPlatform.Elavon,
    ref: "ref",
    stage: ButtonclikrApi.DisbursementRefsRequestModelStage.Create,
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

**request:** `ButtonclikrApi.DisbursementRefsRequestModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disbursements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursements.<a href="/src/api/resources/disbursements/client/Client.ts">getDisbursementsId</a>(id, { ...params }) -> ButtonclikrApi.GetDisbursementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Disbursement, which represents a record of an occasion where money is either paid to a bank account or received from a bank account.

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
await client.disbursements.getDisbursementsId("id");
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

**id:** `string` — The ID of this disbursement.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDisbursementsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disbursements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursements.<a href="/src/api/resources/disbursements/client/Client.ts">putDisbursementsId</a>(id, { ...params }) -> ButtonclikrApi.PutDisbursementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update Disbursement by it's ID.

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
await client.disbursements.putDisbursementsId("id", {
    amount: 1,
    deletedDisbursementEntries: 1,
    disbursementEntriesStatus: ButtonclikrApi.DisbursementsRequestModelDisbursementEntriesStatus.Pending,
    status: 1,
    sameDay: 1,
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DisbursementsRequestModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disbursements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursements.<a href="/src/api/resources/disbursements/client/Client.ts">getDisbursements</a>({ ...params }) -> ButtonclikrApi.GetDisbursementsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Disbursement, which represents a record of an occasion where money is either paid to a bank account or received from a bank account.

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
await client.disbursements.getDisbursements();
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

**request:** `ButtonclikrApi.GetDisbursementsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disbursements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursements.<a href="/src/api/resources/disbursements/client/Client.ts">getDisbursementResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetDisbursementResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Disbursement Ref or Disbursement Result resource, representing a reference code issued by the Payout facilitator when a Disbursement is paid.

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
await client.disbursements.getDisbursementResultsId("id");
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

**id:** `string` — The ID of this disbursement result.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDisbursementResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disbursements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.disbursements.<a href="/src/api/resources/disbursements/client/Client.ts">getDisbursementResults</a>({ ...params }) -> ButtonclikrApi.GetDisbursementResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Disbursement Ref or Disbursement Result resource, which represents a reference code issued by the Payout facilitator when a Disbursement is paid.

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
await client.disbursements.getDisbursementResults();
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

**request:** `ButtonclikrApi.GetDisbursementResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Disbursements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Divisions

<details><summary><code>client.divisions.<a href="/src/api/resources/divisions/client/Client.ts">getDivisionsId</a>(id, { ...params }) -> ButtonclikrApi.GetDivisionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Division; Details for query on divisions coming soon.

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
await client.divisions.getDivisionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, The Division ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetDivisionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Divisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.divisions.<a href="/src/api/resources/divisions/client/Client.ts">putDivisionsId</a>(id, { ...params }) -> ButtonclikrApi.PutDivisionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Division; Details for update on divisions coming soon.

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
await client.divisions.putDivisionsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        name: {
            key: "value",
        },
        email: {
            key: "value",
        },
        minPasswordLength: {
            key: "value",
        },
        minPasswordComplexity: ButtonclikrApi.PutDivisionsIdRequestMinPasswordComplexity.One,
        changeManagementEnabled: ButtonclikrApi.PutDivisionsIdRequestChangeManagementEnabled.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource, The Division ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutDivisionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Divisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.divisions.<a href="/src/api/resources/divisions/client/Client.ts">getDivisions</a>({ ...params }) -> ButtonclikrApi.GetDivisionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Division; Details for query on divisions coming soon.

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
await client.divisions.getDivisions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetDivisionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Divisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.divisions.<a href="/src/api/resources/divisions/client/Client.ts">postDivisions</a>({ ...params }) -> ButtonclikrApi.PostDivisionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Division; Details for creating on divisions coming soon.

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
await client.divisions.postDivisions({
    login: {
        key: "value",
    },
    name: {
        key: "value",
    },
    email: {
        key: "value",
    },
    minPasswordLength: {
        key: "value",
    },
    minPasswordComplexity: ButtonclikrApi.PostDivisionsRequestMinPasswordComplexity.One,
    changeManagementEnabled: ButtonclikrApi.PostDivisionsRequestChangeManagementEnabled.Zero,
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

**request:** `ButtonclikrApi.PostDivisionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Divisions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entities

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntities</a>({ ...params }) -> ButtonclikrApi.GetEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Entity, which is the top-level resource of a business in the API, describing the details of that business in its fields, and each entity can describe either a Merchant or a Facilitator (payment facilitator).

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
await client.entities.getEntities();
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

**request:** `ButtonclikrApi.GetEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">postEntities</a>({ ...params }) -> ButtonclikrApi.PostEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Entity the top-level resource of a business in the API, describing its details through fields, and it can represent either a Merchant or a Facilitator (payment facilitator)

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
await client.entities.postEntities({
    clientIp: "clientIp",
    login: "p1_log_5a1ef5e55653ed720159d53",
    totalCreditDisbursements: 1,
    type: 1,
    name: "Smith Company LLC",
    address1: "123 North 12 St",
    city: "Miami",
    state: ButtonclikrApi.PostEntitiesRequestState.Ab,
    zip: "33024",
    country: ButtonclikrApi.PostEntitiesRequestCountry.Usa,
    timezone: ButtonclikrApi.PostEntitiesRequestTimezone.Est,
    phone: "1234567891",
    email: "support@example.com",
    website: "http://www.example.com",
    ein: "123456789",
    locations: 1,
    public: 0,
    reserved: 1,
    globalBusinessId: "globalBusinessId",
    frozen: 1,
    inactive: 1,
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

**request:** `ButtonclikrApi.PostEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.GetEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Entity, which is the top-level resource of a business in the API and describes the details of that business in its fields, can describe either a Merchant or a Facilitator (payment facilitator).

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
await client.entities.getEntitiesId("id");
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

**id:** `string` — The ID of this entity.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">putEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.PutEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Entity, which is the top-level resource of a business in the API and describes the details of that business in its fields, can be either a Merchant or a Facilitator (payment facilitator).

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
await client.entities.putEntitiesId("id", {
    clientIp: "clientIp",
    login: "login",
    totalCreditDisbursements: 1,
    type: 1,
    name: "name",
    address1: "321 SW 21 St",
    city: "city",
    state: ButtonclikrApi.PutEntitiesIdRequestState.Ab,
    zip: "zip",
    country: ButtonclikrApi.PutEntitiesIdRequestCountry.Usa,
    timezone: ButtonclikrApi.PutEntitiesIdRequestTimezone.Est,
    phone: "phone",
    email: "email",
    ein: "ein",
    locations: 1,
    public: 1,
    reserved: 1,
    globalBusinessId: "globalBusinessId",
    frozen: 1,
    inactive: 1,
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

**id:** `string` — The ID of this entity.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">deleteEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Entity, which is the top-level resource of a business in the API and describes the details of that business in its fields, including either a Merchant or a Facilitator (payment facilitator).

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
await client.entities.deleteEntitiesId("id");
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

**id:** `string` — The ID of this entity.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EntitiesCustomFields

<details><summary><code>client.entitiesCustomFields.<a href="/src/api/resources/entitiesCustomFields/client/Client.ts">getEntityCustomFieldsId</a>(id, { ...params }) -> ButtonclikrApi.GetEntityCustomFieldsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Entity Custom Field.
Custom Fields can be added to entities associated by the Entity Id.
An Entity Id can have various fields associated to it.

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
await client.entitiesCustomFields.getEntityCustomFieldsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntityCustomFieldsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesCustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entitiesCustomFields.<a href="/src/api/resources/entitiesCustomFields/client/Client.ts">putEntityCustomFieldsId</a>(id, { ...params }) -> ButtonclikrApi.PutEntityCustomFieldsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Entity Custom Field.
Custom Fields can be added to entities associated by the Entity Id.
An Entity Id can have various fields associated to it.

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
await client.entitiesCustomFields.putEntityCustomFieldsId(
    {
        key: "value",
    },
    {
        key: {
            key: "value",
        },
        value: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutEntityCustomFieldsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesCustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entitiesCustomFields.<a href="/src/api/resources/entitiesCustomFields/client/Client.ts">getEntityCustomFields</a>({ ...params }) -> ButtonclikrApi.GetEntityCustomFieldsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Entity Custom Field.
Custom Fields can be added to entities associated by the Entity Id.
An Entity Id can have various fields associated to it.

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
await client.entitiesCustomFields.getEntityCustomFields({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntityCustomFieldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesCustomFields.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EntityData

<details><summary><code>client.entityData.<a href="/src/api/resources/entityData/client/Client.ts">getEntityDatasId</a>(id, { ...params }) -> ButtonclikrApi.GetEntityDatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityDatas containing information about that entity, such as the signature for the terms and conditions.

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
await client.entityData.getEntityDatasId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this entity data.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntityDatasIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityData.<a href="/src/api/resources/entityData/client/Client.ts">putEntityDatasId</a>(id, { ...params }) -> ButtonclikrApi.PutEntityDatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an EntityDatas.
An EntityDatas is the data related to an entity
It contains information about that entity such as the signature for the terms and conditions

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
await client.entityData.putEntityDatasId(
    {
        key: "value",
    },
    {
        entity: "string",
        tcAcceptSignature: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutEntityDatasIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityData.<a href="/src/api/resources/entityData/client/Client.ts">deleteEntityDatasId</a>(id, { ...params }) -> ButtonclikrApi.DeleteEntityDatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an EntityDatas.
An EntityDatas is the data related to an entity
It contains information about that entity such as the signature for the terms and conditions

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
await client.entityData.deleteEntityDatasId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteEntityDatasIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityData.<a href="/src/api/resources/entityData/client/Client.ts">getEntityDatas</a>({ ...params }) -> ButtonclikrApi.GetEntityDatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityDatas, which is the data related to an entity containing information about that entity such as the signature for the terms and conditions.

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
await client.entityData.getEntityDatas({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntityDatasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityData.<a href="/src/api/resources/entityData/client/Client.ts">postEntityDatas</a>({ ...params }) -> ButtonclikrApi.PostEntityDatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an EntityDatas containing the data related to an entity, including information such as the signature for the terms and conditions.

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
await client.entityData.postEntityDatas({
    entity: "entity",
    tcAcceptSignature: "tcAcceptSignature",
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

**request:** `ButtonclikrApi.PostEntityDatasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityData.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EntityRefs

<details><summary><code>client.entityRefs.<a href="/src/api/resources/entityRefs/client/Client.ts">getEntityRefsId</a>(id, { ...params }) -> ButtonclikrApi.GetEntityRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityRefs resource that represents a reference code issued by the Processor that represents a particular Entity.

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
await client.entityRefs.getEntityRefsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this entity reference.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntityRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRefs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityRefs.<a href="/src/api/resources/entityRefs/client/Client.ts">putEntityRefsId</a>(id, { ...params }) -> ButtonclikrApi.PutEntityRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an entityRefs resource, which represents a reference code issued by the Processor that represents a particular Entity.

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
await client.entityRefs.putEntityRefsId(
    {
        key: "value",
    },
    {
        entity: "string",
        member: "string",
        entityRoute: "string",
        ref: "string",
        stage: ButtonclikrApi.PutEntityRefsIdRequestStage.AmexCharge,
        staging: ButtonclikrApi.PutEntityRefsIdRequestStaging.Zero,
        platform: ButtonclikrApi.PutEntityRefsIdRequestPlatform.Apple,
        currency: ButtonclikrApi.PutEntityRefsIdRequestCurrency.Aed,
        fundingCurrency: ButtonclikrApi.PutEntityRefsIdRequestFundingCurrency.Aed,
        default: 1,
        fbo: "string",
        options: "string",
        inactive: 1,
        frozen: 1,
    }
);
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

**id:** `unknown` — The ID of this entity reference.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutEntityRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRefs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityRefs.<a href="/src/api/resources/entityRefs/client/Client.ts">deleteEntityRefsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteEntityRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an entityRefs resource, which represents a reference code issued by the Processor that represents a particular Entity.

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
await client.entityRefs.deleteEntityRefsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this entity reference.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteEntityRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRefs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityRefs.<a href="/src/api/resources/entityRefs/client/Client.ts">getEntityRefs</a>({ ...params }) -> ButtonclikrApi.GetEntityRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an EntityRefs resource that represents a reference code issued by the Processor that represents a particular Entity.

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
await client.entityRefs.getEntityRefs({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntityRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRefs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityRefs.<a href="/src/api/resources/entityRefs/client/Client.ts">postEntityRefs</a>({ ...params }) -> ButtonclikrApi.PostEntityRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an EntityRefs resource representing a reference code issued by the Processor that represents a particular Entity.

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
await client.entityRefs.postEntityRefs({
    entity: "entity",
    member: "member",
    ref: "ref",
    stage: ButtonclikrApi.PostEntityRefsRequestStage.AmexCharge,
    staging: ButtonclikrApi.PostEntityRefsRequestStaging.Zero,
    platform: ButtonclikrApi.PostEntityRefsRequestPlatform.Apple,
    default: 1,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.PostEntityRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRefs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EntityRoutes

<details><summary><code>client.entityRoutes.<a href="/src/api/resources/entityRoutes/client/Client.ts">getEntityRoutesId</a>(id, { ...params }) -> ButtonclikrApi.GetEntityRoutesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an entityRoutes resource.
An entityRoutes resource will indicate which platforms (and for which currencies) a merchant should board into.

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
await client.entityRoutes.getEntityRoutesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetEntityRoutesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRoutes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityRoutes.<a href="/src/api/resources/entityRoutes/client/Client.ts">putEntityRoutesId</a>(id, { ...params }) -> ButtonclikrApi.PutEntityRoutesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an entityRoutes resource.
An entityRoutes resource will indicate which platforms (and for which currencies) a merchant should board into.

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
await client.entityRoutes.putEntityRoutesId(
    {
        key: "value",
    },
    {
        login: "string",
        division: "string",
        entity: "string",
        org: "string",
        partition: "string",
        platform: ButtonclikrApi.PutEntityRoutesIdRequestPlatform.Apple,
        currency: ButtonclikrApi.PutEntityRoutesIdRequestCurrency.Aed,
        fundingCurrency: ButtonclikrApi.PutEntityRoutesIdRequestFundingCurrency.Usd,
        options: "string",
        default: 1,
        inactive: 1,
        frozen: 1,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutEntityRoutesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRoutes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityRoutes.<a href="/src/api/resources/entityRoutes/client/Client.ts">deleteEntityRoutesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteEntityRoutesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an entityRoutes resource.
An entityRoutes resource will indicate which platforms (and for which currencies) a merchant should board into.

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
await client.entityRoutes.deleteEntityRoutesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteEntityRoutesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRoutes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityRoutes.<a href="/src/api/resources/entityRoutes/client/Client.ts">getEntityRoutes</a>({ ...params }) -> ButtonclikrApi.GetEntityRoutesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an entityRoutes resource.
An entityRoutes resource will indicate which platforms (and for which currencies) a merchant should board into.

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
await client.entityRoutes.getEntityRoutes({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetEntityRoutesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRoutes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityRoutes.<a href="/src/api/resources/entityRoutes/client/Client.ts">postEntityRoutes</a>({ ...params }) -> ButtonclikrApi.PostEntityRoutesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an entityRoutes resource.
An entityRoutes resource will indicate which platforms (and for which currencies) a merchant should board into.

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
await client.entityRoutes.postEntityRoutes({
    login: "login",
    platform: ButtonclikrApi.PostEntityRoutesRequestPlatform.Apple,
    default: 1,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.PostEntityRoutesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityRoutes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Files

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">getFilesId</a>(id, { ...params }) -> ButtonclikrApi.GetFilesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Files resource.
A File represents an uploaded/downloaded file to/from an integration.

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
await client.files.getFilesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetFilesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">deleteFilesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteFilesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Files resource.
A File represents an uploaded/downloaded file to/from an integration.

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
await client.files.deleteFilesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteFilesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">getFiles</a>({ ...params }) -> ButtonclikrApi.GetFilesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Files resource.
A File represents an uploaded/downloaded file to/from an integration.

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
await client.files.getFiles({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetFilesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">postFiles</a>({ ...params }) -> ButtonclikrApi.PostFilesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Files resource.
A File represents an uploaded/downloaded file to/from an integration.

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
await client.files.postFiles({
    credential: {
        key: "value",
    },
    type: ButtonclikrApi.PostFilesRequestType.Jpg,
    integration: ButtonclikrApi.PostFilesRequestIntegration.Apple,
    direction: ButtonclikrApi.PostFilesRequestDirection.Download,
    status: ButtonclikrApi.PostFilesRequestStatus.Pending,
    retries: {
        key: "value",
    },
    name: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostFilesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostFilesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostFilesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Funds

<details><summary><code>client.funds.<a href="/src/api/resources/funds/client/Client.ts">getFundOriginsId</a>(id, { ...params }) -> ButtonclikrApi.GetFundOriginsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fund Origin. Details for query on fundOrigins coming soon.

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
await client.funds.getFundOriginsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Fund Origin ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetFundOriginsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Funds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.funds.<a href="/src/api/resources/funds/client/Client.ts">getFundOrigins</a>({ ...params }) -> ButtonclikrApi.GetFundOriginsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on fundOrigins coming soon

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
await client.funds.getFundOrigins({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetFundOriginsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Funds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.funds.<a href="/src/api/resources/funds/client/Client.ts">getFundsId</a>(id, { ...params }) -> ButtonclikrApi.GetFundsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fund, which represents a sum of money held by an Entity, and some of the amount can be marked as reserved or available.

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
await client.funds.getFundsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Fund ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetFundsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Funds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.funds.<a href="/src/api/resources/funds/client/Client.ts">getFunds</a>({ ...params }) -> ButtonclikrApi.GetFundsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Fund that represents a sum of money held by an Entity, some of which can be marked as reserved or available.

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
await client.funds.getFunds({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetFundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Funds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FundingParameters

<details><summary><code>client.fundingParameters.<a href="/src/api/resources/fundingParameters/client/Client.ts">getFundingParametersId</a>(id, { ...params }) -> ButtonclikrApi.GetFundingParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a fundingParameter.
A fundingParameter resource holds a certain configuration used for funding such as delays.

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
await client.fundingParameters.getFundingParametersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetFundingParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FundingParameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fundingParameters.<a href="/src/api/resources/fundingParameters/client/Client.ts">putFundingParametersId</a>(id, { ...params }) -> ButtonclikrApi.PutFundingParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a fundingParameter.
A fundingParameter resource holds a certain configuration used for funding such as delays.

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
await client.fundingParameters.putFundingParametersId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        division: {
            key: "value",
        },
        org: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        platform: ButtonclikrApi.PutFundingParametersIdRequestPlatform.Apple,
        locked: ButtonclikrApi.PutFundingParametersIdRequestLocked.Zero,
        type: ButtonclikrApi.PutFundingParametersIdRequestType.AgentCnp,
        paymentMethods: ButtonclikrApi.PutFundingParametersIdRequestPaymentMethods.Amex,
        value: ButtonclikrApi.PutFundingParametersIdRequestValue.Zero,
        inactive: ButtonclikrApi.PutFundingParametersIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutFundingParametersIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutFundingParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FundingParameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fundingParameters.<a href="/src/api/resources/fundingParameters/client/Client.ts">deleteFundingParametersId</a>(id, { ...params }) -> ButtonclikrApi.DeleteFundingParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a fundingParameter.
A fundingParameter resource holds a certain configuration used for funding such as delays.

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
await client.fundingParameters.deleteFundingParametersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteFundingParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FundingParameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fundingParameters.<a href="/src/api/resources/fundingParameters/client/Client.ts">getFundingParameters</a>({ ...params }) -> ButtonclikrApi.GetFundingParametersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a fundingParameter.
A fundingParameter resource holds a certain configuration used for funding such as delays.

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
await client.fundingParameters.getFundingParameters({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetFundingParametersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FundingParameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fundingParameters.<a href="/src/api/resources/fundingParameters/client/Client.ts">postFundingParameters</a>({ ...params }) -> ButtonclikrApi.PostFundingParametersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a fundingParameter.
A fundingParameter resource holds a certain configuration used for funding such as delays.

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
await client.fundingParameters.postFundingParameters({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    division: {
        key: "value",
    },
    org: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    platform: ButtonclikrApi.PostFundingParametersRequestPlatform.Apple,
    locked: ButtonclikrApi.PostFundingParametersRequestLocked.Zero,
    type: ButtonclikrApi.PostFundingParametersRequestType.AgentCnp,
    paymentMethods: ButtonclikrApi.PostFundingParametersRequestPaymentMethods.Amex,
    value: ButtonclikrApi.PostFundingParametersRequestValue.Zero,
    inactive: ButtonclikrApi.PostFundingParametersRequestInactive.Zero,
    frozen: ButtonclikrApi.PostFundingParametersRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostFundingParametersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FundingParameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Transactions (Txns)

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getHoldsId</a>(id, { ...params }) -> ButtonclikrApi.GetHoldsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a holds resource.
A holds resource represents a reviewable action taken on a Transaction.

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
await client.transactionsTxns.getHoldsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetHoldsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">putHoldsId</a>(id, { ...params }) -> ButtonclikrApi.PutHoldsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on holds

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
await client.transactionsTxns.putHoldsId("id", {
    login: "login",
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutHoldsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getHolds</a>({ ...params }) -> ButtonclikrApi.GetHoldsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a holds resource.
A holds resource represents a reviewable action taken on a Transaction.

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
await client.transactionsTxns.getHolds();
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

**request:** `ButtonclikrApi.GetHoldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postHolds</a>({ ...params }) -> ButtonclikrApi.PostHoldsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a holds resource.
A holds resource represents a reviewable action taken on a Transaction.

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
await client.transactionsTxns.postHolds({
    login: "login",
    action: 1,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.PostHoldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getItemsId</a>(id, { ...params }) -> ButtonclikrApi.GetItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Item.
An Item is a line item that is associated with a particular Transaction. It allows you to describe the cost, quantity and other details of each line in the Transaction.

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
await client.transactionsTxns.getItemsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">putItemsId</a>(id, { ...params }) -> ButtonclikrApi.PutItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Item.
An Item is a line item that is associated with a particular Transaction. It allows you to describe the cost, quantity and other details of each line in the Transaction.

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
await client.transactionsTxns.putItemsId("id", {
    item: "item",
    quantity: 1,
    price: 1,
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">deleteItemsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Item.
An Item is a line item that is associated with a particular Transaction. It allows you to describe the cost, quantity and other details of each line in the Transaction.

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
await client.transactionsTxns.deleteItemsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getItems</a>({ ...params }) -> ButtonclikrApi.GetItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Item.
An Item is a line item that is associated with a particular Transaction. It allows you to describe the cost, quantity and other details of each line in the Transaction.

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
await client.transactionsTxns.getItems();
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

**request:** `ButtonclikrApi.GetItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postItems</a>({ ...params }) -> ButtonclikrApi.PostItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Item.
An Item is a line item that is associated with a particular Transaction. It allows you to describe the cost, quantity and other details of each line in the Transaction.

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
await client.transactionsTxns.postItems({
    txn: "txn",
    item: "item",
    quantity: 1,
    price: 1,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.PostItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getRefundsId</a>(id, { ...params }) -> ButtonclikrApi.GetRefundsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Refund.
A Refund is a way to reverse a fee that has been charged to another entity incorrectly.

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
await client.transactionsTxns.getRefundsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetRefundsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getRefunds</a>({ ...params }) -> ButtonclikrApi.GetRefundsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Refund.
A Refund is a way to reverse a fee that has been charged to another entity incorrectly.

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
await client.transactionsTxns.getRefunds();
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

**request:** `ButtonclikrApi.GetRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postRefunds</a>({ ...params }) -> ButtonclikrApi.PostRefundsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Refund.
A Refund is a way to reverse a fee that has been charged to another entity incorrectly.

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
await client.transactionsTxns.postRefunds({
    entry: "entry",
    amount: 1,
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

**request:** `ButtonclikrApi.PostRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnRefsId</a>(id, { ...params }) -> ButtonclikrApi.GetTerminalTxnRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalTxnRefs resource, which represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.getTerminalTxnRefsId("string", {
    expand: "string",
    unmask: "string",
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

**id:** `string` — The Terminal Transaction Reference ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTerminalTxnRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">putTerminalTxnRefsId</a>(id, { ...params }) -> ButtonclikrApi.PutTerminalTxnRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a terminalTxnRefs resource, which represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.putTerminalTxnRefsId("string", {
    ref: "string",
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

**id:** `string` — The Terminal Transaction Reference ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutTerminalTxnRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">deleteTerminalTxnRefsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteTerminalTxnRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a terminalTxnRefs resource, which represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.deleteTerminalTxnRefsId("string", {
    expand: "string",
    unmask: "string",
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

**id:** `string` — The Terminal Transaction Reference ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTerminalTxnRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnRefs</a>({ ...params }) -> ButtonclikrApi.GetTerminalTxnRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalTxnRefs resource, which represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.getTerminalTxnRefs({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTerminalTxnRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postTerminalTxnRefs</a>({ ...params }) -> ButtonclikrApi.PostTerminalTxnRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a terminalTxnRefs resource, which represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.postTerminalTxnRefs({
    terminalTxn: "terminalTxn",
    ref: "ref",
    stage: ButtonclikrApi.PostTerminalTxnRefsRequestStage.Activation,
    platform: ButtonclikrApi.PostTerminalTxnRefsRequestPlatform.Apple,
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

**request:** `ButtonclikrApi.PostTerminalTxnRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetTerminalTxnResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Querying a terminalTxnResults resource represents the result of a Transaction from a processor, which may be approved, declined, or raise an error.

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
await client.transactionsTxns.getTerminalTxnResultsId("id");
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

**id:** `string` — The ID of this terminal transaction result.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTerminalTxnResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnResults</a>({ ...params }) -> ButtonclikrApi.GetTerminalTxnResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Querying a terminalTxnResults resource represents the result of a Transaction from a processor, which can be approved, declined, or raise an error.

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
await client.transactionsTxns.getTerminalTxnResults();
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

**request:** `ButtonclikrApi.GetTerminalTxnResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnsById</a>(id, { ...params }) -> ButtonclikrApi.GetTerminalTxnsByIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a TerminalTxn holds all of the information to a related final transaction, which they are used to be reconciled with that actual, final transaction.

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
await client.transactionsTxns.getTerminalTxnsById("id");
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

**id:** `string` — The ID of this resource and The Terminal Transaction ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTerminalTxnsByIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">updateTerminalTxnsById</a>(id, { ...params }) -> ButtonclikrApi.UpdateTerminalTxnsByIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a TerminalTxn holds all of the information to a related final transaction and is used to be reconciled with that actual, final transaction.

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
await client.transactionsTxns.updateTerminalTxnsById("id", {
    binType: ButtonclikrApi.TerminalTxnsUpdateReqBodySchemaModelBinType.Credit,
    swiped: 1,
    emv: 1,
    reserved: 1,
    signature: 1,
    total: 1,
    status: 1,
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this resource and The Terminal Transaction ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.TerminalTxnsUpdateReqBodySchemaModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">deleteTerminalTxnsById</a>(id, { ...params }) -> ButtonclikrApi.DeleteTerminalTxnsByIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a TerminalTxn that holds all of the information to a related final transaction and is used to be reconciled with that actual, final transaction.

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
await client.transactionsTxns.deleteTerminalTxnsById("id");
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

**id:** `string` — The ID of this resource and The Terminal Transaction ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTerminalTxnsByIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxns</a>({ ...params }) -> ButtonclikrApi.GetTerminalTxnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a TerminalTxn, which holds all of the information to a related final transaction and is used to reconcile with the actual, final transaction.

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
await client.transactionsTxns.getTerminalTxns();
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

**request:** `ButtonclikrApi.GetTerminalTxnsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postTerminalTxns</a>({ ...params }) -> ButtonclikrApi.PostTerminalTxnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a TerminalTxn.
TerminalTxns hold all of the information to a related final transaction. They are used to be reconcilliated with that actual, final transaction.

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
await client.transactionsTxns.postTerminalTxns({
    binType: ButtonclikrApi.TerminalTxnsPostReqBodySchemaModelBinType.Credit,
    origin: 1,
    pos: 1,
    type: 1,
    currency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
    fundingCurrency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
    swiped: 1,
    merchant: "merchant",
    mid: "mid",
    pin: 1,
    reserved: 1,
    signature: 1,
    total: 1,
    status: 1,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.TerminalTxnsPostReqBodySchemaModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnDatasId</a>(id, { ...params }) -> ButtonclikrApi.GetTxnDatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnDatas resource.
A txnDatas resource represents data associated with a Transaction - in particular, a Base64 encoded image of a signature captured at the time of entering the Transaction.

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
await client.transactionsTxns.getTxnDatasId("id");
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

**id:** `string` — The ID of this resource and The TXN datas ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTxnDatasIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnDatas</a>({ ...params }) -> ButtonclikrApi.GetTxnDatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnDatas resource.
A txnDatas resource represents data associated with a Transaction - in particular, a Base64 encoded image of a signature captured at the time of entering the Transaction.

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
await client.transactionsTxns.getTxnDatas();
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

**request:** `ButtonclikrApi.GetTxnDatasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postTxnDatas</a>({ ...params }) -> ButtonclikrApi.PostTxnDatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on txnDatas coming soon

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
await client.transactionsTxns.postTxnDatas({
    txn: "txn",
    signature: 1,
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

**request:** `ButtonclikrApi.TxnDatasPostReqBodySchemaModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnMetadatasId</a>(id, { ...params }) -> ButtonclikrApi.GetTxnMetadatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnMetadatas resource.
A txnMetadatas resource represents data from an EMV Transaction and/or returned by the credit card network associated with a Transaction.

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
await client.transactionsTxns.getTxnMetadatasId("id");
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

**id:** `string` — The ID of this resource and The TXN Metadatas ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTxnMetadatasIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnMetadatas</a>({ ...params }) -> ButtonclikrApi.GetTxnMetadatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnMetadatas resource.
A txnMetadatas resource represents data from an EMV Transaction and/or returned by the credit card network associated with a Transaction.

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
await client.transactionsTxns.getTxnMetadatas();
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

**request:** `ButtonclikrApi.GetTxnMetadatasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postTxnMetadatas</a>({ ...params }) -> ButtonclikrApi.PostTxnMetadatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a txnMetadatas resource.
A txnMetadatas resource represents data from an EMV Transaction and/or returned by the credit card network associated with a Transaction.

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
await client.transactionsTxns.postTxnMetadatas({
    txn: "txn",
    type: ButtonclikrApi.TxnMetadatasPostReqBodySchemaType.Amounts,
    field: ButtonclikrApi.TxnMetadatasPostReqBodySchemaField.Discretionary1,
    value: "value",
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

**request:** `ButtonclikrApi.TxnMetadatasPostReqBodySchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnRefsId</a>(id, { ...params }) -> ButtonclikrApi.GetTxnRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnRefs resource.
A txnRefs resource represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.getTxnRefsId("id");
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

**id:** `string` — The ID of this resource and The txnRefs ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTxnRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">putTxnRefsId</a>(id, { ...params }) -> ButtonclikrApi.PutTxnRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a txnRefs resource.
A txnRefs resource represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.putTxnRefsId("id", {
    ref: "ref",
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

**id:** `string` — The ID of this resource and The txnRefs ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.TxnRefsPutReqBodySchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">deleteTxnRefsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteTxnRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a txnRefs resource.
A txnRefs resource represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.deleteTxnRefsId("id");
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

**id:** `string` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTxnRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnRefs</a>({ ...params }) -> ButtonclikrApi.GetTxnRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnRefs resource.
A txnRefs resource represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.getTxnRefs();
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

**request:** `ButtonclikrApi.GetTxnRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postTxnRefs</a>({ ...params }) -> ButtonclikrApi.PostTxnRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a txnRefs resource.
A txnRefs resource represents a reference code issued by the Processor in relation to a particular Transaction.

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
await client.transactionsTxns.postTxnRefs({
    txn: "txn",
    ref: "ref",
    stage: ButtonclikrApi.TxnRefsPostReqBodySchemaModelStage.Auth,
    platform: ButtonclikrApi.TxnRefsPostReqBodySchemaModelPlatform.Apple,
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

**request:** `ButtonclikrApi.TxnRefsPostReqBodySchemaModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetTxnResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnResults resource.
A txnResults resource represents the result of a Transaction from a processor.
For example, the Transaction may be approved, declined, or raise an error.

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
await client.transactionsTxns.getTxnResultsId("id");
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

**id:** `string` — The ID of this resource and The TXN result ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTxnResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnResults</a>({ ...params }) -> ButtonclikrApi.GetTxnResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnResults resource.
A txnResults resource represents the result of a Transaction from a processor.
For example, the Transaction may be approved, declined, or raise an error.

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
await client.transactionsTxns.getTxnResults();
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

**request:** `ButtonclikrApi.GetTxnResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxnsId</a>(id, { ...params }) -> ButtonclikrApi.GetTxnsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Transaction.
Transactions hold all of the information relating to a particular credit card transaction, including the merchant, token, subscription, customer and card information.

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
await client.transactionsTxns.getTxnsId("id");
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

**id:** `string` — The ID of this transaction.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTxnsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">putTxnsId</a>(id, { ...params }) -> ButtonclikrApi.PutTxnsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Transaction.
Transactions hold all of the information relating to a particular credit card transaction, including the merchant, token, subscription, customer and card information.

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
await client.transactionsTxns.putTxnsId("id", {
    debtRepayment: 1,
    currency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
    signature: 1,
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

**id:** `string` — The ID of this transaction.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.TxnsUpdateReqBodySchemaModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTxns</a>({ ...params }) -> ButtonclikrApi.GetTxnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Transaction.
Transactions hold all of the information relating to a particular credit card transaction, including the merchant, token, subscription, customer and card information.

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
await client.transactionsTxns.getTxns();
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

**request:** `ButtonclikrApi.GetTxnsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postTxns</a>({ ...params }) -> ButtonclikrApi.PostTxnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Transaction.
Transactions hold all of the information relating to a particular credit card transaction, including the merchant, token, subscription, customer and card information.

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
await client.transactionsTxns.postTxns({
    allowPartial: 1,
    authentication: "authentication",
    debtRepayment: 1,
    fortxn: "fortxn",
    origin: 2,
    platform: ButtonclikrApi.TxnsPostReqBodySchemaModelPlatform.Apple,
    token: "e41272ec5464d9ec81cc85c854837472",
    type: ButtonclikrApi.TxnsPostReqBodySchemaModelType.One,
    unauthReason: ButtonclikrApi.TxnsPostReqBodySchemaModelUnauthReason.Incomplete,
    currency: ButtonclikrApi.TerminalTxnsCurrencyProperty.Aed,
    fundingCurrency: ButtonclikrApi.TxnsPostReqBodySchemaModelFundingCurrency.Aed,
    swiped: 1,
    merchant: "p1_mer_5a1ef5e55656a739a85da21",
    mid: "mid",
    pin: 1,
    signature: 1,
    total: 100,
    unattended: 1,
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

**request:** `ButtonclikrApi.TxnsPostReqBodySchemaModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnsDatas</a>() -> ButtonclikrApi.GetTerminalTxnsDatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a TerminalTxnData resource.

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
await client.transactionsTxns.getTerminalTxnsDatas();
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

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postTerminalTxnsDatas</a>({ ...params }) -> ButtonclikrApi.PostTerminalTxnsDatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a TerminalTxnData resource.

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
await client.transactionsTxns.postTerminalTxnsDatas({
    terminalTxn: "terminalTxn",
    signature: 1,
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

**request:** `ButtonclikrApi.TerminalTxnsDatasPostReqBodySchemaModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnsDatasId</a>(id) -> ButtonclikrApi.GetTerminalTxnsDatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a TerminalTxnData resource.

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
await client.transactionsTxns.getTerminalTxnsDatasId("id");
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

**id:** `string` — The Terminal Transaction Data ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnsMetadatas</a>() -> ButtonclikrApi.GetTerminalTxnsMetadatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalTxnMetadatas resource.

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
await client.transactionsTxns.getTerminalTxnsMetadatas();
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

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">postTerminalTxnsMetadatas</a>({ ...params }) -> ButtonclikrApi.PostTerminalTxnsMetadatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a terminalTxnMetadatas resource.

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
await client.transactionsTxns.postTerminalTxnsMetadatas({
    terminalTxn: "terminalTxn",
    type: ButtonclikrApi.TerminalTxnsMetadatasPostReqBodySchemaModelType.Amounts,
    field: ButtonclikrApi.TerminalTxnsMetadatasPostReqBodySchemaModelField.Discretionary1,
    value: "value",
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

**request:** `ButtonclikrApi.TerminalTxnsMetadatasPostReqBodySchemaModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionsTxns.<a href="/src/api/resources/transactionsTxns/client/Client.ts">getTerminalTxnsMetadatasId</a>(id) -> ButtonclikrApi.GetTerminalTxnsMetadatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalTxnMetadatas resource.

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
await client.transactionsTxns.getTerminalTxnsMetadatasId("id");
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

**id:** `string` — The Terminal Transaction Metadata ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsTxns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hosts

<details><summary><code>client.hosts.<a href="/src/api/resources/hosts/client/Client.ts">getHostsId</a>(id, { ...params }) -> ButtonclikrApi.GetHostsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Hosts resource.
A Host represents a particular host on the network that runs the API and portal for a particular Partition.

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
await client.hosts.getHostsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetHostsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Hosts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hosts.<a href="/src/api/resources/hosts/client/Client.ts">putHostsId</a>(id, { ...params }) -> ButtonclikrApi.PutHostsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Hosts resource.
A Host represents a particular host on the network that runs the API and portal for a particular Partition.

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
await client.hosts.putHostsId(
    {
        key: "value",
    },
    {
        division: {
            key: "value",
        },
        api: {
            key: "value",
        },
        portal: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutHostsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutHostsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutHostsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Hosts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hosts.<a href="/src/api/resources/hosts/client/Client.ts">deleteHostsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteHostsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Hosts resource.
A Host represents a particular host on the network that runs the API and portal for a particular Partition.

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
await client.hosts.deleteHostsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteHostsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Hosts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hosts.<a href="/src/api/resources/hosts/client/Client.ts">getHosts</a>({ ...params }) -> ButtonclikrApi.GetHostsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Hosts resource.
A Host represents a particular host on the network that runs the API and portal for a particular Partition.

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
await client.hosts.getHosts({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetHostsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Hosts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hosts.<a href="/src/api/resources/hosts/client/Client.ts">postHosts</a>({ ...params }) -> ButtonclikrApi.PostHostsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Hosts resource.
A Host represents a particular host on the network that runs the API and portal for a particular Partition.

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
await client.hosts.postHosts({
    partition: {
        key: "value",
    },
    division: {
        key: "value",
    },
    api: {
        key: "value",
    },
    portal: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostHostsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostHostsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostHostsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Hosts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoices

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoiceItemsId</a>(id, { ...params }) -> ButtonclikrApi.GetInvoiceItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Invoice Item or query Invoice Items.

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
await client.invoices.getInvoiceItemsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this invoice item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetInvoiceItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">putInvoiceItemsId</a>(id, { ...params }) -> ButtonclikrApi.PutInvoiceItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Invoice Item, A InvoiceItem is a resource that stores line item details for an invoice.

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
await client.invoices.putInvoiceItemsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        item: {
            key: "value",
        },
        description: {
            key: "value",
        },
        custom: {
            key: "value",
        },
        price: {
            key: "value",
        },
        um: {
            key: "value",
        },
        commodityCode: {
            key: "value",
        },
        productCode: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutInvoiceItemsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutInvoiceItemsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this invoice item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutInvoiceItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">deleteInvoiceItemsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteInvoiceItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Invoice Item or a resource that stores line item details for an invoice.

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
await client.invoices.deleteInvoiceItemsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this invoice item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteInvoiceItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoiceItems</a>({ ...params }) -> ButtonclikrApi.GetInvoiceItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Invoice Item. A Invoice Item is a resource that stores line item details for an invoice.

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
await client.invoices.getInvoiceItems({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetInvoiceItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">postInvoiceItems</a>({ ...params }) -> ButtonclikrApi.PostInvoiceItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Invoice Item, a resource that stores line item details for an invoice.

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
await client.invoices.postInvoiceItems({
    login: {
        key: "value",
    },
    item: {
        key: "value",
    },
    description: {
        key: "value",
    },
    custom: {
        key: "value",
    },
    price: {
        key: "value",
    },
    um: {
        key: "value",
    },
    commodityCode: {
        key: "value",
    },
    productCode: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostInvoiceItemsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostInvoiceItemsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostInvoiceItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoiceLineItemsId</a>(id, { ...params }) -> ButtonclikrApi.GetInvoiceLineItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an InvoiceLineItem or Invoice Line Item.

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
await client.invoices.getInvoiceLineItemsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this invoice line item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetInvoiceLineItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">putInvoiceLineItemsId</a>(id, { ...params }) -> ButtonclikrApi.PutInvoiceLineItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an InvoiceLineItem or Invoice Line Item.

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
await client.invoices.putInvoiceLineItemsId(
    {
        key: "value",
    },
    {
        invoice: {
            key: "value",
        },
        invoiceItem: {
            key: "value",
        },
        quantity: {
            key: "value",
        },
        price: {
            key: "value",
        },
        discount: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this invoice line item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutInvoiceLineItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">deleteInvoiceLineItemsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteInvoiceLineItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an InvoiceLineItem or Invoice Line Item.

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
await client.invoices.deleteInvoiceLineItemsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this invoice line item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteInvoiceLineItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoiceLineItems</a>({ ...params }) -> ButtonclikrApi.GetInvoiceLineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an InvoiceLineItem. InvoiceLineItem is a resource that relates an invoice item with an invoice. It holds information such as quantity, and price each item.

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
await client.invoices.getInvoiceLineItems({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetInvoiceLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">postInvoiceLineItems</a>({ ...params }) -> ButtonclikrApi.PostInvoiceLineItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an InvoiceLineItem or Invoice Line Item.InvoiceLineItem is a resource that relates an invoice item with an invoice. It holds information such as quantity, and price each item.

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
await client.invoices.postInvoiceLineItems({
    invoice: {
        key: "value",
    },
    invoiceItem: {
        key: "value",
    },
    quantity: {
        key: "value",
    },
    price: {
        key: "value",
    },
    discount: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostInvoiceLineItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoiceParametersId</a>(id, { ...params }) -> ButtonclikrApi.GetInvoiceParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an invoice parameter that holds a certain configuration used for creating an invoice such as dba, address, and apikey.

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
await client.invoices.getInvoiceParametersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this invoice parameter.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetInvoiceParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">putInvoiceParametersId</a>(id, { ...params }) -> ButtonclikrApi.PutInvoiceParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an invoice parameter.

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
await client.invoices.putInvoiceParametersId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        division: {
            key: "value",
        },
        org: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        locked: ButtonclikrApi.PutInvoiceParametersIdRequestLocked.Zero,
        type: ButtonclikrApi.PutInvoiceParametersIdRequestType.Apikey,
        value: ButtonclikrApi.PutInvoiceParametersIdRequestValue.Abw,
        inactive: ButtonclikrApi.PutInvoiceParametersIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutInvoiceParametersIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this invoice parameter.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutInvoiceParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">deleteInvoiceParametersId</a>(id, { ...params }) -> ButtonclikrApi.DeleteInvoiceParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Invoice Parameter.

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
await client.invoices.deleteInvoiceParametersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this invoice parameter.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteInvoiceParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoiceParameters</a>({ ...params }) -> ButtonclikrApi.GetInvoiceParametersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an invoice parameter resource that holds a certain configuration used for creating an invoice, including dba, address, and api key.

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
await client.invoices.getInvoiceParameters({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetInvoiceParametersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">postInvoiceParameters</a>({ ...params }) -> ButtonclikrApi.PostInvoiceParametersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Invoice Parameter that holds a certain configuration used for creating an invoice such as dba, address, and apikey.

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
await client.invoices.postInvoiceParameters({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    division: {
        key: "value",
    },
    org: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    locked: ButtonclikrApi.PostInvoiceParametersRequestLocked.Zero,
    type: ButtonclikrApi.PostInvoiceParametersRequestType.Apikey,
    value: ButtonclikrApi.PostInvoiceParametersRequestValue.Abw,
    inactive: ButtonclikrApi.PostInvoiceParametersRequestInactive.Zero,
    frozen: ButtonclikrApi.PostInvoiceParametersRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostInvoiceParametersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoiceResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetInvoiceResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an invoiceResults resource that represents the result of an invoice processing, which is generated when a customer pays for an invoice.

Details:

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
await client.invoices.getInvoiceResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this invoice result.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetInvoiceResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoiceResults</a>({ ...params }) -> ButtonclikrApi.GetInvoiceResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a InvoiceResults resource that represents the result of an invoice processing. In other words, when the customer pays for an invoice it will then generate an invoice result.

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
await client.invoices.getInvoiceResults({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetInvoiceResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">postInvoiceResults</a>({ ...params }) -> ButtonclikrApi.PostInvoiceResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on invoiceResults coming soon

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
await client.invoices.postInvoiceResults({
    invoice: {
        key: "value",
    },
    txn: {
        key: "value",
    },
    status: ButtonclikrApi.PostInvoiceResultsRequestStatus.Success,
    message: {
        key: "value",
    },
    shippingFirst: {
        key: "value",
    },
    shippingMiddle: {
        key: "value",
    },
    shippingLast: {
        key: "value",
    },
    shippingCompany: {
        key: "value",
    },
    shippingAddress1: {
        key: "value",
    },
    shippingAddress2: {
        key: "value",
    },
    shippingCity: {
        key: "value",
    },
    shippingState: "string",
    shippingZip: {
        key: "value",
    },
    shippingCountry: ButtonclikrApi.PostInvoiceResultsRequestShippingCountry.Abw,
    shippingPhone: {
        key: "value",
    },
    shippingFax: {
        key: "value",
    },
    authorization: {
        key: "value",
    },
    authorizationData: {
        key: "value",
    },
    signature: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostInvoiceResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoicesId</a>(id, { ...params }) -> ButtonclikrApi.GetInvoicesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Invoice or use it for invoicing customers, email the invoice to them, allow them to pay the invoice and track payments with invoices.

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
await client.invoices.getInvoicesId("id");
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

**id:** `string` — The ID of this entity.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetInvoicesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">putInvoicesId</a>(id, { ...params }) -> ButtonclikrApi.PutInvoicesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Invoice. An Invoice resource is used for invoicing customers, email the invoice to them, allow them to pay the invoice and track payments with invoices.

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
await client.invoices.putInvoicesId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        merchant: {
            key: "value",
        },
        customer: {
            key: "value",
        },
        subscription: {
            key: "value",
        },
        allowedPaymentMethods: ButtonclikrApi.PutInvoicesIdRequestAllowedPaymentMethods.Amex,
        title: {
            key: "value",
        },
        message: {
            key: "value",
        },
        total: {
            key: "value",
        },
        tax: {
            key: "value",
        },
        discount: {
            key: "value",
        },
        dueDate: {
            key: "value",
        },
        expirationDate: {
            key: "value",
        },
        sendOn: {
            key: "value",
        },
        status: ButtonclikrApi.PutInvoicesIdRequestStatus.Pending,
        emailStatus: ButtonclikrApi.PutInvoicesIdRequestEmailStatus.Send,
        emails: {
            key: "value",
        },
        type: ButtonclikrApi.PutInvoicesIdRequestType.Single,
        inactive: ButtonclikrApi.PutInvoicesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutInvoicesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this invoice.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutInvoicesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">deleteInvoicesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteInvoicesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Invoice or use it for invoicing customers, email the invoice to them, allow them to pay the invoice and track payments with invoices.

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
await client.invoices.deleteInvoicesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this invoice.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteInvoicesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">getInvoices</a>({ ...params }) -> ButtonclikrApi.GetInvoicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Invoice or query an Invoice. An Invoice resource is used for invoicing customers, email the invoice to them, allow them to pay the invoice and track payments with invoices.

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
await client.invoices.getInvoices();
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

**request:** `ButtonclikrApi.GetInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">postInvoices</a>({ ...params }) -> ButtonclikrApi.PostInvoicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Invoice, which is used for invoicing customers, emailing the invoice to them, allowing them to pay the invoice and tracking payments with invoices.

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
await client.invoices.postInvoices({
    login: "login",
    merchant: "merchant",
    subscription: "subscription",
    number: "number",
    status: ButtonclikrApi.PostInvoicesRequestStatus.Pending,
    emailStatus: ButtonclikrApi.PostInvoicesRequestEmailStatus.Send,
    type: ButtonclikrApi.PostInvoicesRequestType.Single,
    frozen: 1,
    inactive: 1,
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

**request:** `ButtonclikrApi.PostInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## IP Address Lists

<details><summary><code>client.ipAddressLists.<a href="/src/api/resources/ipAddressLists/client/Client.ts">getIplistsId</a>(id, { ...params }) -> ButtonclikrApi.GetIplistsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an iplist resource that represents a list of IP addresses stored as a range between the lowest and highest IP addresses, which can be used to whitelist or blacklist particular incoming IP addresses for a given Login.

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
await client.ipAddressLists.getIplistsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The IP Address List ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetIplistsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IpAddressLists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ipAddressLists.<a href="/src/api/resources/ipAddressLists/client/Client.ts">putIplistsId</a>(id, { ...params }) -> ButtonclikrApi.PutIplistsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

\_CONFLICT Update an iplist resource that represents a list of IP addresses stored as a range between the lowest and highest IP addresses, which can be used to whitelist or blacklist particular incoming IP addresses for a given Login.

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
await client.ipAddressLists.putIplistsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        type: ButtonclikrApi.PutIplistsIdRequestType.Zero,
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutIplistsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutIplistsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The IP Address List ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutIplistsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IpAddressLists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ipAddressLists.<a href="/src/api/resources/ipAddressLists/client/Client.ts">deleteIplistsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteIplistsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an IP lists resource that represents a list of IP addresses, stored as a range between the lowest and highest IP addresses that should be included.

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
await client.ipAddressLists.deleteIplistsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The IP Address List ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteIplistsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IpAddressLists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ipAddressLists.<a href="/src/api/resources/ipAddressLists/client/Client.ts">getIplists</a>({ ...params }) -> ButtonclikrApi.GetIplistsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an iplist resource representing a list of IP addresses stored as a range between the lowest and highest IP addresses that should be included, which you can use to whitelist or blacklist particular incoming IP addresses for a given Login.

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
await client.ipAddressLists.getIplists({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetIplistsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IpAddressLists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ipAddressLists.<a href="/src/api/resources/ipAddressLists/client/Client.ts">postIplists</a>({ ...params }) -> ButtonclikrApi.PostIplistsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an iplists resource. An IP List represents a list of IP (Internet Protocol) addresses, stored as a range between the lowest and highest IP addresses that should be included.
You can use an IP List to whitelist (allow) or blacklist (deny) particular incoming IP addresses for a given Login. If you set up a whitelist for a Login, then the only allowed IP addresses are those in the whitelist, minus any blacklisted IP addresses. If you do not set up a whitelist for a Login, then all IP addresses are allowed, except for those explicitly blacklisted.
You can select whether to store IPv4 or IPv6 addresses in an IP list.

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
await client.ipAddressLists.postIplists({
    login: {
        key: "value",
    },
    version: ButtonclikrApi.PostIplistsRequestVersion.Four,
    type: ButtonclikrApi.PostIplistsRequestType.Zero,
    start: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostIplistsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostIplistsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostIplistsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IpAddressLists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Logins

<details><summary><code>client.logins.<a href="/src/api/resources/logins/client/Client.ts">getLoginsId</a>(id, { ...params }) -> ButtonclikrApi.GetLoginsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A Login is a user of the API and has a unique username and password.

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
await client.logins.getLoginsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Login ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetLoginsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logins.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.logins.<a href="/src/api/resources/logins/client/Client.ts">putLoginsId</a>(id, { ...params }) -> ButtonclikrApi.PutLoginsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Login, which is a user of the API having a unique username and password, TBD.

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
await client.logins.putLoginsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        division: {
            key: "value",
        },
        parentDivision: {
            key: "value",
        },
        roles: {
            key: "value",
        },
        confirmed: ButtonclikrApi.PutLoginsIdRequestConfirmed.Zero,
        lastLogin: {
            key: "value",
        },
        username: {
            key: "value",
        },
        password: {
            key: "value",
        },
        first: {
            key: "value",
        },
        middle: {
            key: "value",
        },
        last: {
            key: "value",
        },
        email: {
            key: "value",
        },
        allowedResources: {
            key: "value",
        },
        restrictedResources: {
            key: "value",
        },
        portalAccess: ButtonclikrApi.PutLoginsIdRequestPortalAccess.Zero,
        mfaEnabled: ButtonclikrApi.PutLoginsIdRequestMfaEnabled.Zero,
        mfaSecret: {
            key: "value",
        },
        mfaEnrolledDate: {
            key: "value",
        },
        mfaType: {
            key: "value",
        },
        address1: {
            key: "value",
        },
        address2: {
            key: "value",
        },
        city: {
            key: "value",
        },
        state: ButtonclikrApi.PutLoginsIdRequestState.Ab,
        zip: {
            key: "value",
        },
        country: ButtonclikrApi.PutLoginsIdRequestCountry.Abw,
        phone: {
            key: "value",
        },
        fax: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutLoginsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutLoginsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Login ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutLoginsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logins.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.logins.<a href="/src/api/resources/logins/client/Client.ts">deleteLoginsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteLoginsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Login. A Login is a user of the API and has a unique username and password.

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
await client.logins.deleteLoginsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Login ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteLoginsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logins.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.logins.<a href="/src/api/resources/logins/client/Client.ts">getLogins</a>({ ...params }) -> ButtonclikrApi.GetLoginsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A Login queries the API as a user, having a unique username and password.

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
await client.logins.getLogins({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetLoginsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logins.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.logins.<a href="/src/api/resources/logins/client/Client.ts">postLogins</a>({ ...params }) -> ButtonclikrApi.PostLoginsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on logins coming soon

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
await client.logins.postLogins({
    login: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    division: {
        key: "value",
    },
    parentDivision: {
        key: "value",
    },
    roles: {
        key: "value",
    },
    confirmed: ButtonclikrApi.PostLoginsRequestConfirmed.Zero,
    username: {
        key: "value",
    },
    password: {
        key: "value",
    },
    first: {
        key: "value",
    },
    middle: {
        key: "value",
    },
    last: {
        key: "value",
    },
    email: {
        key: "value",
    },
    allowedResources: {
        key: "value",
    },
    restrictedResources: {
        key: "value",
    },
    portalAccess: ButtonclikrApi.PostLoginsRequestPortalAccess.Zero,
    mfaEnabled: ButtonclikrApi.PostLoginsRequestMfaEnabled.Zero,
    mfaSecret: {
        key: "value",
    },
    mfaEnrolledDate: {
        key: "value",
    },
    mfaType: {
        key: "value",
    },
    address1: {
        key: "value",
    },
    address2: {
        key: "value",
    },
    city: {
        key: "value",
    },
    state: "string",
    zip: {
        key: "value",
    },
    country: ButtonclikrApi.PostLoginsRequestCountry.Abw,
    phone: {
        key: "value",
    },
    fax: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostLoginsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostLoginsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostLoginsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logins.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.logins.<a href="/src/api/resources/logins/client/Client.ts">getLoginsHelpersId</a>(id, { ...params }) -> ButtonclikrApi.GetLoginsHelpersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on loginsHelpers coming soon

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
await client.logins.getLoginsHelpersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetLoginsHelpersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logins.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.logins.<a href="/src/api/resources/logins/client/Client.ts">putLoginsHelpersId</a>(id, { ...params }) -> ButtonclikrApi.PutLoginsHelpersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on loginsHelpers coming soon

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
await client.logins.putLoginsHelpersId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        loginAsEnabled: ButtonclikrApi.PutLoginsHelpersIdRequestLoginAsEnabled.Zero,
        mfaSmsCodesCount: {
            key: "value",
        },
        mfaSmsWindow: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutLoginsHelpersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logins.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.logins.<a href="/src/api/resources/logins/client/Client.ts">getLoginsHelpers</a>({ ...params }) -> ButtonclikrApi.GetLoginsHelpersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on loginsHelpers coming soon

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
await client.logins.getLoginsHelpers({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetLoginsHelpersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logins.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## MerchantCategoryCodesMcc

<details><summary><code>client.merchantCategoryCodesMcc.<a href="/src/api/resources/merchantCategoryCodesMcc/client/Client.ts">getMccsId</a>(id, { ...params }) -> ButtonclikrApi.GetMccsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a mccs resource.

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
await client.merchantCategoryCodesMcc.getMccsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetMccsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantCategoryCodesMcc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchantCategoryCodesMcc.<a href="/src/api/resources/merchantCategoryCodesMcc/client/Client.ts">putMccsId</a>(id, { ...params }) -> ButtonclikrApi.PutMccsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a mccs resource.

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
await client.merchantCategoryCodesMcc.putMccsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        division: {
            key: "value",
        },
        org: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        mcc: ButtonclikrApi.PutMccsIdRequestMcc.SevenHundredFortyTwo,
        type: ButtonclikrApi.PutMccsIdRequestType.Blacklist,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutMccsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantCategoryCodesMcc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchantCategoryCodesMcc.<a href="/src/api/resources/merchantCategoryCodesMcc/client/Client.ts">deleteMccsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteMccsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Merchant Category Code (MCC) resource.
An MCC resource represents a particular category or line of business that a Merchant can be involved in and whether that category should be allowed or prohibited for the linked Entity.

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
await client.merchantCategoryCodesMcc.deleteMccsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteMccsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantCategoryCodesMcc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchantCategoryCodesMcc.<a href="/src/api/resources/merchantCategoryCodesMcc/client/Client.ts">getMccs</a>({ ...params }) -> ButtonclikrApi.GetMccsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a mccs resource.

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
await client.merchantCategoryCodesMcc.getMccs({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetMccsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantCategoryCodesMcc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchantCategoryCodesMcc.<a href="/src/api/resources/merchantCategoryCodesMcc/client/Client.ts">postMccs</a>({ ...params }) -> ButtonclikrApi.PostMccsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a mccs resource.

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
await client.merchantCategoryCodesMcc.postMccs({
    login: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    division: {
        key: "value",
    },
    org: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    mcc: ButtonclikrApi.PostMccsRequestMcc.SevenHundredFortyTwo,
    type: ButtonclikrApi.PostMccsRequestType.Blacklist,
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

**request:** `ButtonclikrApi.PostMccsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantCategoryCodesMcc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Messages

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">getMessagesId</a>(id, { ...params }) -> ButtonclikrApi.GetMessagesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Message for a messageThreads.

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
await client.messages.getMessagesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this message.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetMessagesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">putMessagesId</a>(id, { ...params }) -> ButtonclikrApi.PutMessagesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a messages or Message resource, which represents a message for a messageThread.

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
await client.messages.putMessagesId(
    {
        key: "value",
    },
    {
        messageThread: {
            key: "value",
        },
        opposingMessage: {
            key: "value",
        },
        type: ButtonclikrApi.PutMessagesIdRequestType.Incoming,
        generated: "string",
        secure: "string",
        read: "string",
        message: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this message.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutMessagesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">getMessages</a>({ ...params }) -> ButtonclikrApi.GetMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Message or query a messages resource that represents a message for a messageThreads.

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
await client.messages.getMessages({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">postMessages</a>({ ...params }) -> ButtonclikrApi.PostMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Messages resource, which represents a message for a messageThread.

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
await client.messages.postMessages({
    messageThread: {
        key: "value",
    },
    opposingMessage: {
        key: "value",
    },
    type: ButtonclikrApi.PostMessagesRequestType.Incoming,
    generated: "string",
    secure: "string",
    message: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Message Threads

<details><summary><code>client.messageThreads.<a href="/src/api/resources/messageThreads/client/Client.ts">getMessageThreadsId</a>(id, { ...params }) -> ButtonclikrApi.GetMessageThreadsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Message Thread that represents the sender, receiver, and subject of the Messages resources.

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
await client.messageThreads.getMessageThreadsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this message thread.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetMessageThreadsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessageThreads.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messageThreads.<a href="/src/api/resources/messageThreads/client/Client.ts">putMessageThreadsId</a>(id, { ...params }) -> ButtonclikrApi.PutMessageThreadsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Message Thread that represents the sender, receiver, and subject of the Messages resources.

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
await client.messageThreads.putMessageThreadsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        forlogin: {
            key: "value",
        },
        hold: {
            key: "value",
        },
        entityReturn: {
            key: "value",
        },
        opposingMessageThread: {
            key: "value",
        },
        folder: {
            key: "value",
        },
        sender: {
            key: "value",
        },
        recipient: {
            key: "value",
        },
        subject: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this message thread.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutMessageThreadsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessageThreads.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messageThreads.<a href="/src/api/resources/messageThreads/client/Client.ts">getMessageThreads</a>({ ...params }) -> ButtonclikrApi.GetMessageThreadsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Message Threads resource that represents the sender, receiver, and subject of the Messages resources

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
await client.messageThreads.getMessageThreads({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetMessageThreadsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessageThreads.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messageThreads.<a href="/src/api/resources/messageThreads/client/Client.ts">postMessageThreads</a>({ ...params }) -> ButtonclikrApi.PostMessageThreadsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a messageThreads resource.
A messageThreads resource represents the sender, receiver, and subject of the Messages resources.

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
await client.messageThreads.postMessageThreads({
    login: {
        key: "value",
    },
    forlogin: {
        key: "value",
    },
    hold: {
        key: "value",
    },
    entityReturn: {
        key: "value",
    },
    opposingMessageThread: {
        key: "value",
    },
    folder: {
        key: "value",
    },
    sender: {
        key: "value",
    },
    recipient: {
        key: "value",
    },
    subject: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostMessageThreadsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessageThreads.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Members

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">getMembersId</a>(id, { ...params }) -> ButtonclikrApi.GetMembersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Member. A Member is a person who is associated with a Merchant; One Member associated with each Merchant can be the 'primary' Member, meaning the Member with the most share of ownership in the Merchant.

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
await client.members.getMembersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this member.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetMembersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Members.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">putMembersId</a>(id, { ...params }) -> ButtonclikrApi.PutMembersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Member, A Member is a person who is associated with a Merchant, One Member associated with each Merchant can be the 'primary' Member, meaning the Member with the most share of ownership in the Merchant.

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
await client.members.putMembersId(
    {
        key: "value",
    },
    {
        merchant: {
            key: "value",
        },
        title: {
            key: "value",
        },
        first: {
            key: "value",
        },
        middle: {
            key: "value",
        },
        last: {
            key: "value",
        },
        ssn: {
            key: "value",
        },
        citizenship: ButtonclikrApi.PutMembersIdRequestCitizenship.Abw,
        dob: {
            key: "value",
        },
        gender: ButtonclikrApi.PutMembersIdRequestGender.Male,
        dl: {
            key: "value",
        },
        dlstate: ButtonclikrApi.PutMembersIdRequestDlstate.Ab,
        email: {
            key: "value",
        },
        ownership: {
            key: "value",
        },
        primary: ButtonclikrApi.PutMembersIdRequestPrimary.Zero,
        creditScore: {
            key: "value",
        },
        creditScoreDate: {
            key: "value",
        },
        significantResponsibility: ButtonclikrApi.PutMembersIdRequestSignificantResponsibility.Zero,
        politicallyExposed: ButtonclikrApi.PutMembersIdRequestPoliticallyExposed.Zero,
        mailingAddress1: {
            key: "value",
        },
        mailingAddress2: {
            key: "value",
        },
        mailingCity: {
            key: "value",
        },
        mailingState: ButtonclikrApi.PutMembersIdRequestMailingState.Ab,
        mailingCountry: ButtonclikrApi.PutMembersIdRequestMailingCountry.Abw,
        mailingPostalCode: {
            key: "value",
        },
        treasuryPrimeRoles: {
            key: "value",
        },
        timezone: ButtonclikrApi.PutMembersIdRequestTimezone.Est,
        address1: {
            key: "value",
        },
        address2: {
            key: "value",
        },
        city: {
            key: "value",
        },
        state: ButtonclikrApi.PutMembersIdRequestState.Ab,
        zip: {
            key: "value",
        },
        country: ButtonclikrApi.PutMembersIdRequestCountry.Abw,
        phone: {
            key: "value",
        },
        fax: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutMembersIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutMembersIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this member.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutMembersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Members.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">deleteMembersId</a>(id, { ...params }) -> ButtonclikrApi.DeleteMembersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Member. A Member is a person who is associated with a Merchant. One Member associated with each Merchant can be the 'primary' Member, meaning the Member with the most share of ownership in the Merchant.

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
await client.members.deleteMembersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this member.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteMembersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Members.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">getMembers</a>({ ...params }) -> ButtonclikrApi.GetMembersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Member, A Member being a person who is associated with a Merchant, and one Member associated with each Merchant can be the 'primary' Member, meaning the Member with the most share of ownership in the Merchant.

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
await client.members.getMembers({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetMembersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Members.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">postMembers</a>({ ...params }) -> ButtonclikrApi.PostMembersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Member. A Member is a person who is associated with a Merchant, and one Member associated with each Merchant can be the 'primary' Member, meaning the Member with the most share of ownership in the Merchant.

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
await client.members.postMembers({
    merchant: "p1_mer_5a1ef5e55656a739a85da21",
    title: "CEO",
    first: "James",
    last: "Smith",
    ssn: "123456789",
    dob: 19590101,
    dl: "123456789",
    dlstate: "NY",
    email: "james.smith@example.com",
    ownership: 8000,
    primary: ButtonclikrApi.PostMembersRequestPrimary.Zero,
    significantResponsibility: ButtonclikrApi.PostMembersRequestSignificantResponsibility.Zero,
    politicallyExposed: ButtonclikrApi.PostMembersRequestPoliticallyExposed.Zero,
    timezone: ButtonclikrApi.PostMembersRequestTimezone.Est,
    address1: "123 Example St.",
    address2: "Suite 403",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: ButtonclikrApi.PostMembersRequestCountry.Usa,
    inactive: ButtonclikrApi.PostMembersRequestInactive.Zero,
    frozen: ButtonclikrApi.PostMembersRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostMembersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Members.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Merchant Results

<details><summary><code>client.merchantResults.<a href="/src/api/resources/merchantResults/client/Client.ts">getMerchantResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetMerchantResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Merchant Result or Query Merchant Results.

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
await client.merchantResults.getMerchantResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, also known as the Merchant ID (MID).

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetMerchantResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantResults.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchantResults.<a href="/src/api/resources/merchantResults/client/Client.ts">getMerchantResults</a>({ ...params }) -> ButtonclikrApi.GetMerchantResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Merchant Result. A Merchant Reusult is a result created after a boarding attempt, it will contain important information related to the boarding and attempt.

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
await client.merchantResults.getMerchantResults({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetMerchantResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MerchantResults.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Merchants

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">getMerchants</a>({ ...params }) -> ButtonclikrApi.GetMerchantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Merchant, an organization that processes credit card payments, each associated with an Entity.

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
await client.merchants.getMerchants();
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

**request:** `ButtonclikrApi.GetMerchantsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Merchants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">postMerchants</a>({ ...params }) -> ButtonclikrApi.PostMerchantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Merchant. Details for creating one will be available soon.

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
await client.merchants.postMerchants({
    entity: 1,
    dba: 1,
    new: 0,
    established: 20101020,
    annualCcSales: 1000000,
    avgTicket: 1,
    mcc: "8111",
    environment: ButtonclikrApi.PostMerchantsRequestEnvironment.Supermarket,
    status: 1,
    saqDate: new Date("2024-01-15T09:30:00.000Z"),
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.PostMerchantsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Merchants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">getMerchantsId</a>(id, { ...params }) -> ButtonclikrApi.GetMerchantsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Merchant, which is an organization that processes credit card payments and each is associated with an Entity.

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
await client.merchants.getMerchantsId("id");
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

**id:** `string` — The ID of this resource, also known as the Merchant ID (MID).

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetMerchantsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Merchants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">putMerchantsId</a>(id, { ...params }) -> ButtonclikrApi.PutMerchantsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Merchant, A Merchant is an organization that processes credit card payments. Each Merchant is associated with an Entity.

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
await client.merchants.putMerchantsId("id", {
    entity: 1,
    new: 1,
    established: 20101021,
    annualCcSales: 1,
    avgTicket: 1,
    environment: ButtonclikrApi.PutMerchantsIdRequestEnvironment.Supermarket,
    status: 1,
    saqDate: new Date("2024-01-15T09:30:00.000Z"),
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this resource, also known as the Merchant ID (MID).

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutMerchantsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Merchants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">deleteMerchantsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteMerchantsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Merchant. A Merchant is an organization that processes credit card payments. Each Merchant is associated with an Entity.

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
await client.merchants.deleteMerchantsId("id");
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

**id:** `string` — The ID of this resource, also known as the Merchant ID (MID).

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteMerchantsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Merchants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Mappings

<details><summary><code>client.mappings.<a href="/src/api/resources/mappings/client/Client.ts">getMappingsId</a>(id, { ...params }) -> ButtonclikrApi.GetMappingsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Mapping resource.

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
await client.mappings.getMappingsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Mapping ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetMappingsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mappings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mappings.<a href="/src/api/resources/mappings/client/Client.ts">putMappingsId</a>(id, { ...params }) -> ButtonclikrApi.PutMappingsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Mapping. A Mapping represents a way to re-map the fields in the API for either input or output, using a set of JSON field mappings. For example, if your system uses a different format for output data that it will send to the API, then you can re-map the input fields for the API using a Mapping.

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
await client.mappings.putMappingsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        input: {
            key: "value",
        },
        output: {
            key: "value",
        },
        namespace: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource and The Mapping ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutMappingsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mappings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mappings.<a href="/src/api/resources/mappings/client/Client.ts">deleteMappingsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteMappingsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Mapping. A Mapping represents a way to re-map the fields in the API for either input or output, using a set of JSON field mappings.

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
await client.mappings.deleteMappingsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Mapping ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteMappingsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mappings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mappings.<a href="/src/api/resources/mappings/client/Client.ts">getMappings</a>({ ...params }) -> ButtonclikrApi.GetMappingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Mapping resource.
A Mapping resource represents a way to re-map the fields in the API for either input or output, using a set of JSON field mappings.
For example, if your system uses a different format for output data that it will send to the API, then you can re-map the input fields for the API using a Mapping resource.

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
await client.mappings.getMappings({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetMappingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mappings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mappings.<a href="/src/api/resources/mappings/client/Client.ts">postMappings</a>({ ...params }) -> ButtonclikrApi.PostMappingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Mapping resource.
A Mapping resource represents a way to re-map the fields in the API for either input or output, using a set of JSON field mappings.
For example, if your system uses a different format for output data that it will send to the API, then you can re-map the input fields for the API using a Mapping resource.

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
await client.mappings.postMappings({
    login: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    input: {
        key: "value",
    },
    output: {
        key: "value",
    },
    namespace: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostMappingsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mappings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## MfaRecoveryCodes

<details><summary><code>client.mfaRecoveryCodes.<a href="/src/api/resources/mfaRecoveryCodes/client/Client.ts">getMfaRecoveryCodesId</a>(id, { ...params }) -> ButtonclikrApi.GetMfaRecoveryCodesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on mfaRecoveryCodes coming soon

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
await client.mfaRecoveryCodes.getMfaRecoveryCodesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetMfaRecoveryCodesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MfaRecoveryCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mfaRecoveryCodes.<a href="/src/api/resources/mfaRecoveryCodes/client/Client.ts">putMfaRecoveryCodesId</a>(id, { ...params }) -> ButtonclikrApi.PutMfaRecoveryCodesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on mfaRecoveryCodes coming soon

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
await client.mfaRecoveryCodes.putMfaRecoveryCodesId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        code: {
            key: "value",
        },
        used: ButtonclikrApi.PutMfaRecoveryCodesIdRequestUsed.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutMfaRecoveryCodesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MfaRecoveryCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mfaRecoveryCodes.<a href="/src/api/resources/mfaRecoveryCodes/client/Client.ts">deleteMfaRecoveryCodesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteMfaRecoveryCodesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for delete on mfaRecoveryCodes coming soon

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
await client.mfaRecoveryCodes.deleteMfaRecoveryCodesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteMfaRecoveryCodesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MfaRecoveryCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mfaRecoveryCodes.<a href="/src/api/resources/mfaRecoveryCodes/client/Client.ts">getMfaRecoveryCodes</a>({ ...params }) -> ButtonclikrApi.GetMfaRecoveryCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on mfaRecoveryCodes coming soon

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
await client.mfaRecoveryCodes.getMfaRecoveryCodes({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetMfaRecoveryCodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MfaRecoveryCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mfaRecoveryCodes.<a href="/src/api/resources/mfaRecoveryCodes/client/Client.ts">postMfaRecoveryCodes</a>({ ...params }) -> ButtonclikrApi.PostMfaRecoveryCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on mfaRecoveryCodes coming soon

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
await client.mfaRecoveryCodes.postMfaRecoveryCodes({
    login: {
        key: "value",
    },
    code: {
        key: "value",
    },
    used: ButtonclikrApi.PostMfaRecoveryCodesRequestUsed.Zero,
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

**request:** `ButtonclikrApi.PostMfaRecoveryCodesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MfaRecoveryCodes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notes

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">getNotesId</a>(id, { ...params }) -> ButtonclikrApi.GetNotesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Notes resource that represents risk management notes, reviews, and releases for a Hold, Txn, and Entity specific data.

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
await client.notes.getNotesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this note.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetNotesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">putNotesId</a>(id, { ...params }) -> ButtonclikrApi.PutNotesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Note; Details for update on notes coming soon

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
await client.notes.putNotesId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        txn: {
            key: "value",
        },
        terminalTxn: {
            key: "value",
        },
        hold: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        type: ButtonclikrApi.PutNotesIdRequestType.Note,
        data: {
            key: "value",
        },
        note: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutNotesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutNotesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this note.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutNotesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">deleteNotesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteNotesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Note. Details for deletion on notes coming soon.

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
await client.notes.deleteNotesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this note.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteNotesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">getNotes</a>({ ...params }) -> ButtonclikrApi.GetNotesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Notes resource that represents risk management notes, reviews, and releases for a Hold, Txn, and Entity specific data.

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
await client.notes.getNotes({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetNotesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">postNotes</a>({ ...params }) -> ButtonclikrApi.PostNotesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Notes resource that represents risk management notes, reviews, and releases for a Hold, Txn, and Entity-specific data.

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
await client.notes.postNotes({
    login: {
        key: "value",
    },
    txn: {
        key: "value",
    },
    terminalTxn: {
        key: "value",
    },
    hold: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    type: ButtonclikrApi.PostNotesRequestType.Note,
    data: {
        key: "value",
    },
    note: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostNotesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostNotesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostNotesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">getNoteDocumentsId</a>(id, { ...params }) -> ButtonclikrApi.GetNoteDocumentsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Note Document that represents a file that is related to a specific note record.

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
await client.notes.getNoteDocumentsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this note document.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetNoteDocumentsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">putNoteDocumentsId</a>(id, { ...params }) -> ButtonclikrApi.PutNoteDocumentsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a note document, which represents a file related to a specific note record.

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
await client.notes.putNoteDocumentsId(
    {
        key: "value",
    },
    {
        type: ButtonclikrApi.PutNoteDocumentsIdRequestType.Jpg,
        name: {
            key: "value",
        },
        custom: {
            key: "value",
        },
        description: {
            key: "value",
        },
        status: ButtonclikrApi.PutNoteDocumentsIdRequestStatus.Created,
        documentType: ButtonclikrApi.PutNoteDocumentsIdRequestDocumentType.General,
        inactive: ButtonclikrApi.PutNoteDocumentsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutNoteDocumentsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this note document.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutNoteDocumentsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">deleteNoteDocumentsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteNoteDocumentsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Note Document, which represents a file related to a specific note record.

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
await client.notes.deleteNoteDocumentsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this note document.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteNoteDocumentsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">getNoteDocuments</a>({ ...params }) -> ButtonclikrApi.GetNoteDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Note Document, which represents a file that is related to a specific note record and documents resources.

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
await client.notes.getNoteDocuments({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetNoteDocumentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">postNoteDocuments</a>({ ...params }) -> ButtonclikrApi.PostNoteDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a note document, representing a file related to a specific note record.

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
await client.notes.postNoteDocuments({
    note: {
        key: "value",
    },
    type: ButtonclikrApi.PostNoteDocumentsRequestType.Jpg,
    name: {
        key: "value",
    },
    custom: {
        key: "value",
    },
    description: {
        key: "value",
    },
    status: ButtonclikrApi.PostNoteDocumentsRequestStatus.Created,
    documentType: ButtonclikrApi.PostNoteDocumentsRequestDocumentType.General,
    inactive: ButtonclikrApi.PostNoteDocumentsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostNoteDocumentsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostNoteDocumentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Orgs

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">getOrgEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.GetOrgEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an orgEntity.

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
await client.orgs.getOrgEntitiesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and the Org Entity ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetOrgEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">putOrgEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.PutOrgEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an orgEntity.

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
await client.orgs.putOrgEntitiesId(
    {
        key: "value",
    },
    {
        org: {
            key: "value",
        },
        entity: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource and The Org Entity ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutOrgEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">deleteOrgEntitiesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteOrgEntitiesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Org Entity. An orgEntity is a record of an association between a particular Org and a particular Entity. One Org can contain and be associated with many Entities.

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
await client.orgs.deleteOrgEntitiesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Org Entity ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteOrgEntitiesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">getOrgEntities</a>({ ...params }) -> ButtonclikrApi.GetOrgEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an orgEntity.
An orgEntity is a record of an association between a particular Org and a particular Entity.
You can associate Entities with an Org by creating orgEntity resources. One Org can contain and be associated with many Entities.

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
await client.orgs.getOrgEntities({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetOrgEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">postOrgEntities</a>({ ...params }) -> ButtonclikrApi.PostOrgEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an orgEntity.
An orgEntity is a record of an association between a particular Org and a particular Entity.
You can associate Entities with an Org by creating orgEntity resources. One Org can contain and be associated with many Entities.

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
await client.orgs.postOrgEntities({
    org: {
        key: "value",
    },
    entity: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostOrgEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">getOrgFlowActionsId</a>(id, { ...params }) -> ButtonclikrApi.GetOrgFlowActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Org Flow Actions resource.

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
await client.orgs.getOrgFlowActionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Org Flow Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetOrgFlowActionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">putOrgFlowActionsId</a>(id, { ...params }) -> ButtonclikrApi.PutOrgFlowActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Org Flow Action.

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
await client.orgs.putOrgFlowActionsId(
    {
        key: "value",
    },
    {
        orgFlow: {
            key: "value",
        },
        org: {
            key: "value",
        },
        action: ButtonclikrApi.PutOrgFlowActionsIdRequestAction.Add,
    }
);
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

**id:** `unknown` — The ID of this resource or The Org Flow Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutOrgFlowActionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">deleteOrgFlowActionsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteOrgFlowActionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Org Flow Action.

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
await client.orgs.deleteOrgFlowActionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Org Flow Action ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteOrgFlowActionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">getOrgFlowActions</a>({ ...params }) -> ButtonclikrApi.GetOrgFlowActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an orgFlowActions resource.
An orgFlowActions resource lets you add an Entity defined in the associated orgFlow to an Org, or remove an Entity identified in the same way from an Org.

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
await client.orgs.getOrgFlowActions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetOrgFlowActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">postOrgFlowActions</a>({ ...params }) -> ButtonclikrApi.PostOrgFlowActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Org Flow Action that lets you add an Entity defined in the associated orgFlow to an Org, or remove an Entity identified in the same way from an Org.

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
await client.orgs.postOrgFlowActions({
    orgFlow: {
        key: "value",
    },
    org: {
        key: "value",
    },
    action: ButtonclikrApi.PostOrgFlowActionsRequestAction.Add,
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

**request:** `ButtonclikrApi.PostOrgFlowActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">getOrgFlowsId</a>(id, { ...params }) -> ButtonclikrApi.GetOrgFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Org Flow represents a way to trigger the addition or removal of the Merchants associated with a Login to a particular Org, optionally setting this addition or removal to be recursive, affecting all Merchants in any child Logins.

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
await client.orgs.getOrgFlowsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, also known as The Org Flow ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetOrgFlowsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">putOrgFlowsId</a>(id, { ...params }) -> ButtonclikrApi.PutOrgFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Org Flow. An orgFlows resource represents a way to trigger the addition or removal of the Merchants associated with a Login to a particular Org, optionally set to be recursive, affecting all Merchants in any child Logins.

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
await client.orgs.putOrgFlowsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        forlogin: {
            key: "value",
        },
        team: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        trigger: ButtonclikrApi.PutOrgFlowsIdRequestTrigger.Create,
    }
);
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

**id:** `unknown` — The ID of this resource and The Org Flow ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutOrgFlowsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">deleteOrgFlowsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteOrgFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Org Flow.

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
await client.orgs.deleteOrgFlowsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, also known as The Org Flow ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteOrgFlowsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">getOrgFlows</a>({ ...params }) -> ButtonclikrApi.GetOrgFlowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an orgFlows resource.
An orgFlows resource represents a way to trigger the addition or removal of the Merchants associated with a Login to a particular Org.
You can optionally set this addition or removal to be recursive, affecting all Merchants in any child Logins.

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
await client.orgs.getOrgFlows({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetOrgFlowsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">postOrgFlows</a>({ ...params }) -> ButtonclikrApi.PostOrgFlowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an orgFlows resource.
An orgFlows resource represents a way to trigger the addition or removal of the Merchants associated with a Login to a particular Org.
You can optionally set this addition or removal to be recursive, affecting all Merchants in any child Logins.

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
await client.orgs.postOrgFlows({
    login: {
        key: "value",
    },
    forlogin: {
        key: "value",
    },
    team: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    trigger: ButtonclikrApi.PostOrgFlowsRequestTrigger.Create,
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

**request:** `ButtonclikrApi.PostOrgFlowsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">getOrgsId</a>(id, { ...params }) -> ButtonclikrApi.GetOrgsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Org, which is a collection of Entities that you can associate with by creating orgEntity resources.

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
await client.orgs.getOrgsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and the Org ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetOrgsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">putOrgsId</a>(id, { ...params }) -> ButtonclikrApi.PutOrgsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Org, which is a collection of Entities that you can associate with other entities by creating orgEntity resources.

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
await client.orgs.putOrgsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
    }
);
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

**id:** `unknown` — The ID of this resource and the Org ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutOrgsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">deleteOrgsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteOrgsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Organization, which is a collection of Entities that you can associate with it by creating organization-entity resources.

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
await client.orgs.deleteOrgsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Org ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteOrgsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">getOrgs</a>({ ...params }) -> ButtonclikrApi.GetOrgsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an Org, which is a collection of Entities, and you can associate Entities with an Org by creating orgEntity resources.

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
await client.orgs.getOrgs({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetOrgsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.orgs.<a href="/src/api/resources/orgs/client/Client.ts">postOrgs</a>({ ...params }) -> ButtonclikrApi.PostOrgsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Org which is a collection of Entities and allows you to associate Entities with it by creating orgEntity resources.

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
await client.orgs.postOrgs({
    login: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostOrgsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Orgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Parameters

<details><summary><code>client.parameters.<a href="/src/api/resources/parameters/client/Client.ts">getParametersId</a>(id, { ...params }) -> ButtonclikrApi.GetParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Parameter resource.
A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
When applied to an Org, the parameter affects every entity in that Org.
Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.

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
await client.parameters.getParametersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parameters.<a href="/src/api/resources/parameters/client/Client.ts">putParametersId</a>(id, { ...params }) -> ButtonclikrApi.PutParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Parameter resource.
A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
When applied to an Org, the parameter affects every entity in that Org.
Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.

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
await client.parameters.putParametersId(
    {
        key: "value",
    },
    {
        division: {
            key: "value",
        },
        login: {
            key: "value",
        },
        org: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        minTxnTotal: {
            key: "value",
        },
        maxTxnTotal: {
            key: "value",
        },
        maxTxnDailyTotal: {
            key: "value",
        },
        maxTxnDailyNum: {
            key: "value",
        },
        maxTxnMonthlyTotal: {
            key: "value",
        },
        maxTxnMonthlyNum: {
            key: "value",
        },
        minFundsPayoutTotal: {
            key: "value",
        },
        minDebitedAvailableFunds: {
            key: "value",
        },
        maxSubscriptionFailures: {
            key: "value",
        },
        minPayoutCreditTotal: {
            key: "value",
        },
        maxPayoutCreditTotal: {
            key: "value",
        },
        minPayoutDebitTotal: {
            key: "value",
        },
        maxPayoutDebitTotal: {
            key: "value",
        },
        minAvailableFunds: {
            key: "value",
        },
        minStatementDebitPayoutDelay: {
            key: "value",
        },
        minPayoutDelay: {
            key: "value",
        },
        minFirstPayoutDelay: {
            key: "value",
        },
        payoutAdjustSubcents: ButtonclikrApi.PutParametersIdRequestPayoutAdjustSubcents.Zero,
        payoutDelayIncludeOffDays: ButtonclikrApi.PutParametersIdRequestPayoutDelayIncludeOffDays.Zero,
        payoutIncludePending: ButtonclikrApi.PutParametersIdRequestPayoutIncludePending.Zero,
        amexEnabled: ButtonclikrApi.PutParametersIdRequestAmexEnabled.Zero,
        optBlueEnabled: ButtonclikrApi.PutParametersIdRequestOptBlueEnabled.Zero,
        discoverEnabled: ButtonclikrApi.PutParametersIdRequestDiscoverEnabled.Zero,
        discoverAcquiredEnabled: ButtonclikrApi.PutParametersIdRequestDiscoverAcquiredEnabled.Zero,
        mc3DsEnabled: ButtonclikrApi.PutParametersIdRequestMc3DsEnabled.Zero,
        visa3DsEnabled: ButtonclikrApi.PutParametersIdRequestVisa3DsEnabled.Zero,
        amex3DsEnabled: ButtonclikrApi.PutParametersIdRequestAmex3DsEnabled.Zero,
        discover3DsEnabled: ButtonclikrApi.PutParametersIdRequestDiscover3DsEnabled.Zero,
        eCheckEnabled: ButtonclikrApi.PutParametersIdRequestECheckEnabled.Zero,
        fundingEnabled: ButtonclikrApi.PutParametersIdRequestFundingEnabled.Zero,
        vendorFeesEnabled: ButtonclikrApi.PutParametersIdRequestVendorFeesEnabled.Zero,
        vendorFeesExternal: ButtonclikrApi.PutParametersIdRequestVendorFeesExternal.Zero,
        verifyDisabled: ButtonclikrApi.PutParametersIdRequestVerifyDisabled.Zero,
        verifyForBoardingNotRequired: ButtonclikrApi.PutParametersIdRequestVerifyForBoardingNotRequired.Zero,
        verifyForPayoutNotRequired: ButtonclikrApi.PutParametersIdRequestVerifyForPayoutNotRequired.Zero,
        refundReleasesReserve: ButtonclikrApi.PutParametersIdRequestRefundReleasesReserve.Zero,
        visaMisuseSettlement: {
            key: "value",
        },
        visaMisuseTravelAutoSettlement: {
            key: "value",
        },
        visaMisuseCardPresentReversal: {
            key: "value",
        },
        visaMisuseCardNotPresentReversal: {
            key: "value",
        },
        mcMisuseSettlement: {
            key: "value",
        },
        mcMisuseCardPresentReversal: {
            key: "value",
        },
        mcMisuseCardNotPresentReversal: {
            key: "value",
        },
        mcMisuseTravelAutoReversal: {
            key: "value",
        },
        minEcheckCaptureDelay: {
            key: "value",
        },
        minDebitProcessingDelay: {
            key: "value",
        },
        boardingDisabled: ButtonclikrApi.PutParametersIdRequestBoardingDisabled.Zero,
        autoReboardDays: {
            key: "value",
        },
        minBoardingOwnership: {
            key: "value",
        },
        debtRepaymentEnabled: ButtonclikrApi.PutParametersIdRequestDebtRepaymentEnabled.Zero,
        boardingExemptionsDisabled: ButtonclikrApi.PutParametersIdRequestBoardingExemptionsDisabled.Zero,
        autoTaxExemptEnabled: ButtonclikrApi.PutParametersIdRequestAutoTaxExemptEnabled.Zero,
        surchargeEnabled: ButtonclikrApi.PutParametersIdRequestSurchargeEnabled.Zero,
        mcInstantPayoutsEnabled: ButtonclikrApi.PutParametersIdRequestMcInstantPayoutsEnabled.Zero,
        visaInstantPayoutsEnabled: ButtonclikrApi.PutParametersIdRequestVisaInstantPayoutsEnabled.Zero,
        mcInstantPayoutMin: {
            key: "value",
        },
        mcInstantPayoutMax: {
            key: "value",
        },
        visaInstantPayoutMin: {
            key: "value",
        },
        visaInstantPayoutMax: {
            key: "value",
        },
        sameDayPayoutsEnabled: ButtonclikrApi.PutParametersIdRequestSameDayPayoutsEnabled.Zero,
        sameDayPayoutsDailyMax: {
            key: "value",
        },
        minSameDayPayoutCreditTotal: {
            key: "value",
        },
        maxSameDayPayoutCreditTotal: {
            key: "value",
        },
        minSameDayPayoutDebitTotal: {
            key: "value",
        },
        maxSameDayPayoutDebitTotal: {
            key: "value",
        },
        applePayEnabled: ButtonclikrApi.PutParametersIdRequestApplePayEnabled.Zero,
        googlePayEnabled: ButtonclikrApi.PutParametersIdRequestGooglePayEnabled.Zero,
        accountUpdaterEnabled: ButtonclikrApi.PutParametersIdRequestAccountUpdaterEnabled.Zero,
        updateAllTokensEnabled: ButtonclikrApi.PutParametersIdRequestUpdateAllTokensEnabled.Zero,
        accountUpdaterFrequency: {
            key: "value",
        },
        getParametersEnabled: ButtonclikrApi.PutParametersIdRequestGetParametersEnabled.Zero,
        payoutCutoffTime: {
            key: "value",
        },
        declineNotificationEmail: ButtonclikrApi.PutParametersIdRequestDeclineNotificationEmail.Zero,
        decisionMicroserviceEnabled: ButtonclikrApi.PutParametersIdRequestDecisionMicroserviceEnabled.Zero,
        holdMessagesDisabled: ButtonclikrApi.PutParametersIdRequestHoldMessagesDisabled.Zero,
        txnDecisionMicroserviceEnabled: ButtonclikrApi.PutParametersIdRequestTxnDecisionMicroserviceEnabled.Zero,
        omniTokenEnabled: ButtonclikrApi.PutParametersIdRequestOmniTokenEnabled.Zero,
        passTokenEnabled: ButtonclikrApi.PutParametersIdRequestPassTokenEnabled.Zero,
        debitGracePeriod: {
            key: "value",
        },
        negativeBalanceLimit: {
            key: "value",
        },
        negativeBalanceEmail: ButtonclikrApi.PutParametersIdRequestNegativeBalanceEmail.Zero,
        positiveBalanceEmail: ButtonclikrApi.PutParametersIdRequestPositiveBalanceEmail.Zero,
        loginAsEnabled: ButtonclikrApi.PutParametersIdRequestLoginAsEnabled.Zero,
        mfaEnabled: ButtonclikrApi.PutParametersIdRequestMfaEnabled.Zero,
        portalAccessEnabled: ButtonclikrApi.PutParametersIdRequestPortalAccessEnabled.Zero,
        bankAccountAddStopEmail: ButtonclikrApi.PutParametersIdRequestBankAccountAddStopEmail.Zero,
        bankAccountUpdateStopEmail: ButtonclikrApi.PutParametersIdRequestBankAccountUpdateStopEmail.Zero,
        inactive: ButtonclikrApi.PutParametersIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutParametersIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parameters.<a href="/src/api/resources/parameters/client/Client.ts">deleteParametersId</a>(id, { ...params }) -> ButtonclikrApi.DeleteParametersIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Parameter resource.
A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
When applied to an Org, the parameter affects every entity in that Org.
Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.

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
await client.parameters.deleteParametersId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteParametersIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parameters.<a href="/src/api/resources/parameters/client/Client.ts">getParameters</a>({ ...params }) -> ButtonclikrApi.GetParametersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Parameter resource.
A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
When applied to an Org, the parameter affects every entity in that Org.
Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.

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
await client.parameters.getParameters({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetParametersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parameters.<a href="/src/api/resources/parameters/client/Client.ts">postParameters</a>({ ...params }) -> ButtonclikrApi.PostParametersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Parameter resource.
A Parameter resource is a setting that you can apply to an Org or Entity that determines key attributes of how it is able to use the API.
When applied to an Org, the parameter affects every entity in that Org.
Examples of Parameters include minimum and maximum processing totals and whether particular card types are enabled.

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
await client.parameters.postParameters({
    division: {
        key: "value",
    },
    login: {
        key: "value",
    },
    org: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    minTxnTotal: {
        key: "value",
    },
    maxTxnTotal: {
        key: "value",
    },
    maxTxnDailyTotal: {
        key: "value",
    },
    maxTxnDailyNum: {
        key: "value",
    },
    maxTxnMonthlyTotal: {
        key: "value",
    },
    maxTxnMonthlyNum: {
        key: "value",
    },
    minFundsPayoutTotal: {
        key: "value",
    },
    minDebitedAvailableFunds: {
        key: "value",
    },
    maxSubscriptionFailures: {
        key: "value",
    },
    minPayoutCreditTotal: {
        key: "value",
    },
    maxPayoutCreditTotal: {
        key: "value",
    },
    minPayoutDebitTotal: {
        key: "value",
    },
    maxPayoutDebitTotal: {
        key: "value",
    },
    minAvailableFunds: {
        key: "value",
    },
    minStatementDebitPayoutDelay: {
        key: "value",
    },
    minPayoutDelay: {
        key: "value",
    },
    minFirstPayoutDelay: {
        key: "value",
    },
    payoutAdjustSubcents: ButtonclikrApi.PostParametersRequestPayoutAdjustSubcents.Zero,
    payoutDelayIncludeOffDays: ButtonclikrApi.PostParametersRequestPayoutDelayIncludeOffDays.Zero,
    payoutIncludePending: ButtonclikrApi.PostParametersRequestPayoutIncludePending.Zero,
    amexEnabled: ButtonclikrApi.PostParametersRequestAmexEnabled.Zero,
    optBlueEnabled: ButtonclikrApi.PostParametersRequestOptBlueEnabled.Zero,
    discoverEnabled: ButtonclikrApi.PostParametersRequestDiscoverEnabled.Zero,
    discoverAcquiredEnabled: ButtonclikrApi.PostParametersRequestDiscoverAcquiredEnabled.Zero,
    mc3DsEnabled: ButtonclikrApi.PostParametersRequestMc3DsEnabled.Zero,
    visa3DsEnabled: ButtonclikrApi.PostParametersRequestVisa3DsEnabled.Zero,
    amex3DsEnabled: ButtonclikrApi.PostParametersRequestAmex3DsEnabled.Zero,
    discover3DsEnabled: ButtonclikrApi.PostParametersRequestDiscover3DsEnabled.Zero,
    eCheckEnabled: ButtonclikrApi.PostParametersRequestECheckEnabled.Zero,
    fundingEnabled: ButtonclikrApi.PostParametersRequestFundingEnabled.Zero,
    vendorFeesEnabled: ButtonclikrApi.PostParametersRequestVendorFeesEnabled.Zero,
    vendorFeesExternal: ButtonclikrApi.PostParametersRequestVendorFeesExternal.Zero,
    verifyDisabled: ButtonclikrApi.PostParametersRequestVerifyDisabled.Zero,
    verifyForBoardingNotRequired: ButtonclikrApi.PostParametersRequestVerifyForBoardingNotRequired.Zero,
    verifyForPayoutNotRequired: ButtonclikrApi.PostParametersRequestVerifyForPayoutNotRequired.Zero,
    refundReleasesReserve: ButtonclikrApi.PostParametersRequestRefundReleasesReserve.Zero,
    visaMisuseSettlement: {
        key: "value",
    },
    visaMisuseTravelAutoSettlement: {
        key: "value",
    },
    visaMisuseCardPresentReversal: {
        key: "value",
    },
    visaMisuseCardNotPresentReversal: {
        key: "value",
    },
    mcMisuseSettlement: {
        key: "value",
    },
    mcMisuseCardPresentReversal: {
        key: "value",
    },
    mcMisuseCardNotPresentReversal: {
        key: "value",
    },
    mcMisuseTravelAutoReversal: {
        key: "value",
    },
    minEcheckCaptureDelay: {
        key: "value",
    },
    minDebitProcessingDelay: {
        key: "value",
    },
    boardingDisabled: ButtonclikrApi.PostParametersRequestBoardingDisabled.Zero,
    autoReboardDays: {
        key: "value",
    },
    minBoardingOwnership: {
        key: "value",
    },
    debtRepaymentEnabled: ButtonclikrApi.PostParametersRequestDebtRepaymentEnabled.Zero,
    boardingExemptionsDisabled: ButtonclikrApi.PostParametersRequestBoardingExemptionsDisabled.Zero,
    autoTaxExemptEnabled: ButtonclikrApi.PostParametersRequestAutoTaxExemptEnabled.Zero,
    surchargeEnabled: ButtonclikrApi.PostParametersRequestSurchargeEnabled.Zero,
    mcInstantPayoutsEnabled: ButtonclikrApi.PostParametersRequestMcInstantPayoutsEnabled.Zero,
    visaInstantPayoutsEnabled: ButtonclikrApi.PostParametersRequestVisaInstantPayoutsEnabled.Zero,
    mcInstantPayoutMin: {
        key: "value",
    },
    mcInstantPayoutMax: {
        key: "value",
    },
    visaInstantPayoutMin: {
        key: "value",
    },
    visaInstantPayoutMax: {
        key: "value",
    },
    sameDayPayoutsEnabled: ButtonclikrApi.PostParametersRequestSameDayPayoutsEnabled.Zero,
    sameDayPayoutsDailyMax: {
        key: "value",
    },
    minSameDayPayoutCreditTotal: {
        key: "value",
    },
    maxSameDayPayoutCreditTotal: {
        key: "value",
    },
    minSameDayPayoutDebitTotal: {
        key: "value",
    },
    maxSameDayPayoutDebitTotal: {
        key: "value",
    },
    applePayEnabled: ButtonclikrApi.PostParametersRequestApplePayEnabled.Zero,
    googlePayEnabled: ButtonclikrApi.PostParametersRequestGooglePayEnabled.Zero,
    accountUpdaterEnabled: ButtonclikrApi.PostParametersRequestAccountUpdaterEnabled.Zero,
    updateAllTokensEnabled: ButtonclikrApi.PostParametersRequestUpdateAllTokensEnabled.Zero,
    accountUpdaterFrequency: {
        key: "value",
    },
    getParametersEnabled: ButtonclikrApi.PostParametersRequestGetParametersEnabled.Zero,
    payoutCutoffTime: {
        key: "value",
    },
    declineNotificationEmail: ButtonclikrApi.PostParametersRequestDeclineNotificationEmail.Zero,
    decisionMicroserviceEnabled: ButtonclikrApi.PostParametersRequestDecisionMicroserviceEnabled.Zero,
    holdMessagesDisabled: ButtonclikrApi.PostParametersRequestHoldMessagesDisabled.Zero,
    txnDecisionMicroserviceEnabled: ButtonclikrApi.PostParametersRequestTxnDecisionMicroserviceEnabled.Zero,
    omniTokenEnabled: ButtonclikrApi.PostParametersRequestOmniTokenEnabled.Zero,
    passTokenEnabled: ButtonclikrApi.PostParametersRequestPassTokenEnabled.Zero,
    debitGracePeriod: {
        key: "value",
    },
    negativeBalanceLimit: {
        key: "value",
    },
    negativeBalanceEmail: ButtonclikrApi.PostParametersRequestNegativeBalanceEmail.Zero,
    positiveBalanceEmail: ButtonclikrApi.PostParametersRequestPositiveBalanceEmail.Zero,
    loginAsEnabled: ButtonclikrApi.PostParametersRequestLoginAsEnabled.Zero,
    mfaEnabled: ButtonclikrApi.PostParametersRequestMfaEnabled.Zero,
    portalAccessEnabled: ButtonclikrApi.PostParametersRequestPortalAccessEnabled.Zero,
    bankAccountAddStopEmail: ButtonclikrApi.PostParametersRequestBankAccountAddStopEmail.Zero,
    bankAccountUpdateStopEmail: ButtonclikrApi.PostParametersRequestBankAccountUpdateStopEmail.Zero,
    inactive: ButtonclikrApi.PostParametersRequestInactive.Zero,
    frozen: ButtonclikrApi.PostParametersRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostParametersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parameters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Partitions

<details><summary><code>client.partitions.<a href="/src/api/resources/partitions/client/Client.ts">getPartitionsId</a>(id, { ...params }) -> ButtonclikrApi.GetPartitionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Partition.
A Partition resource represents a distinct and separate space within the API with its own name and set of resources.
You can use a Partition to enable multi-tenant operation.

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
await client.partitions.getPartitionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetPartitionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Partitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.partitions.<a href="/src/api/resources/partitions/client/Client.ts">putPartitionsId</a>(id, { ...params }) -> ButtonclikrApi.PutPartitionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Partition.
A Partition resource represents a distinct and separate space within the API with its own name and set of resources.
You can use a Partition to enable multi-tenant operation.

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
await client.partitions.putPartitionsId(
    {
        key: "value",
    },
    {
        name: {
            key: "value",
        },
        email: {
            key: "value",
        },
        minPasswordLength: {
            key: "value",
        },
        minPasswordComplexity: ButtonclikrApi.PutPartitionsIdRequestMinPasswordComplexity.One,
        minPasswordHistory: {
            key: "value",
        },
        noEmailConfirmation: ButtonclikrApi.PutPartitionsIdRequestNoEmailConfirmation.Zero,
        noHoldEmail: ButtonclikrApi.PutPartitionsIdRequestNoHoldEmail.Zero,
        changeManagementEnabled: ButtonclikrApi.PutPartitionsIdRequestChangeManagementEnabled.Zero,
        currency: ButtonclikrApi.PutPartitionsIdRequestCurrency.Aed,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutPartitionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Partitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.partitions.<a href="/src/api/resources/partitions/client/Client.ts">getPartitions</a>({ ...params }) -> ButtonclikrApi.GetPartitionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Partition.
A Partition resource represents a distinct and separate space within the API with its own name and set of resources.
You can use a Partition to enable multi-tenant operation.

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
await client.partitions.getPartitions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetPartitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Partitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.partitions.<a href="/src/api/resources/partitions/client/Client.ts">postPartitions</a>({ ...params }) -> ButtonclikrApi.PostPartitionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Partition.
A Partition resource represents a distinct and separate space within the API with its own name and set of resources.
You can use a Partition to enable multi-tenant operation.

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
await client.partitions.postPartitions({
    login: {
        key: "value",
    },
    name: {
        key: "value",
    },
    email: {
        key: "value",
    },
    minPasswordLength: {
        key: "value",
    },
    minPasswordComplexity: ButtonclikrApi.PostPartitionsRequestMinPasswordComplexity.One,
    minPasswordHistory: {
        key: "value",
    },
    noEmailConfirmation: ButtonclikrApi.PostPartitionsRequestNoEmailConfirmation.Zero,
    noHoldEmail: ButtonclikrApi.PostPartitionsRequestNoHoldEmail.Zero,
    changeManagementEnabled: ButtonclikrApi.PostPartitionsRequestChangeManagementEnabled.Zero,
    currency: ButtonclikrApi.PostPartitionsRequestCurrency.Aed,
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

**request:** `ButtonclikrApi.PostPartitionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Partitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Facilitator

<details><summary><code>client.facilitator.<a href="/src/api/resources/facilitator/client/Client.ts">getFacilitatorsId</a>(id, { ...params }) -> ButtonclikrApi.GetFacilitatorsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Facilitator resource.
A Facilitator resource represents a payment facilitator that processes payments for a Partition.
You can only associate one Facilitator to each Partition.

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
await client.facilitator.getFacilitatorsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetFacilitatorsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Facilitator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.facilitator.<a href="/src/api/resources/facilitator/client/Client.ts">putFacilitatorsId</a>(id, { ...params }) -> ButtonclikrApi.PutFacilitatorsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Facilitator resource.
A Facilitator resource represents a payment facilitator that processes payments for a Partition.
You can only associate one Facilitator to each Partition.

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
await client.facilitator.putFacilitatorsId(
    {
        key: "value",
    },
    {
        entity: "string",
        prefix: "string",
        partition: "string",
        gatewayName: "string",
        tcMerchant: "string",
        tcVendor: "string",
        chargebackNotificationEmail: "string",
        inactive: 1,
        frozen: 1,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutFacilitatorsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Facilitator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.facilitator.<a href="/src/api/resources/facilitator/client/Client.ts">deleteFacilitatorsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteFacilitatorsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Facilitator resource.
A Facilitator resource represents a payment facilitator that processes payments for a Partition.
You can only associate one Facilitator to each Partition.

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
await client.facilitator.deleteFacilitatorsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteFacilitatorsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Facilitator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.facilitator.<a href="/src/api/resources/facilitator/client/Client.ts">getFacilitators</a>({ ...params }) -> ButtonclikrApi.GetFacilitatorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Facilitator resource.
A Facilitator resource represents a payment facilitator that processes payments for a Partition.
You can only associate one Facilitator to each Partition.

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
await client.facilitator.getFacilitators({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetFacilitatorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Facilitator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.facilitator.<a href="/src/api/resources/facilitator/client/Client.ts">postFacilitators</a>({ ...params }) -> ButtonclikrApi.PostFacilitatorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Facilitator resource.
A Facilitator resource represents a payment facilitator that processes payments for a Partition.
You can only associate one Facilitator to each Partition.

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
await client.facilitator.postFacilitators({
    entity: "entity",
    prefix: "prefix",
    partition: "partition",
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.PostFacilitatorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Facilitator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payouts

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">getPayoutFlowsId</a>(id, { ...params }) -> ButtonclikrApi.GetPayoutFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a payoutFlows resource.
A payoutFlows resource represents a way to set up a Payouts resource automatically for an Entity or Org when it is boarded, or when a bank account is associated.
You can set up the schedule and amount for the Payouts in the payoutFlows resource.

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
await client.payouts.getPayoutFlowsId("id");
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

**id:** `string` — The ID of this payout flow.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetPayoutFlowsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">putPayoutFlowsId</a>(id, { ...params }) -> ButtonclikrApi.PutPayoutFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a payoutFlows resource that represents a way to set up a Payouts resource automatically for an Entity or Org when it is boarded, or when a bank account is associated, allowing you to set up the schedule and amount for the Payouts in the payoutFlows resource.

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
await client.payouts.putPayoutFlowsId("id", {
    login: "login",
    trigger: ButtonclikrApi.PayoutFlowsRequestModelTrigger.AccountCreate,
    schedule: ButtonclikrApi.PayoutFlowsRequestModelSchedule.Days,
    scheduleFactor: 1,
    um: "percentneg",
    amount: 1,
    payoutInactive: 1,
    skipOffDays: 1,
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this payout flow.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PayoutFlowsRequestModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">deletePayoutFlowsId</a>(id, { ...params }) -> ButtonclikrApi.DeletePayoutFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a payoutFlows resource that represents a way to set up a Payouts resource automatically for an Entity or Org when it is boarded, or when a bank account is associated, allowing you to set up the schedule and amount for the Payouts in the payoutFlows resource.

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
await client.payouts.deletePayoutFlowsId("id");
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

**id:** `string` — The ID of this payout flow.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeletePayoutFlowsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">getPayoutFlows</a>({ ...params }) -> ButtonclikrApi.GetPayoutFlowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a payoutFlows resource.
A payoutFlows resource represents a way to set up a Payouts resource automatically for an Entity or Org when it is boarded, or when a bank account is associated.
You can set up the schedule and amount for the Payouts in the payoutFlows resource.

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
await client.payouts.getPayoutFlows();
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

**request:** `ButtonclikrApi.GetPayoutFlowsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">postPayoutFlows</a>({ ...params }) -> ButtonclikrApi.PostPayoutFlowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a payoutFlows resource.
A payoutFlows resource represents a way to set up a Payouts resource automatically for an Entity or Org when it is boarded, or when a bank account is associated.
You can set up the schedule and amount for the Payouts in the payoutFlows resource.

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
await client.payouts.postPayoutFlows({
    login: "login",
    trigger: ButtonclikrApi.PayoutFlowsRequestModelTrigger.AccountCreate,
    schedule: ButtonclikrApi.PayoutFlowsRequestModelSchedule.Days,
    scheduleFactor: 1,
    um: "percentneg",
    amount: 1,
    payoutInactive: 1,
    skipOffDays: 1,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.PayoutFlowsRequestModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">getPayoutsId</a>(id, { ...params }) -> ButtonclikrApi.GetPayoutsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Payout. A Payout is a resource that represents all the details that allow a Disbursement to be paid or debited; these details include the schedule or trigger, the beneficiary account and the amount.

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
await client.payouts.getPayoutsId("id");
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

**id:** `string` — The ID of this payout.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetPayoutsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">putPayoutsId</a>(id, { ...params }) -> ButtonclikrApi.PutPayoutsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Payout. A Payout is a resource that represents all the details that allow a Disbursement to be paid or debited. These details include the schedule or trigger, the beneficiary account and the amount.

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
await client.payouts.putPayoutsId("id", {
    login: "login",
    entity: "entity",
    account: "account",
    schedule: 1,
    scheduleFactor: 1,
    start: 1,
    um: ButtonclikrApi.PayoutRequestModelUm.Percent,
    amount: 1,
    float: 1,
    skipOffDays: 1,
    sameDay: 1,
    inactive: 1,
    frozen: 1,
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

**id:** `string` — The ID of this payout.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PayoutRequestModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">deletePayoutsId</a>(id, { ...params }) -> ButtonclikrApi.DeletePayoutsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Payout. A Payout is a resource that represents all the details that allow a Disbursement to be paid or debited. These details include the schedule or trigger, the beneficiary account and the amount.

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
await client.payouts.deletePayoutsId("id");
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

**id:** `string` — The ID of this payout.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeletePayoutsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">getPayouts</a>({ ...params }) -> ButtonclikrApi.GetPayoutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Payout. A Payout is a resource that represents all the details that allow a Disbursement to be paid or debited. These details include the schedule or trigger, the beneficiary account and the amount.

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
await client.payouts.getPayouts();
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

**request:** `ButtonclikrApi.GetPayoutsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">postPayouts</a>({ ...params }) -> ButtonclikrApi.PostPayoutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Payout. A Payout is a resource that represents all the details that allow a Disbursement to be paid or debited; these details include the schedule or trigger, the beneficiary account and the amount.

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
await client.payouts.postPayouts({
    login: "login",
    entity: "p1_ent_5a1ef5e5565631155c95344",
    account: "ae1abb3aaa18e4c374ca83fa75a7fff6",
    schedule: 1,
    scheduleFactor: 1,
    start: 20170101,
    um: ButtonclikrApi.PayoutRequestModelUm.Percent,
    amount: 100,
    float: 1,
    skipOffDays: 1,
    sameDay: 1,
    inactive: 1,
    frozen: 1,
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

**request:** `ButtonclikrApi.PayoutRequestModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payouts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Subscriptions

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getPlansId</a>(id, { ...params }) -> ButtonclikrApi.GetPlansIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Plan that represents a recurring type of payment that charges a certain amount on a weekly, monthly, quarterly, or annual basis, once created, allowing association with a Subscription and user.

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
await client.subscriptions.getPlansId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this plan.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetPlansIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">putPlansId</a>(id, { ...params }) -> ButtonclikrApi.PutPlansIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Plan that represents a recurring type of payment that charges a certain amount on a weekly, monthly, quarterly, or annual basis, once created, allowing association with a Subscription and user.

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
await client.subscriptions.putPlansId(
    {
        key: "value",
    },
    {
        amount: {
            key: "value",
        },
        billing: {
            key: "value",
        },
        order: {
            key: "value",
        },
        txnDescription: {
            key: "value",
        },
        description: {
            key: "value",
        },
        maxFailures: {
            key: "value",
        },
        name: {
            key: "value",
        },
        schedule: "string",
        scheduleFactor: {
            key: "value",
        },
        um: ButtonclikrApi.PutPlansIdRequestUm.Actual,
        inactive: ButtonclikrApi.PutPlansIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutPlansIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this plan.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutPlansIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">deletePlansId</a>(id, { ...params }) -> ButtonclikrApi.DeletePlansIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Plan that represents a recurring type of payment that charges a certain amount on a weekly, monthly, quarterly, or annual basis, once created, allowing association with a Subscription and user.

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
await client.subscriptions.deletePlansId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this plan.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeletePlansIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getPlans</a>({ ...params }) -> ButtonclikrApi.GetPlansResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Plan.
A Plan represents a recurring type of payment that charges a certain amount on a weekly, monthly, quarterly, or annual basis.
Once you create a Plan, you can associate a Subscription and user with it.

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
await client.subscriptions.getPlans({
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetPlansRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">postPlans</a>({ ...params }) -> ButtonclikrApi.PostPlansResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Plan that represents a recurring type of payment that charges a certain amount on a weekly, monthly, quarterly, or annual basis, which once created, allows you to associate a Subscription and user with it.

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
await client.subscriptions.postPlans({
    amount: {
        key: "value",
    },
    billing: {
        key: "value",
    },
    order: {
        key: "value",
    },
    txnDescription: {
        key: "value",
    },
    description: {
        key: "value",
    },
    maxFailures: {
        key: "value",
    },
    merchant: {
        key: "value",
    },
    name: {
        key: "value",
    },
    schedule: "string",
    scheduleFactor: {
        key: "value",
    },
    um: ButtonclikrApi.PostPlansRequestUm.Actual,
    type: ButtonclikrApi.PostPlansRequestType.Recurring,
    inactive: ButtonclikrApi.PostPlansRequestInactive.Zero,
    frozen: ButtonclikrApi.PostPlansRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostPlansRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getSubscriptionsId</a>(id, { ...params }) -> ButtonclikrApi.GetSubscriptionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Subscription that specifies both starting and ending dates and charges the customer according to the schedule in the associated Plan during the interval between these dates.

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
await client.subscriptions.getSubscriptionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this subscription.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetSubscriptionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">putSubscriptionsId</a>(id, { ...params }) -> ButtonclikrApi.PutSubscriptionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Subscription, A Subscription specifies both starting and ending dates and the customer is charged according to the schedule in the associated Plan during the interval between these dates.

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
await client.subscriptions.putSubscriptionsId(
    {
        key: "value",
    },
    {
        order: {
            key: "value",
        },
        txnDescription: {
            key: "value",
        },
        descriptor: {
            key: "value",
        },
        authentication: {
            key: "value",
        },
        authenticationId: {
            key: "value",
        },
        failures: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        firstTxn: {
            key: "value",
        },
        maxFailures: {
            key: "value",
        },
        origin: "string",
        statementEntity: {
            key: "value",
        },
        start: {
            key: "value",
        },
        tax: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutSubscriptionsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutSubscriptionsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this subscription.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutSubscriptionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">deleteSubscriptionsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteSubscriptionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Subscription. A Subscription is a scheduled invocation of a particular Plan over a certain period of time, specifying both starting and ending dates, and the customer is charged according to the schedule in the associated Plan during the interval between these dates.

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
await client.subscriptions.deleteSubscriptionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this subscription.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteSubscriptionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getSubscriptions</a>({ ...params }) -> ButtonclikrApi.GetSubscriptionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Subscription.
A Subscription is a scheduled invocation of a particular Plan over a certain period of time.
A Subscription specifies both starting and ending dates and the customer is charged according to the schedule in the associated Plan during the interval between these dates.

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
await client.subscriptions.getSubscriptions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">postSubscriptions</a>({ ...params }) -> ButtonclikrApi.PostSubscriptionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Subscription.
A Subscription is a scheduled invocation of a particular Plan over a certain period of time.
A Subscription specifies both starting and ending dates and the customer is charged according to the schedule in the associated Plan during the interval between these dates.

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
await client.subscriptions.postSubscriptions({
    order: {
        key: "value",
    },
    txnDescription: {
        key: "value",
    },
    descriptor: {
        key: "value",
    },
    authentication: {
        key: "value",
    },
    authenticationId: {
        key: "value",
    },
    failures: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    firstTxn: {
        key: "value",
    },
    maxFailures: {
        key: "value",
    },
    origin: "string",
    plan: {
        key: "value",
    },
    statementEntity: {
        key: "value",
    },
    start: {
        key: "value",
    },
    tax: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostSubscriptionsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostSubscriptionsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getSubscriptionTokensId</a>(id, { ...params }) -> ButtonclikrApi.GetSubscriptionTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Subscription Token, which represents an association between a Subscription and a means of payment (Token) for that Subscription.

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
await client.subscriptions.getSubscriptionTokensId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this subscription token.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetSubscriptionTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">putSubscriptionTokensId</a>(id, { ...params }) -> ButtonclikrApi.PutSubscriptionTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Subscription Token, which represents an association between a Subscription and a means of payment (Token) for that Subscription.

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
await client.subscriptions.putSubscriptionTokensId(
    {
        key: "value",
    },
    {
        token: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutSubscriptionTokensIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutSubscriptionTokensIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource or The Subscription Token ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutSubscriptionTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">deleteSubscriptionTokensId</a>(id, { ...params }) -> ButtonclikrApi.DeleteSubscriptionTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Subscription Token, which represents an association between a Subscription and a means of payment (Token) for that Subscription.

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
await client.subscriptions.deleteSubscriptionTokensId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource or The Subscription Token ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteSubscriptionTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">getSubscriptionTokens</a>({ ...params }) -> ButtonclikrApi.GetSubscriptionTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Subscription Tokens resource.
A Subscription Tokens resource represents an association between a Subscription and a means of payment (Token) for that Subscription.

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
await client.subscriptions.getSubscriptionTokens({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetSubscriptionTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscriptions.<a href="/src/api/resources/subscriptions/client/Client.ts">postSubscriptionTokens</a>({ ...params }) -> ButtonclikrApi.PostSubscriptionTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Subscription Tokens resource.
A Subscription Tokens resource represents an association between a Subscription and a means of payment (Token) for that Subscription.

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
await client.subscriptions.postSubscriptionTokens({
    subscription: "p1_sbn_5a1ef5e556583e67e5d55a2",
    token: "e41272ec5464d9ec81cc85c854837472",
    inactive: ButtonclikrApi.PostSubscriptionTokensRequestInactive.Zero,
    frozen: ButtonclikrApi.PostSubscriptionTokensRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostSubscriptionTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Subscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Report Items

<details><summary><code>client.reportItems.<a href="/src/api/resources/reportItems/client/Client.ts">getReportItemsId</a>(id, { ...params }) -> ButtonclikrApi.GetReportItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Report Item details for coming soon.

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
await client.reportItems.getReportItemsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this report item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetReportItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reportItems.<a href="/src/api/resources/reportItems/client/Client.ts">putReportItemsId</a>(id, { ...params }) -> ButtonclikrApi.PutReportItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Report Item: Details for update on reportItems coming soon

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
await client.reportItems.putReportItemsId(
    {
        key: "value",
    },
    {
        report: {
            key: "value",
        },
        resource: "string",
        totals: {
            key: "value",
        },
        expand: {
            key: "value",
        },
        expandSearch: "string",
        inactive: ButtonclikrApi.PutReportItemsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutReportItemsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this report item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutReportItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reportItems.<a href="/src/api/resources/reportItems/client/Client.ts">deleteReportItemsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteReportItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Report Item: Details for deletion on reportItems coming soon.

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
await client.reportItems.deleteReportItemsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this report item.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteReportItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reportItems.<a href="/src/api/resources/reportItems/client/Client.ts">getReportItems</a>({ ...params }) -> ButtonclikrApi.GetReportItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on reportItems coming soon

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
await client.reportItems.getReportItems({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetReportItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reportItems.<a href="/src/api/resources/reportItems/client/Client.ts">postReportItems</a>({ ...params }) -> ButtonclikrApi.PostReportItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Report Item: Details for creating on reportItems coming soon

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
await client.reportItems.postReportItems({
    report: {
        key: "value",
    },
    resource: "string",
    search: {
        key: "value",
    },
    totals: {
        key: "value",
    },
    expand: {
        key: "value",
    },
    expandSearch: "string",
    inactive: ButtonclikrApi.PostReportItemsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostReportItemsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostReportItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportItems.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Report Results

<details><summary><code>client.reportResults.<a href="/src/api/resources/reportResults/client/Client.ts">getReportResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetReportResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Report Result details for coming soon.

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
await client.reportResults.getReportResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this report.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetReportResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportResults.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reportResults.<a href="/src/api/resources/reportResults/client/Client.ts">putReportResultsId</a>(id, { ...params }) -> ButtonclikrApi.PutReportResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on reportResults coming soon

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
await client.reportResults.putReportResultsId(
    {
        key: "value",
    },
    {
        report: {
            key: "value",
        },
        documentType: ButtonclikrApi.PutReportResultsIdRequestDocumentType.Json,
        status: ButtonclikrApi.PutReportResultsIdRequestStatus.Pending,
        effective: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutReportResultsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutReportResultsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutReportResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportResults.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reportResults.<a href="/src/api/resources/reportResults/client/Client.ts">deleteReportResultsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteReportResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for delete on reportResults coming soon

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
await client.reportResults.deleteReportResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteReportResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportResults.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reportResults.<a href="/src/api/resources/reportResults/client/Client.ts">getReportResults</a>({ ...params }) -> ButtonclikrApi.GetReportResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Report Result: Details for query on reportResults coming soon

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
await client.reportResults.getReportResults({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetReportResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportResults.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reportResults.<a href="/src/api/resources/reportResults/client/Client.ts">postReportResults</a>({ ...params }) -> ButtonclikrApi.PostReportResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Report Result, details for creating on report results coming soon.

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
await client.reportResults.postReportResults({
    report: {
        key: "value",
    },
    documentType: ButtonclikrApi.PostReportResultsRequestDocumentType.Json,
    status: ButtonclikrApi.PostReportResultsRequestStatus.Pending,
    effective: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostReportResultsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostReportResultsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostReportResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportResults.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Reports

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getReportsId</a>(id, { ...params }) -> ButtonclikrApi.GetReportsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Report details for query on reports coming soon.

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
await client.reports.getReportsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this report.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetReportsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">putReportsId</a>(id, { ...params }) -> ButtonclikrApi.PutReportsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Report details for update on reports coming soon.

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
await client.reports.putReportsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        type: ButtonclikrApi.PutReportsIdRequestType.Json,
        description: {
            key: "value",
        },
        status: ButtonclikrApi.PutReportsIdRequestStatus.NotReady,
        schedule: ButtonclikrApi.PutReportsIdRequestSchedule.Unscheduled,
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutReportsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutReportsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this report.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutReportsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">deleteReportsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteReportsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Report details for deletion on reports coming soon.

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
await client.reports.deleteReportsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this report.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteReportsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getReports</a>({ ...params }) -> ButtonclikrApi.GetReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Report: Details for query on reports coming soon.

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
await client.reports.getReports({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetReportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">postReports</a>({ ...params }) -> ButtonclikrApi.PostReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Report: Details for creating reports coming soon

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
await client.reports.postReports({
    login: {
        key: "value",
    },
    type: ButtonclikrApi.PostReportsRequestType.Json,
    description: {
        key: "value",
    },
    status: ButtonclikrApi.PostReportsRequestStatus.NotReady,
    schedule: ButtonclikrApi.PostReportsRequestSchedule.Unscheduled,
    start: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostReportsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostReportsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostReportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## RequestTokens

<details><summary><code>client.requestTokens.<a href="/src/api/resources/requestTokens/client/Client.ts">getRequestTokensId</a>(id, { ...params }) -> ButtonclikrApi.GetRequestTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a RequestToken.
A RequestToken represents a method of assuring a request is only processed once. Each RequestToken expires automatically after 48 hours of being created.

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
await client.requestTokens.getRequestTokensId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetRequestTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requestTokens.<a href="/src/api/resources/requestTokens/client/Client.ts">deleteRequestTokensId</a>(id, { ...params }) -> ButtonclikrApi.DeleteRequestTokensIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a RequestToken.
A RequestToken represents a method of assuring a request is only processed once. Each RequestToken expires automatically after 48 hours of being created.

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
await client.requestTokens.deleteRequestTokensId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteRequestTokensIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requestTokens.<a href="/src/api/resources/requestTokens/client/Client.ts">getRequestTokens</a>({ ...params }) -> ButtonclikrApi.GetRequestTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a RequestToken.
A RequestToken represents a method of assuring a request is only processed once. Each RequestToken expires automatically after 48 hours of being created.

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
await client.requestTokens.getRequestTokens({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetRequestTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requestTokens.<a href="/src/api/resources/requestTokens/client/Client.ts">postRequestTokens</a>({ ...params }) -> ButtonclikrApi.PostRequestTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a RequestToken.
A RequestToken represents a method of assuring a request is only processed once. Each RequestToken expires automatically after 48 hours of being created.

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
await client.requestTokens.postRequestTokens({
    login: {
        key: "value",
    },
    token: {
        key: "value",
    },
    resource: "string",
    resourceId: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostRequestTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Reserves

<details><summary><code>client.reserves.<a href="/src/api/resources/reserves/client/Client.ts">getReservesId</a>(id, { ...params }) -> ButtonclikrApi.GetReservesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Reserve resource that represents a way to reserve funds from an Entity or Org automatically and to release them automatically according to a pre-determined schedule.

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
await client.reserves.getReservesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this reserve.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetReservesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reserves.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reserves.<a href="/src/api/resources/reserves/client/Client.ts">putReservesId</a>(id, { ...params }) -> ButtonclikrApi.PutReservesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Reserves or Reserve resource, which represents a way to reserve funds from an Entity or Org automatically and to release them automatically according to a pre-determined schedule.

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
await client.reserves.putReservesId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        org: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        level: ButtonclikrApi.PutReservesIdRequestLevel.Admin,
        entity: {
            key: "value",
        },
        hold: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        max: {
            key: "value",
        },
        percent: {
            key: "value",
        },
        release: ButtonclikrApi.PutReservesIdRequestRelease.Never,
        releaseFactor: {
            key: "value",
        },
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutReservesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutReservesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this reserve.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutReservesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reserves.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reserves.<a href="/src/api/resources/reserves/client/Client.ts">deleteReservesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteReservesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Reserves or Reserve resource that represents a way to reserve funds from an Entity or Org automatically and to release them automatically according to a pre-determined schedule.

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
await client.reserves.deleteReservesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this reserve.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteReservesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reserves.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reserves.<a href="/src/api/resources/reserves/client/Client.ts">getReserves</a>({ ...params }) -> ButtonclikrApi.GetReservesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Reserves resource.
A Reserves resource represents a way to reserve funds from an Entity or Org automatically and to release them automatically according to a pre-determined schedule.

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
await client.reserves.getReserves({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetReservesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reserves.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reserves.<a href="/src/api/resources/reserves/client/Client.ts">postReserves</a>({ ...params }) -> ButtonclikrApi.PostReservesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Reserves resource.
A Reserves resource represents a way to reserve funds from an Entity or Org automatically and to release them automatically according to a pre-determined schedule.

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
await client.reserves.postReserves({
    login: {
        key: "value",
    },
    org: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    level: ButtonclikrApi.PostReservesRequestLevel.Admin,
    entity: {
        key: "value",
    },
    hold: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    max: {
        key: "value",
    },
    percent: {
        key: "value",
    },
    release: ButtonclikrApi.PostReservesRequestRelease.Never,
    releaseFactor: {
        key: "value",
    },
    start: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostReservesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostReservesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostReservesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reserves.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## RevenueShare

<details><summary><code>client.revenueShare.<a href="/src/api/resources/revenueShare/client/Client.ts">getRevShareSchedulesId</a>(id, { ...params }) -> ButtonclikrApi.GetRevShareSchedulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on revShareSchedules coming soon

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
await client.revenueShare.getRevShareSchedulesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetRevShareSchedulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevenueShare.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revenueShare.<a href="/src/api/resources/revenueShare/client/Client.ts">putRevShareSchedulesId</a>(id, { ...params }) -> ButtonclikrApi.PutRevShareSchedulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for update on revShareSchedules coming soon

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
await client.revenueShare.putRevShareSchedulesId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        forentity: {
            key: "value",
        },
        start: {
            key: "value",
        },
        end: {
            key: "value",
        },
        share: {
            key: "value",
        },
        event: ButtonclikrApi.PutRevShareSchedulesIdRequestEvent.Six,
        inactive: ButtonclikrApi.PutRevShareSchedulesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutRevShareSchedulesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutRevShareSchedulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevenueShare.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revenueShare.<a href="/src/api/resources/revenueShare/client/Client.ts">deleteRevShareSchedulesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteRevShareSchedulesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for delete on revShareSchedules coming soon

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
await client.revenueShare.deleteRevShareSchedulesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteRevShareSchedulesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevenueShare.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revenueShare.<a href="/src/api/resources/revenueShare/client/Client.ts">getRevShareSchedules</a>({ ...params }) -> ButtonclikrApi.GetRevShareSchedulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on revShareSchedules coming soon

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
await client.revenueShare.getRevShareSchedules({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetRevShareSchedulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevenueShare.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revenueShare.<a href="/src/api/resources/revenueShare/client/Client.ts">postRevShareSchedules</a>({ ...params }) -> ButtonclikrApi.PostRevShareSchedulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on revShareSchedules coming soon

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
await client.revenueShare.postRevShareSchedules({
    entity: {
        key: "value",
    },
    forentity: {
        key: "value",
    },
    start: {
        key: "value",
    },
    end: {
        key: "value",
    },
    share: {
        key: "value",
    },
    event: ButtonclikrApi.PostRevShareSchedulesRequestEvent.Six,
    inactive: ButtonclikrApi.PostRevShareSchedulesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostRevShareSchedulesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostRevShareSchedulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevenueShare.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revenueShare.<a href="/src/api/resources/revenueShare/client/Client.ts">getRevShareStatementsId</a>(id, { ...params }) -> ButtonclikrApi.GetRevShareStatementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on revShareStatements coming soon

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
await client.revenueShare.getRevShareStatementsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetRevShareStatementsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevenueShare.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revenueShare.<a href="/src/api/resources/revenueShare/client/Client.ts">getRevShareStatements</a>({ ...params }) -> ButtonclikrApi.GetRevShareStatementsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on revShareStatements coming soon

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
await client.revenueShare.getRevShareStatements({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetRevShareStatementsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevenueShare.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Secrets

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">getSecretsId</a>(id, { ...params }) -> ButtonclikrApi.GetSecretsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Secret, A Secret represents either a key used to decrypt data or an indicator of which key to be used to decrypt data.

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
await client.secrets.getSecretsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this secret resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetSecretsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">putSecretsId</a>(id, { ...params }) -> ButtonclikrApi.PutSecretsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Secret, A Secret represents either a key used to decrypt data or an indicator of which key to be used to decrypt data.

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
await client.secrets.putSecretsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        org: {
            key: "value",
        },
        division: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        type: ButtonclikrApi.PutSecretsIdRequestType.BaseKey,
        platform: ButtonclikrApi.PutSecretsIdRequestPlatform.Apple,
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        key: {
            key: "value",
        },
        locked: ButtonclikrApi.PutSecretsIdRequestLocked.Zero,
        inactive: ButtonclikrApi.PutSecretsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutSecretsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this secret resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutSecretsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">deleteSecretsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteSecretsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Secret. A Secret represents either a key used to decrypt data or an indicator of which key to be used to decrypt data.

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
await client.secrets.deleteSecretsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this secret resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteSecretsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">getSecrets</a>({ ...params }) -> ButtonclikrApi.GetSecretsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Secret.
A Secret represents either a key used to decrypt data or an indicator of which key to be used to decrypt data.

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
await client.secrets.getSecrets({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetSecretsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">postSecrets</a>({ ...params }) -> ButtonclikrApi.PostSecretsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Secret.
A Secret represents either a key used to decrypt data or an indicator of which key to be used to decrypt data.

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
await client.secrets.postSecrets({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    org: {
        key: "value",
    },
    division: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    type: ButtonclikrApi.PostSecretsRequestType.BaseKey,
    platform: ButtonclikrApi.PostSecretsRequestPlatform.Apple,
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    key: {
        key: "value",
    },
    locked: ButtonclikrApi.PostSecretsRequestLocked.Zero,
    inactive: ButtonclikrApi.PostSecretsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostSecretsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostSecretsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Statements

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">getSessionsId</a>(id, { ...params }) -> ButtonclikrApi.GetSessionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Statement.
A Statement resource represents the total collection of funds owed for a Billing period.

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
await client.statements.getSessionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
        pageNumber: "string",
        pageLimit: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetSessionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Statements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">postSessionsId</a>(id, { ...params }) -> ButtonclikrApi.PostSessionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Statement.
A Statement resource represents the total collection of funds owed for a Billing period.

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
await client.statements.postSessionsId(
    {
        key: "value",
    },
    {
        billing: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        forentity: {
            key: "value",
        },
        status: ButtonclikrApi.PostSessionsIdRequestStatus.Pending,
        totalPaid: {
            key: "value",
        },
        total: {
            key: "value",
        },
        currency: ButtonclikrApi.PostSessionsIdRequestCurrency.Aed,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PostSessionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Statements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">getStatementsId</a>(id, { ...params }) -> ButtonclikrApi.GetStatementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Statement. A Statement resource represents the total collection of funds owed for a Billing period.

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
await client.statements.getStatementsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Statement ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetStatementsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Statements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">putStatementsId</a>(id, { ...params }) -> ButtonclikrApi.PutStatementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Statement.
A Statement resource represents the total collection of funds owed for a Billing period.

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
await client.statements.putStatementsId(
    {
        key: "value",
    },
    {
        billing: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        start: {
            key: "value",
        },
        finish: {
            key: "value",
        },
        forentity: {
            key: "value",
        },
        status: ButtonclikrApi.PutStatementsIdRequestStatus.Pending,
        totalPaid: {
            key: "value",
        },
        total: {
            key: "value",
        },
        currency: ButtonclikrApi.PutStatementsIdRequestCurrency.Aed,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutStatementsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Statements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">deleteStatementsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteStatementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Statement.
A Statement resource represents the total collection of funds owed for a Billing period.

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
await client.statements.deleteStatementsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteStatementsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Statements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">getStatements</a>({ ...params }) -> ButtonclikrApi.GetStatementsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Statement.
A Statement resource represents the total collection of funds owed for a Billing period.

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
await client.statements.getStatements({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetStatementsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Statements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.statements.<a href="/src/api/resources/statements/client/Client.ts">postStatements</a>({ ...params }) -> ButtonclikrApi.PostStatementsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Statement.
A Statement resource represents the total collection of funds owed for a Billing period.

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
await client.statements.postStatements({
    billing: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    start: {
        key: "value",
    },
    finish: {
        key: "value",
    },
    forentity: {
        key: "value",
    },
    status: ButtonclikrApi.PostStatementsRequestStatus.Pending,
    totalPaid: {
        key: "value",
    },
    total: {
        key: "value",
    },
    currency: ButtonclikrApi.PostStatementsRequestCurrency.Aed,
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

**request:** `ButtonclikrApi.PostStatementsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Statements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sessions

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">getSessions</a>({ ...params }) -> ButtonclikrApi.GetSessionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Session.
A Session represents a temporary method of authentication to the API. Each Session expires automatically after 30 minutes of inactivity.
They are similar to API Keys (/apikeys) in their capabilities and field structure - but unlike API Keys, Sessions are not permanent.

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
await client.sessions.getSessions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetSessionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">postSessions</a>({ ...params }) -> ButtonclikrApi.PostSessionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Session.
A Session represents a temporary method of authentication to the API. Each Session expires automatically after 30 minutes of inactivity.
They are similar to API Keys (/apikeys) in their capabilities and field structure - but unlike API Keys, Sessions are not permanent.

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
await client.sessions.postSessions({
    login: {
        key: "value",
    },
    public: ButtonclikrApi.PostSessionsRequestPublic.Zero,
    token: ButtonclikrApi.PostSessionsRequestToken.Zero,
    mfaAuthenticated: ButtonclikrApi.PostSessionsRequestMfaAuthenticated.Zero,
    inactive: ButtonclikrApi.PostSessionsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostSessionsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostSessionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">getTxnReportsId</a>(id, { ...params }) -> ButtonclikrApi.GetTxnReportsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnReports resource.
A txnReports resource represents information about a transaction received from the Processor.
In particular, it captures information about the interchange type and issuing bank, as well as the fees that were levied.

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
await client.sessions.getTxnReportsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTxnReportsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">getTxnReports</a>({ ...params }) -> ButtonclikrApi.GetTxnReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a txnReports resource.
A txnReports resource represents information about a transaction received from the Processor.
In particular, it captures information about the interchange type and issuing bank, as well as the fees that were levied.

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
await client.sessions.getTxnReports({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTxnReportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">getTxnSessionsId</a>(id, { ...params }) -> ButtonclikrApi.GetTxnSessionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a TxnSession.
A TxnSession represents a temporary method of authentication to the API. Each TxnSession expires automatically after 10 minutes of inactivity or by the customizable configurations field.
They are similar to API Keys (/apikeys) in their capabilities and field structure - but unlike API Keys, TxnSessions are not permanent.

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
await client.sessions.getTxnSessionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTxnSessionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">deleteTxnSessionsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteTxnSessionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a TxnSession.
A TxnSession represents a temporary method of authentication to the API. Each TxnSession expires automatically after 10 minutes of inactivity or by the customizable configurations field.
They are similar to API Keys (/apikeys) in their capabilities and field structure - but unlike API Keys, TxnSessions are not permanent.

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
await client.sessions.deleteTxnSessionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTxnSessionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">getTxnSessions</a>({ ...params }) -> ButtonclikrApi.GetTxnSessionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a TxnSession.
A TxnSession represents a temporary method of authentication to the API. Each TxnSession expires automatically after 10 minutes of inactivity or by the customizable configurations field.
They are similar to API Keys (/apikeys) in their capabilities and field structure - but unlike API Keys, TxnSessions are not permanent.

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
await client.sessions.getTxnSessions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTxnSessionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">postTxnSessions</a>({ ...params }) -> ButtonclikrApi.PostTxnSessionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a TxnSession.
A TxnSessions represents a temporary method of authentication to the API. Each TxnSession expires automatically after 10 minutes of inactivity or by the customizable configurations field.
They are similar to API Keys (/apikeys) in their capabilities and field structure - but unlike API Keys, TxnSessions are not permanent.

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
await client.sessions.postTxnSessions({
    login: {
        key: "value",
    },
    merchant: {
        key: "value",
    },
    configurations: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostTxnSessionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Settlements

<details><summary><code>client.settlements.<a href="/src/api/resources/settlements/client/Client.ts">getSettlementsId</a>(id, { ...params }) -> ButtonclikrApi.GetSettlementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a StatementEntry resource.
A Settlement represents a transfer of funds between a credit and debit account.

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
await client.settlements.getSettlementsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetSettlementsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Settlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.settlements.<a href="/src/api/resources/settlements/client/Client.ts">putSettlementsId</a>(id, { ...params }) -> ButtonclikrApi.PutSettlementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a StatementEntry resource.
A Settlement represents a transfer of funds between a credit and debit account.

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
await client.settlements.putSettlementsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        payment: {
            key: "value",
        },
        platform: ButtonclikrApi.PutSettlementsIdRequestPlatform.Apple,
        ref: {
            key: "value",
        },
        status: ButtonclikrApi.PutSettlementsIdRequestStatus.Cancelled,
        amount: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutSettlementsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutSettlementsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutSettlementsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Settlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.settlements.<a href="/src/api/resources/settlements/client/Client.ts">deleteSettlementsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteSettlementsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a StatementEntry resource.
A Settlement represents a transfer of funds between a credit and debit account.

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
await client.settlements.deleteSettlementsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteSettlementsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Settlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.settlements.<a href="/src/api/resources/settlements/client/Client.ts">getSettlements</a>({ ...params }) -> ButtonclikrApi.GetSettlementsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a StatementEntry resource.
A Settlement represents a transfer of funds between a credit and debit account.

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
await client.settlements.getSettlements({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetSettlementsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Settlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.settlements.<a href="/src/api/resources/settlements/client/Client.ts">postSettlements</a>({ ...params }) -> ButtonclikrApi.PostSettlementsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Settlement resource.
A Settlement represents a transfer of funds between a credit and debit account.

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
await client.settlements.postSettlements({
    login: {
        key: "value",
    },
    payment: {
        key: "value",
    },
    platform: ButtonclikrApi.PostSettlementsRequestPlatform.Apple,
    ref: {
        key: "value",
    },
    status: ButtonclikrApi.PostSettlementsRequestStatus.Cancelled,
    amount: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostSettlementsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostSettlementsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostSettlementsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Settlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Teams

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">getTeamLoginsId</a>(id, { ...params }) -> ButtonclikrApi.GetTeamLoginsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a teamLogins or Team Login resource that represents the link between a Login and a Team as well as the Login's rights on the Team, where the Login resource identified in its 'login' field is considered part of the Team.

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
await client.teams.getTeamLoginsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this team login.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTeamLoginsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">putTeamLoginsId</a>(id, { ...params }) -> ButtonclikrApi.PutTeamLoginsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a teamLogins or Team Login resource, representing the link between a Login and a Team as well as the Login's rights on the Team, where the Login resource identified in its 'login' field is considered part of the Team.

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
await client.teams.putTeamLoginsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        team: {
            key: "value",
        },
        create: ButtonclikrApi.PutTeamLoginsIdRequestCreate.Zero,
        read: ButtonclikrApi.PutTeamLoginsIdRequestRead.Zero,
        update: ButtonclikrApi.PutTeamLoginsIdRequestUpdate.Zero,
        delete: ButtonclikrApi.PutTeamLoginsIdRequestDelete.Zero,
        reference: ButtonclikrApi.PutTeamLoginsIdRequestReference.Zero,
        teamAdmin: ButtonclikrApi.PutTeamLoginsIdRequestTeamAdmin.Zero,
    }
);
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

**id:** `unknown` — The ID of this team's login.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutTeamLoginsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">deleteTeamLoginsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteTeamLoginsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Team Login, which represents the link between a Login and a Team as well as the Login's rights on the Team, where the Login resource identified in its 'login' field is considered part of the Team.

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
await client.teams.deleteTeamLoginsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this team login.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTeamLoginsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">getTeamLogins</a>({ ...params }) -> ButtonclikrApi.GetTeamLoginsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a teamLogins resource.
A teamLogins resource represents the link between a Login and a Team as well as the Login's rights on the Team. The Login resource identified in its 'login' field is considered part of the Team.

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
await client.teams.getTeamLogins({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTeamLoginsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">postTeamLogins</a>({ ...params }) -> ButtonclikrApi.PostTeamLoginsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a teamLogins resource.
A teamLogins resource represents the link between a Login and a Team as well as the Login's rights on the Team. The Login resource identified in its 'login' field is considered part of the Team.

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
await client.teams.postTeamLogins({
    login: {
        key: "value",
    },
    team: {
        key: "value",
    },
    create: ButtonclikrApi.PostTeamLoginsRequestCreate.Zero,
    read: ButtonclikrApi.PostTeamLoginsRequestRead.Zero,
    update: ButtonclikrApi.PostTeamLoginsRequestUpdate.Zero,
    delete: ButtonclikrApi.PostTeamLoginsRequestDelete.Zero,
    reference: ButtonclikrApi.PostTeamLoginsRequestReference.Zero,
    teamAdmin: ButtonclikrApi.PostTeamLoginsRequestTeamAdmin.Zero,
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

**request:** `ButtonclikrApi.PostTeamLoginsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">getTeamsId</a>(id, { ...params }) -> ButtonclikrApi.GetTeamsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Team, which is a collection of Logins that you can associate by creating teamLogin resources.

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
await client.teams.getTeamsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this team.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTeamsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">putTeamsId</a>(id, { ...params }) -> ButtonclikrApi.PutTeamsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Team, A Team is a collection of Logins, You can associate Logins with a Team by creating teamLogin resources.

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
await client.teams.putTeamsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        autoCascadeDisabled: ButtonclikrApi.PutTeamsIdRequestAutoCascadeDisabled.Zero,
        autoCascadeOwner: ButtonclikrApi.PutTeamsIdRequestAutoCascadeOwner.Zero,
        inactive: ButtonclikrApi.PutTeamsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutTeamsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this team.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutTeamsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">deleteTeamsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteTeamsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Team, A Team is a collection of Logins, You can associate Logins with a Team by creating teamLogin resources.

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
await client.teams.deleteTeamsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this team.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTeamsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">getTeams</a>({ ...params }) -> ButtonclikrApi.GetTeamsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Team.
A Team is a collection of Logins.
You can associate Logins with a Team by creating teamLogin resources.

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
await client.teams.getTeams({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTeamsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">postTeams</a>({ ...params }) -> ButtonclikrApi.PostTeamsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Team.
A Team is a collection of Logins.
You can associate Logins with a Team by creating teamLogin resources.

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
await client.teams.postTeams({
    login: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    autoCascadeDisabled: ButtonclikrApi.PostTeamsRequestAutoCascadeDisabled.Zero,
    autoCascadeOwner: ButtonclikrApi.PostTeamsRequestAutoCascadeOwner.Zero,
    inactive: ButtonclikrApi.PostTeamsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostTeamsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostTeamsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Terminals

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">getTerminalRefsId</a>(id, { ...params }) -> ButtonclikrApi.GetTerminalRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalRefs resource, which represents a reference code issued by the Processor that represents a particular Terminal.

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
await client.terminals.getTerminalRefsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, also known as The Terminal Reference ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTerminalRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">putTerminalRefsId</a>(id, { ...params }) -> ButtonclikrApi.PutTerminalRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a terminalRefs resource, which represents a reference code issued by the Processor that represents a particular Terminal.

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
await client.terminals.putTerminalRefsId(
    {
        key: "value",
    },
    {
        ref: {
            key: "value",
        },
        processor: ButtonclikrApi.PutTerminalRefsIdRequestProcessor.Apple,
    }
);
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

**id:** `unknown` — The ID of this resource, also known as The Terminal Reference ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutTerminalRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">deleteTerminalRefsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteTerminalRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a terminalRefs resource, which represents a reference code issued by the Processor that represents a particular Terminal.

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
await client.terminals.deleteTerminalRefsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, also known as The Terminal Reference ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTerminalRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">getTerminalRefs</a>({ ...params }) -> ButtonclikrApi.GetTerminalRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalRefs resource.
A terminalRefs resource represents a reference code issued by the Processor that represents a particular Terminal.

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
await client.terminals.getTerminalRefs({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTerminalRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">postTerminalRefs</a>({ ...params }) -> ButtonclikrApi.PostTerminalRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a terminalRefs resource that represents a reference code issued by the Processor that represents a particular Terminal.

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
await client.terminals.postTerminalRefs({
    terminal: {
        key: "value",
    },
    ref: {
        key: "value",
    },
    stage: ButtonclikrApi.PostTerminalRefsRequestStage.Create,
    platform: ButtonclikrApi.PostTerminalRefsRequestPlatform.Elavon,
    processor: ButtonclikrApi.PostTerminalRefsRequestProcessor.Apple,
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

**request:** `ButtonclikrApi.PostTerminalRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">getTerminalsId</a>(id, { ...params }) -> ButtonclikrApi.GetTerminalsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Terminal resource.

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
await client.terminals.getTerminalsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Terminal ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTerminalsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">putTerminalsId</a>(id, { ...params }) -> ButtonclikrApi.PutTerminalsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Terminal resource.

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
await client.terminals.putTerminalsId(
    {
        key: "value",
    },
    {
        type: ButtonclikrApi.PutTerminalsIdRequestType.UndefinedLlc,
        capability: ButtonclikrApi.PutTerminalsIdRequestCapability.One,
        environment: ButtonclikrApi.PutTerminalsIdRequestEnvironment.One,
        autoClose: ButtonclikrApi.PutTerminalsIdRequestAutoClose.Zero,
        autoCloseTime: {
            key: "value",
        },
        cloudEnabled: ButtonclikrApi.PutTerminalsIdRequestCloudEnabled.Zero,
        serial: {
            key: "value",
        },
        token: {
            key: "value",
        },
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        address1: {
            key: "value",
        },
        address2: {
            key: "value",
        },
        city: {
            key: "value",
        },
        state: ButtonclikrApi.PutTerminalsIdRequestState.Ab,
        zip: {
            key: "value",
        },
        country: ButtonclikrApi.PutTerminalsIdRequestCountry.Abw,
        phone: {
            key: "value",
        },
        timezone: ButtonclikrApi.PutTerminalsIdRequestTimezone.Est,
        status: ButtonclikrApi.PutTerminalsIdRequestStatus.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Terminal ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutTerminalsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">deleteTerminalsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteTerminalsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a terminal resource that represents a device/software that will be used to process transactions.

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
await client.terminals.deleteTerminalsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource and The Terminal ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteTerminalsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">getTerminals</a>({ ...params }) -> ButtonclikrApi.GetTerminalsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminal resource.
A terminal resource represents a device/software that will be used to process transactions.

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
await client.terminals.getTerminals({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTerminalsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminals.<a href="/src/api/resources/terminals/client/Client.ts">postTerminals</a>({ ...params }) -> ButtonclikrApi.PostTerminalsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a terminal resource.
A terminal resource represents a device/software that will be used to process transactions.

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
await client.terminals.postTerminals({
    merchant: {
        key: "value",
    },
    type: ButtonclikrApi.PostTerminalsRequestType.UndefinedLlc,
    capability: ButtonclikrApi.PostTerminalsRequestCapability.One,
    environment: ButtonclikrApi.PostTerminalsRequestEnvironment.One,
    autoClose: ButtonclikrApi.PostTerminalsRequestAutoClose.Zero,
    autoCloseTime: {
        key: "value",
    },
    cloudEnabled: ButtonclikrApi.PostTerminalsRequestCloudEnabled.Zero,
    serial: {
        key: "value",
    },
    token: {
        key: "value",
    },
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    address1: {
        key: "value",
    },
    address2: {
        key: "value",
    },
    city: {
        key: "value",
    },
    state: "string",
    zip: {
        key: "value",
    },
    country: ButtonclikrApi.PostTerminalsRequestCountry.Abw,
    phone: {
        key: "value",
    },
    timezone: ButtonclikrApi.PostTerminalsRequestTimezone.Est,
    status: ButtonclikrApi.PostTerminalsRequestStatus.Zero,
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

**request:** `ButtonclikrApi.PostTerminalsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Terminals.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TerminalTransactions

<details><summary><code>client.terminalTransactions.<a href="/src/api/resources/terminalTransactions/client/Client.ts">getTerminalTxnDatasId</a>(id, { ...params }) -> ButtonclikrApi.GetTerminalTxnDatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalTxnDatas resource.
A terminalTxnDatas resource represents data associated with a Transaction - in particular, a Base64 encoded image of a signature captured at the time of entering the Transaction.

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
await client.terminalTransactions.getTerminalTxnDatasId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTerminalTxnDatasIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TerminalTransactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminalTransactions.<a href="/src/api/resources/terminalTransactions/client/Client.ts">getTerminalTxnDatas</a>({ ...params }) -> ButtonclikrApi.GetTerminalTxnDatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalTxnDatas resource.
A terminalTxnDatas resource represents data associated with a Transaction - in particular, a Base64 encoded image of a signature captured at the time of entering the Transaction.

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
await client.terminalTransactions.getTerminalTxnDatas({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTerminalTxnDatasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TerminalTransactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminalTransactions.<a href="/src/api/resources/terminalTransactions/client/Client.ts">postTerminalTxnDatas</a>({ ...params }) -> ButtonclikrApi.PostTerminalTxnDatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for create on terminalTxnDatas coming soon

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
await client.terminalTransactions.postTerminalTxnDatas({
    terminalTxn: {
        key: "value",
    },
    signature: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostTerminalTxnDatasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TerminalTransactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminalTransactions.<a href="/src/api/resources/terminalTransactions/client/Client.ts">getTerminalTxnMetadatasId</a>(id, { ...params }) -> ButtonclikrApi.GetTerminalTxnMetadatasIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalTxnMetadatas resource.
A terminalTxnMetadatas resource represents data from an EMV Transaction and/or returned by the credit card network associated with a Transaction.

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
await client.terminalTransactions.getTerminalTxnMetadatasId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetTerminalTxnMetadatasIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TerminalTransactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminalTransactions.<a href="/src/api/resources/terminalTransactions/client/Client.ts">getTerminalTxnMetadatas</a>({ ...params }) -> ButtonclikrApi.GetTerminalTxnMetadatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a terminalTxnMetadatas resource.
A terminalTxnMetadatas resource represents data from an EMV Transaction and/or returned by the credit card network associated with a Transaction.

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
await client.terminalTransactions.getTerminalTxnMetadatas({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetTerminalTxnMetadatasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TerminalTransactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.terminalTransactions.<a href="/src/api/resources/terminalTransactions/client/Client.ts">postTerminalTxnMetadatas</a>({ ...params }) -> ButtonclikrApi.PostTerminalTxnMetadatasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a terminalTxnMetadatas resource.
A terminalTxnMetadatas resource represents data from an EMV Transaction and/or returned by the credit card network associated with a Transaction.

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
await client.terminalTransactions.postTerminalTxnMetadatas({
    terminalTxn: {
        key: "value",
    },
    type: ButtonclikrApi.PostTerminalTxnMetadatasRequestType.Amounts,
    field: ButtonclikrApi.PostTerminalTxnMetadatasRequestField.Discretionary1,
    value: {
        key: "value",
    },
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

**request:** `ButtonclikrApi.PostTerminalTxnMetadatasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TerminalTransactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ValueAddedServices

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">getValueAddedServicesFlowsId</a>(id, { ...params }) -> ButtonclikrApi.GetValueAddedServicesFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Value Added Service Flow.
ValueAddedServicesFlow is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.getValueAddedServicesFlowsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetValueAddedServicesFlowsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">putValueAddedServicesFlowsId</a>(id, { ...params }) -> ButtonclikrApi.PutValueAddedServicesFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Value Added Services Flow.
.ValueAddedServicesFlow is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.putValueAddedServicesFlowsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        division: {
            key: "value",
        },
        org: {
            key: "value",
        },
        partition: {
            key: "value",
        },
        entity: {
            key: "value",
        },
        type: ButtonclikrApi.PutValueAddedServicesFlowsIdRequestType.OmniToken,
        platform: ButtonclikrApi.PutValueAddedServicesFlowsIdRequestPlatform.Apple,
        program: ButtonclikrApi.PutValueAddedServicesFlowsIdRequestProgram.Basic,
        inactive: ButtonclikrApi.PutValueAddedServicesFlowsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutValueAddedServicesFlowsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutValueAddedServicesFlowsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">deleteValueAddedServicesFlowsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteValueAddedServicesFlowsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Value Added Services Flow.
.ValueAddedServicesFlow is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.deleteValueAddedServicesFlowsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteValueAddedServicesFlowsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">getValueAddedServicesFlows</a>({ ...params }) -> ButtonclikrApi.GetValueAddedServicesFlowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Value Added Service Flow.
ValueAddedServicesFlow is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.getValueAddedServicesFlows({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetValueAddedServicesFlowsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">postValueAddedServicesFlows</a>({ ...params }) -> ButtonclikrApi.PostValueAddedServicesFlowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Value Added Services Flow.
.ValueAddedServicesFlow is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.postValueAddedServicesFlows({
    login: {
        key: "value",
    },
    division: {
        key: "value",
    },
    org: {
        key: "value",
    },
    partition: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    type: ButtonclikrApi.PostValueAddedServicesFlowsRequestType.OmniToken,
    platform: ButtonclikrApi.PostValueAddedServicesFlowsRequestPlatform.Apple,
    program: ButtonclikrApi.PostValueAddedServicesFlowsRequestProgram.Basic,
    inactive: ButtonclikrApi.PostValueAddedServicesFlowsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostValueAddedServicesFlowsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostValueAddedServicesFlowsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">getValueAddedServicesId</a>(id, { ...params }) -> ButtonclikrApi.GetValueAddedServicesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Value Added Service.
ValueAddedService is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.getValueAddedServicesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetValueAddedServicesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">putValueAddedServicesId</a>(id, { ...params }) -> ButtonclikrApi.PutValueAddedServicesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Value Added Service.
.ValueAddedService is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.putValueAddedServicesId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        serviceName: ButtonclikrApi.PutValueAddedServicesIdRequestServiceName.OmniToken,
        isEnabled: ButtonclikrApi.PutValueAddedServicesIdRequestIsEnabled.Zero,
        status: {
            key: "value",
        },
        additionalInformation: {
            key: "value",
        },
        platform: ButtonclikrApi.PutValueAddedServicesIdRequestPlatform.Apple,
        enablementDate: {
            key: "value",
        },
        valueAddedServicesFlow: {
            key: "value",
        },
        pciNonValidationFeeEnabled: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutValueAddedServicesIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutValueAddedServicesIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutValueAddedServicesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">deleteValueAddedServicesId</a>(id, { ...params }) -> ButtonclikrApi.DeleteValueAddedServicesIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Value Added Service.
.ValueAddedService is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.deleteValueAddedServicesId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteValueAddedServicesIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">getValueAddedServices</a>({ ...params }) -> ButtonclikrApi.GetValueAddedServicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Value Added Service.
ValueAddedService is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.getValueAddedServices({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetValueAddedServicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.valueAddedServices.<a href="/src/api/resources/valueAddedServices/client/Client.ts">postValueAddedServices</a>({ ...params }) -> ButtonclikrApi.PostValueAddedServicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Value Added Service.
.ValueAddedService is a resource that refers to any additional service o feature beyond the core payment processing functionality providing additional value to the user.

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
await client.valueAddedServices.postValueAddedServices({
    entity: {
        key: "value",
    },
    serviceName: ButtonclikrApi.PostValueAddedServicesRequestServiceName.OmniToken,
    isEnabled: ButtonclikrApi.PostValueAddedServicesRequestIsEnabled.Zero,
    status: {
        key: "value",
    },
    additionalInformation: {
        key: "value",
    },
    platform: ButtonclikrApi.PostValueAddedServicesRequestPlatform.Apple,
    enablementDate: {
        key: "value",
    },
    valueAddedServicesFlow: {
        key: "value",
    },
    pciNonValidationFeeEnabled: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostValueAddedServicesRequestInactive.Zero,
    frozen: ButtonclikrApi.PostValueAddedServicesRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostValueAddedServicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ValueAddedServices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Vendors

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">getVendorsId</a>(id, { ...params }) -> ButtonclikrApi.GetVendorsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Querying a Vendor resource represents a third-party vendor who interacts with the API, for example, a referral platform.

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
await client.vendors.getVendorsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, The Vendor ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetVendorsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">putVendorsId</a>(id, { ...params }) -> ButtonclikrApi.PutVendorsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Manage a Vendor resource.

Details:
Update a Vendor resource. A Vendor resource represents a third-party vendor who interacts with the API, for example, a referral platform.
Query a Vendor resource.

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
await client.vendors.putVendorsId(
    {
        key: "value",
    },
    {
        entity: {
            key: "value",
        },
        division: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutVendorsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutVendorsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource and The Vendor ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutVendorsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">deleteVendorsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteVendorsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Vendor or Vendors resource that represents a third-party vendor who interacts with the API, for example, a referral platform.

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
await client.vendors.deleteVendorsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource, The Vendor ID.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteVendorsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">getVendors</a>({ ...params }) -> ButtonclikrApi.GetVendorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Vendor resource. A Vendor resource represents a third-party vendor who interacts with the API, for example, a referral platform.

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
await client.vendors.getVendors({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetVendorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vendors.<a href="/src/api/resources/vendors/client/Client.ts">postVendors</a>({ ...params }) -> ButtonclikrApi.PostVendorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Vendor resource.
A Vendor resource represents a third-party vendor who interacts with the API, for example, a referral platform.

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
await client.vendors.postVendors({
    entity: {
        key: "value",
    },
    division: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostVendorsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostVendorsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostVendorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Vendors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Verifications

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">getVerificationsId</a>(id, { ...params }) -> ButtonclikrApi.GetVerificationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Verification.
A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
Any messages associated with the Verification are stored in verificationResults resources.

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
await client.verifications.getVerificationsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetVerificationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">putVerificationsId</a>(id, { ...params }) -> ButtonclikrApi.PutVerificationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Verification.
A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
Any messages associated with the Verification are stored in verificationResults resources.

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
await client.verifications.putVerificationsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        decision: {
            key: "value",
        },
        level: {
            key: "value",
        },
        fromCache: {
            key: "value",
        },
        additionalOptions: {
            key: "value",
        },
        options: {
            key: "value",
        },
        score: {
            key: "value",
        },
        description: {
            key: "value",
        },
        ref: {
            key: "value",
        },
        generated: ButtonclikrApi.PutVerificationsIdRequestGenerated.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutVerificationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">deleteVerificationsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteVerificationsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Verification.
A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
Any messages associated with the Verification are stored in verificationResults resources.

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
await client.verifications.deleteVerificationsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteVerificationsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">getVerifications</a>({ ...params }) -> ButtonclikrApi.GetVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Verification.
A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
Any messages associated with the Verification are stored in verificationResults resources.

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
await client.verifications.getVerifications({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetVerificationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">postVerifications</a>({ ...params }) -> ButtonclikrApi.PostVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Verification.
A Verification is a type of check that you can perform on a particular Entity, Member or Transaction.
Any messages associated with the Verification are stored in verificationResults resources.

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
await client.verifications.postVerifications({
    login: {
        key: "value",
    },
    entity: {
        key: "value",
    },
    member: {
        key: "value",
    },
    txn: {
        key: "value",
    },
    terminalTxn: {
        key: "value",
    },
    account: {
        key: "value",
    },
    decision: {
        key: "value",
    },
    type: ButtonclikrApi.PostVerificationsRequestType.AccountBalance,
    level: {
        key: "value",
    },
    fromCache: {
        key: "value",
    },
    additionalOptions: {
        key: "value",
    },
    options: {
        key: "value",
    },
    value: {
        key: "value",
    },
    score: {
        key: "value",
    },
    description: {
        key: "value",
    },
    ref: {
        key: "value",
    },
    generated: ButtonclikrApi.PostVerificationsRequestGenerated.Zero,
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

**request:** `ButtonclikrApi.PostVerificationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">getVerificationRefsId</a>(id, { ...params }) -> ButtonclikrApi.GetVerificationRefsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a VerificationRef.
A VerificationRef is a record used to store the reference number returned by bigbux Risk Integration.

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
await client.verifications.getVerificationRefsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetVerificationRefsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">getVerificationRefs</a>({ ...params }) -> ButtonclikrApi.GetVerificationRefsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a VerificationRef.
A VerificationRef is a record used to store the reference number returned by bigbux Risk Integration.

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
await client.verifications.getVerificationRefs({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetVerificationRefsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">getVerificationResultsId</a>(id, { ...params }) -> ButtonclikrApi.GetVerificationResultsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an accountVerificationResults resource.
An accountVerificationResults resource represents the result of an attempt to verify a bank account. It is linked to an accountVerification resource.

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
await client.verifications.getVerificationResultsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetVerificationResultsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">getVerificationResults</a>({ ...params }) -> ButtonclikrApi.GetVerificationResultsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an accountVerificationResults resource.
An accountVerificationResults resource represents the result of an attempt to verify a bank account. It is linked to an accountVerification resource.

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
await client.verifications.getVerificationResults({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetVerificationResultsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Versions

<details><summary><code>client.versions.<a href="/src/api/resources/versions/client/Client.ts">getVersionsId</a>(id, { ...params }) -> ButtonclikrApi.GetVersionsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on versions coming soon

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
await client.versions.getVersionsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetVersionsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Versions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.versions.<a href="/src/api/resources/versions/client/Client.ts">getVersions</a>({ ...params }) -> ButtonclikrApi.GetVersionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Details for query on versions coming soon

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
await client.versions.getVersions({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetVersionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Versions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Watchlists

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">getWatchlistItemsId</a>(id, { ...params }) -> ButtonclikrApi.GetWatchlistItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a WatchlistItem. A WatchlistItem is a set of attributes of a person or entity of interest.

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
await client.watchlists.getWatchlistItemsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetWatchlistItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">putWatchlistItemsId</a>(id, { ...params }) -> ButtonclikrApi.PutWatchlistItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a WatchlistItem. A WatchlistItem is a set of attributes of a person or entity of interest.

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
await client.watchlists.putWatchlistItemsId(
    {
        key: "value",
    },
    {
        watchlist: {
            key: "value",
        },
        type: ButtonclikrApi.PutWatchlistItemsIdRequestType.Entity,
        name: {
            key: "value",
        },
        title: {
            key: "value",
        },
        first: {
            key: "value",
        },
        middle: {
            key: "value",
        },
        last: {
            key: "value",
        },
        ein: {
            key: "value",
        },
        ssn: {
            key: "value",
        },
        dob: {
            key: "value",
        },
        dl: {
            key: "value",
        },
        dlstate: "string",
        email: {
            key: "value",
        },
        website: {
            key: "value",
        },
        ipAddress: {
            key: "value",
        },
        payment: {
            method: ButtonclikrApi.PutWatchlistItemsIdRequestPaymentMethod.One,
            number: {
                key: "value",
            },
            routing: {
                key: "value",
            },
        },
        bin: {
            key: "value",
        },
        last4: {
            key: "value",
        },
        keyword: {
            key: "value",
        },
        ref: {
            key: "value",
        },
        custom: {
            key: "value",
        },
        notes: {
            key: "value",
        },
        address1: {
            key: "value",
        },
        address2: {
            key: "value",
        },
        city: {
            key: "value",
        },
        state: "string",
        zip: {
            key: "value",
        },
        country: ButtonclikrApi.PutWatchlistItemsIdRequestCountry.Abw,
        phone: {
            key: "value",
        },
        fax: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutWatchlistItemsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutWatchlistItemsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutWatchlistItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">deleteWatchlistItemsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteWatchlistItemsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a WatchlistItem. A WatchlistItem is a set of attributes of a person or entity of interest.

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
await client.watchlists.deleteWatchlistItemsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteWatchlistItemsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">getWatchlistItems</a>({ ...params }) -> ButtonclikrApi.GetWatchlistItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a WatchlistItem. A WatchlistItem is a set of attributes of a person or entity of interest.

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
await client.watchlists.getWatchlistItems({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetWatchlistItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">postWatchlistItems</a>({ ...params }) -> ButtonclikrApi.PostWatchlistItemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a WatchlistItem. A WatchlistItem is a set of attributes of a person or entity of interest.

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
await client.watchlists.postWatchlistItems({
    watchlist: {
        key: "value",
    },
    type: ButtonclikrApi.PostWatchlistItemsRequestType.Entity,
    name: {
        key: "value",
    },
    title: {
        key: "value",
    },
    first: {
        key: "value",
    },
    middle: {
        key: "value",
    },
    last: {
        key: "value",
    },
    ein: {
        key: "value",
    },
    ssn: {
        key: "value",
    },
    dob: {
        key: "value",
    },
    dl: {
        key: "value",
    },
    dlstate: "string",
    email: {
        key: "value",
    },
    website: {
        key: "value",
    },
    ipAddress: {
        key: "value",
    },
    payment: {
        method: ButtonclikrApi.PostWatchlistItemsRequestPaymentMethod.One,
        number: {
            key: "value",
        },
        routing: {
            key: "value",
        },
    },
    bin: {
        key: "value",
    },
    last4: {
        key: "value",
    },
    keyword: {
        key: "value",
    },
    ref: {
        key: "value",
    },
    custom: {
        key: "value",
    },
    notes: {
        key: "value",
    },
    address1: {
        key: "value",
    },
    address2: {
        key: "value",
    },
    city: {
        key: "value",
    },
    state: "string",
    zip: {
        key: "value",
    },
    country: ButtonclikrApi.PostWatchlistItemsRequestCountry.Abw,
    phone: {
        key: "value",
    },
    fax: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostWatchlistItemsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostWatchlistItemsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostWatchlistItemsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">getWatchlistsId</a>(id, { ...params }) -> ButtonclikrApi.GetWatchlistsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Watchlist. A Watchlist is a list of WatchlistItems.
WatchlistItems will be associated with a Watchlist and can be used in Decisions.

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
await client.watchlists.getWatchlistsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.GetWatchlistsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">putWatchlistsId</a>(id, { ...params }) -> ButtonclikrApi.PutWatchlistsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Watchlist. A Watchlist is a list of WatchlistItems.
WatchlistItems will be associated with a Watchlist and can be used in Decisions.

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
await client.watchlists.putWatchlistsId(
    {
        key: "value",
    },
    {
        login: {
            key: "value",
        },
        integration: ButtonclikrApi.PutWatchlistsIdRequestIntegration.Apple,
        name: {
            key: "value",
        },
        description: {
            key: "value",
        },
        default: ButtonclikrApi.PutWatchlistsIdRequestDefault.Zero,
        custom: {
            key: "value",
        },
        inactive: ButtonclikrApi.PutWatchlistsIdRequestInactive.Zero,
        frozen: ButtonclikrApi.PutWatchlistsIdRequestFrozen.Zero,
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.PutWatchlistsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">deleteWatchlistsId</a>(id, { ...params }) -> ButtonclikrApi.DeleteWatchlistsIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Watchlist. A Watchlist is a list of WatchlistItems.
WatchlistItems will be associated with a Watchlist and can be used in Decisions.

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
await client.watchlists.deleteWatchlistsId(
    {
        key: "value",
    },
    {
        expand: "string",
        unmask: "string",
    }
);
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

**id:** `unknown` — The ID of this resource.

</dd>
</dl>

<dl>
<dd>

**request:** `ButtonclikrApi.DeleteWatchlistsIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">getWatchlists</a>({ ...params }) -> ButtonclikrApi.GetWatchlistsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a Watchlist. A Watchlist is a list of WatchlistItems.
WatchlistItems will be associated with a Watchlist and can be used in Decisions.

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
await client.watchlists.getWatchlists({
    expand: "string",
    unmask: "string",
    pageNumber: "string",
    pageLimit: "string",
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

**request:** `ButtonclikrApi.GetWatchlistsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.watchlists.<a href="/src/api/resources/watchlists/client/Client.ts">postWatchlists</a>({ ...params }) -> ButtonclikrApi.PostWatchlistsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Watchlist. A Watchlist is a list of WatchlistItems.
WatchlistItems will be associated with a Watchlist and can be used in Decisions.

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
await client.watchlists.postWatchlists({
    login: {
        key: "value",
    },
    integration: ButtonclikrApi.PostWatchlistsRequestIntegration.Apple,
    name: {
        key: "value",
    },
    description: {
        key: "value",
    },
    default: ButtonclikrApi.PostWatchlistsRequestDefault.Zero,
    custom: {
        key: "value",
    },
    inactive: ButtonclikrApi.PostWatchlistsRequestInactive.Zero,
    frozen: ButtonclikrApi.PostWatchlistsRequestFrozen.Zero,
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

**request:** `ButtonclikrApi.PostWatchlistsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Watchlists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
