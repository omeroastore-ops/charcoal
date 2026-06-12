import * as React from "react";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Flame, Menu, X } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
//#region src/components/ui/button.tsx
var Button = React.forwardRef(({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: `button button-${variant} button-${size} ${className}`.trim(),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/koehler-site.tsx
var LanguageContext = createContext(null);
function LanguageProvider({ children }) {
	const [language, setLanguage] = useState("de");
	const value = useMemo(() => ({
		language,
		setLanguage,
		t: (de, en) => language === "de" ? de : en
	}), [language]);
	return /* @__PURE__ */ jsx(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
	return context;
}
var nav = {
	journey: {
		de: "Die Reise",
		en: "The Journey"
	},
	craft: {
		de: "Die Köhlerei",
		en: "The Craft"
	},
	shop: {
		de: "Kohle & Kontakt",
		en: "Charcoal & Contact"
	}
};
function SiteHeader() {
	const { language, setLanguage } = useLanguage();
	const [open, setOpen] = useState(false);
	useEffect(() => setOpen(false), [useRouterState({ select: (state) => state.location.pathname })]);
	return /* @__PURE__ */ jsx("header", {
		className: "manuscript-header",
		children: /* @__PURE__ */ jsxs("div", {
			className: "header-inner",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "brand-mark",
					"aria-label": "Karl Josef Stoll – Startseite",
					children: [/* @__PURE__ */ jsx("span", {
						className: "brand-sigil",
						children: /* @__PURE__ */ jsx(Flame, { "aria-hidden": "true" })
					}), /* @__PURE__ */ jsxs("span", {
						className: "brand-copy",
						children: [/* @__PURE__ */ jsx("strong", { children: "Köhler Stoll" }), /* @__PURE__ */ jsx("small", { children: "Dachsberg · Schwarzwald" })]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: open ? "site-nav is-open" : "site-nav",
					"aria-label": "Hauptnavigation",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							activeOptions: { exact: true },
							children: nav.journey[language]
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/koehlerei",
							children: nav.craft[language]
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/kontakt",
							children: nav.shop[language]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "header-actions",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "language-toggle",
						"aria-label": "Sprache wählen",
						children: [
							/* @__PURE__ */ jsx("button", {
								className: language === "de" ? "active" : "",
								onClick: () => setLanguage("de"),
								"aria-pressed": language === "de",
								children: "DE"
							}),
							/* @__PURE__ */ jsx("button", {
								className: language === "en" ? "active" : "",
								onClick: () => setLanguage("en"),
								"aria-pressed": language === "en",
								children: "EN"
							}),
							/* @__PURE__ */ jsx("span", { className: language === "en" ? "toggle-ember right" : "toggle-ember" })
						]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "manuscriptIcon",
						size: "icon",
						className: "menu-toggle",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Menü schließen" : "Menü öffnen",
						children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
					})]
				})
			]
		})
	});
}
function PageFrame({ children, folio }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "book-world",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "parchment-page",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "soot soot-one",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "soot soot-two",
						"aria-hidden": "true"
					}),
					children,
					/* @__PURE__ */ jsxs("div", {
						className: "folio",
						"aria-hidden": "true",
						children: [
							"— ",
							folio,
							" —"
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "site-footer",
				children: "Karl Josef Stoll · Historische Darstellung der Köhlerei · Dachsberg"
			})
		]
	});
}
function EmberDivider() {
	return /* @__PURE__ */ jsxs("div", {
		className: "ember-divider",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("span", {}),
			/* @__PURE__ */ jsx(Flame, {}),
			/* @__PURE__ */ jsx("span", {})
		]
	});
}
function CharcoalGuide() {
	const coalRef = useRef(null);
	useEffect(() => {
		const coal = coalRef.current;
		if (!coal) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const checkpoints = Array.from(document.querySelectorAll(".burn-slot"));
			if (!checkpoints.length) return;
			const viewportY = window.innerHeight * .5;
			const anchors = checkpoints.map((checkpoint) => {
				const bounds = checkpoint.getBoundingClientRect();
				return bounds.top + window.scrollY + bounds.height / 2 - viewportY;
			});
			const lastIndex = anchors.length - 1;
			let segment = 0;
			let progress = 0;
			if (window.scrollY < anchors[0]) progress = 0;
			else if (window.scrollY >= anchors[lastIndex]) {
				segment = Math.max(lastIndex - 1, 0);
				progress = 1;
			} else {
				segment = Math.max(0, anchors.findIndex((anchor) => anchor > window.scrollY) - 1);
				const span = Math.max(anchors[segment + 1] - anchors[segment], 1);
				progress = (window.scrollY - anchors[segment]) / span;
			}
			const nearestIndex = anchors.reduce((best, anchor, index) => Math.abs(anchor - window.scrollY) < Math.abs(anchors[best] - window.scrollY) ? index : best, 0);
			const snapRange = window.innerWidth >= 768 ? 90 : 64;
			const isSnapped = Math.abs(anchors[nearestIndex] - window.scrollY) <= snapRange;
			const guideBounds = document.querySelector(".journey-line")?.getBoundingClientRect();
			const isOnJourney = Boolean(guideBounds && guideBounds.top <= viewportY && guideBounds.bottom >= viewportY);
			const targetX = guideBounds ? guideBounds.left + guideBounds.width / 2 : window.innerWidth / 2;
			const targetY = viewportY;
			checkpoints.forEach((checkpoint, index) => {
				checkpoint.classList.toggle("is-complete", window.scrollY >= anchors[index] - snapRange);
				checkpoint.classList.toggle("is-snapped", isSnapped && index === nearestIndex);
			});
			coal.classList.toggle("is-visible", isOnJourney);
			coal.classList.toggle("is-snapped", isSnapped);
			coal.style.transform = `translate3d(${targetX - window.innerWidth / 2}px, calc(${targetY}px - 50%), 0) rotate(${(segment + progress) * 150}deg)`;
		};
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule, { passive: true });
		return () => {
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		ref: coalRef,
		className: "charcoal-guide",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("span", { className: "coal-core" }),
			/* @__PURE__ */ jsx("i", {}),
			/* @__PURE__ */ jsx("b", {})
		]
	});
}
function RevealChapter({ children, index }) {
	const ref = useRef(null);
	useEffect(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) element.classList.add("revealed");
		}, { threshold: .28 });
		observer.observe(element);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		ref,
		className: "reveal-chapter",
		children: [/* @__PURE__ */ jsx("div", {
			className: "burn-slot",
			"data-checkpoint": index,
			children: /* @__PURE__ */ jsx("span", { children: index })
		}), children]
	});
}
//#endregion
export { RevealChapter as a, PageFrame as i, EmberDivider as n, useLanguage as o, LanguageProvider as r, Button as s, CharcoalGuide as t };
