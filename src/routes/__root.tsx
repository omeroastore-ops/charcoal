import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "../components/koehler-site";

function NotFoundComponent() {
  return (
    <div className="status-page">
      <div className="status-panel">
        <h1 className="status-code">404</h1>
        <h2>Page not found</h2>
        <p>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="status-actions">
          <Link
            to="/"
            className="status-button status-button-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="status-page">
      <div className="status-panel">
        <h1>
          This page didn't load
        </h1>
        <p>
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="status-actions">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="status-button status-button-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="status-button status-button-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Köhler Stoll | Historische Köhlerei im Schwarzwald" },
      { name: "description", content: "Karl Josef Stoll zeigt die traditionelle Köhlerei in Dachsberg – vom Holzmeiler bis zur fertigen Holzkohle." },
      { name: "author", content: "Karl Josef Stoll" },
      { property: "og:title", content: "Köhler Stoll – Historische Köhlerei" },
      { property: "og:description", content: "Das alte Handwerk der Köhlerei, lebendig erzählt im Schwarzwald." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=UnifrakturCook:wght@700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider><Outlet /></LanguageProvider>
    </QueryClientProvider>
  );
}
