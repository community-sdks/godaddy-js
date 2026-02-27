# GoDaddy JavaScript SDK

## Getting Started

```bash
cd godaddy/godaddy-javascript
npm install
```

```js
import { Client, Config } from './src/index.js';

const client = new Client(new Config({
  apiKey: 'your-key',
  apiSecret: 'your-secret'
}));
```

## Services

- `client.abuse()`
- `client.aftermarket()`
- `client.agreements()`
- `client.ans()`
- `client.auctions()`
- `client.certificates()`
- `client.countries()`
- `client.domains()`
- `client.orders()`
- `client.parking()`
- `client.shoppers()`
- `client.subscriptions()`
