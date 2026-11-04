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

## Deploy on Render

Use the `render-deploy` branch for Render deployments.

### One-click deploy

1. Push this branch to `git@github.com:vladyn/gorgona-medusa.git`.
2. In the Render dashboard, create a new **Blueprint** and select the `gorgona-medusa` repository.
3. Render will read `render.yaml` and create the web service.
4. When prompted, set the secret environment variables:
   - `DATABASE_URL` — your PostgreSQL connection string (e.g. from Supabase)
   - `STORE_CORS` — comma-separated list of storefront origins
   - `ADMIN_CORS` — origin allowed for the admin dashboard
   - `AUTH_CORS` — comma-separated auth origins

### Manual deploy

If you prefer not to use the Blueprint:

1. Create a new **Web Service** in Render.
2. Connect `git@github.com:vladyn/gorgona-medusa.git` and select the `render-deploy` branch.
3. Set:
   - **Runtime:** Node
   - **Build Command:** `npm install --legacy-peer-deps && npm run build`
   - **Start Command:** `npm run start`
   - **Health Check Path:** `/health`
4. Add the environment variables listed above.

### After deploy

Run migrations from your local machine or the Render shell:

```bash
npx medusa db:migrate
```

Then create an admin user:

```bash
npx medusa user -e admin@example.com -p password
```
