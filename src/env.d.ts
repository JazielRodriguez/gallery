/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PRIVATE_KEY_ID: string;
  readonly PRIVATE_KEY: string;
  readonly PROJECT_ID: string;
  readonly CLIENT_EMAIL: string;
  readonly CLIENT_ID: string;
  readonly AUTH_URI: string;
  readonly TOKEN_URI: string;
  readonly AUTH_CERT_URL: string;
  readonly CLIENT_CERT_URL: string;
  readonly PUBLIC_APIKEY: string;
  readonly PUBLIC_AUTH_DOMAIN: string;
  readonly PULBIC_PROJECT_ID: string;
  readonly PUBLIC_STORAGE_BUCKET: string;
  readonly PUBLIC_MESSAGING_SENDER_ID: string;
  readonly PUBLIC_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
