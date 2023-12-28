import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless'

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  image:{
    domains:["pexels.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  output:'hybrid',
  adapter:vercel(),
  base: "/",
    trailingSlash: "always"
});