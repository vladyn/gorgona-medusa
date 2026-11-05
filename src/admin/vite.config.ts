import { defineConfig } from "vite"

const allowedHosts = process.env.ADMIN_ALLOWED_HOSTS
  ? process.env.ADMIN_ALLOWED_HOSTS.split(",")
  : ["localhost", "gorgona-medusa.onrender.com"]

export default defineConfig({
  server: {
    allowedHosts,
  },
})
