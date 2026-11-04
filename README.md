# Gorgona Medusa Backend

Medusa v2 backend application for the Gorgona store.

## Prerequisites

- Node.js 22.22+
- PostgreSQL database

## Environment variables

Copy `.env.template` to `.env` and fill in the values:

```bash
cp .env.template .env
```

Required variables:

- `DATABASE_URL` — PostgreSQL connection string
- `JWT_SECRET` — secret for JWT tokens
- `COOKIE_SECRET` — secret for cookies
- `STORE_CORS`, `ADMIN_CORS`, `AUTH_CORS` — CORS origins

## Development

```bash
npm install
npm run dev
```

The server will be available at `http://localhost:9000` and the admin dashboard at `http://localhost:9000/app`.

## Database commands

```bash
# Run migrations
npx medusa db:migrate

# Create an admin user
npx medusa user -e admin@example.com -p password
```

## Build

```bash
npm run build
npm run start
```
