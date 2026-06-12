import { r as LanguageProvider } from "./koehler-site-CoLK6kNE.js";
import { t as holzkohle_new_default } from "./holzkohle-new-DmR6SYyx.js";
import { t as meiler_feuer_new_default } from "./meiler-feuer-new-CJ7tTcvT.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/charcoal/assets/styles-Ba-S7viX.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "status-page",
		children: /* @__PURE__ */ jsxs("div", {
			className: "status-panel",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "status-code",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", { children: "Page not found" }),
				/* @__PURE__ */ jsx("p", { children: "The page you're looking for doesn't exist or has been moved." }),
				/* @__PURE__ */ jsx("div", {
					className: "status-actions",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "status-button status-button-primary",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "status-page",
		children: /* @__PURE__ */ jsxs("div", {
			className: "status-panel",
			children: [
				/* @__PURE__ */ jsx("h1", { children: "This page didn't load" }),
				/* @__PURE__ */ jsx("p", { children: "Something went wrong on our end. You can try refreshing or head back home." }),
				/* @__PURE__ */ jsxs("div", {
					className: "status-actions",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "status-button status-button-primary",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "status-button status-button-secondary",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Köhler Stoll | Historische Köhlerei im Schwarzwald" },
			{
				name: "description",
				content: "Karl Josef Stoll zeigt die traditionelle Köhlerei in Dachsberg – vom Holzmeiler bis zur fertigen Holzkohle."
			},
			{
				name: "author",
				content: "Karl Josef Stoll"
			},
			{
				property: "og:title",
				content: "Köhler Stoll – Historische Köhlerei"
			},
			{
				property: "og:description",
				content: "Das alte Handwerk der Köhlerei, lebendig erzählt im Schwarzwald."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=UnifrakturCook:wght@700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) })
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "https://omeroastore-ops.github.io/charcoal";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const urls = [
		"/",
		"/koehlerei",
		"/kontakt"
	].map((path, index) => `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${index === 0 ? "1.0" : "0.8"}</priority>\n  </url>`);
	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/kontakt.tsx
var $$splitComponentImporter$2 = () => import("./kontakt-DIeSryGl.js");
var Route$2 = createFileRoute("/kontakt")({
	head: () => ({ meta: [
		{ title: "Holzkohle kaufen & Kontakt | Karl Josef Stoll" },
		{
			name: "description",
			content: "Traditionelle Holzkohle kaufen und Karl Josef Stoll in Dachsberg kontaktieren."
		},
		{
			property: "og:title",
			content: "Holzkohle kaufen & Kontakt | Köhler Stoll"
		},
		{
			property: "og:description",
			content: "Kontakt, Abholung und Anfragen zur historischen Darstellung der Köhlerei."
		},
		{
			property: "og:image",
			content: holzkohle_new_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/koehlerei.tsx
var $$splitComponentImporter$1 = () => import("./koehlerei-CSxhJeH6.js");
var Route$1 = createFileRoute("/koehlerei")({
	head: () => ({ meta: [
		{ title: "Die Köhlerei – Handwerk & Prozess | Köhler Stoll" },
		{
			name: "description",
			content: "Vom Aufschichten des Meilers bis zur fertigen Holzkohle: das historische Handwerk Schritt für Schritt."
		},
		{
			property: "og:title",
			content: "Die Köhlerei – Handwerk & Prozess"
		},
		{
			property: "og:description",
			content: "Entdecken Sie den traditionellen Aufbau und Brand eines Holzkohlemeilers."
		},
		{
			property: "og:image",
			content: "/charcoal/images/chapter_1_image.jpg"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-JTN8hTdt.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Die Reise der Kohle | Köhler Stoll" },
		{
			name: "description",
			content: "Erleben Sie die traditionelle Köhlerei mit Karl Josef Stoll in Dachsberg im Schwarzwald."
		},
		{
			property: "og:title",
			content: "Die Reise der Kohle | Köhler Stoll"
		},
		{
			property: "og:description",
			content: "Eine glühende Reise durch das historische Handwerk der Köhlerei."
		},
		{
			property: "og:image",
			content: meiler_feuer_new_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$4
});
var KontaktRoute = Route$2.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$4
});
var KoehlereiRoute = Route$1.update({
	id: "/koehlerei",
	path: "/koehlerei",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	KoehlereiRoute,
	KontaktRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		basepath: "/charcoal",
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
