import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import getConfig from "next/config";
import { Integrations } from "@sentry/tracing";

export function initSentry() {
  const config = getConfig();
  const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          frame.filename = frame.filename?.replace(distDir, "app:///_next");
          return frame;
        },
      }),
      new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 0.3,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    release: process.env.VERCEL_GITHUB_COMMIT_SHA,
  });
}
