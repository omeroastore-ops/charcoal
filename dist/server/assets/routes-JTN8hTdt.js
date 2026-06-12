import { a as RevealChapter, i as PageFrame, n as EmberDivider, o as useLanguage, s as Button, t as CharcoalGuide } from "./koehler-site-CoLK6kNE.js";
import { t as holzkohle_new_default } from "./holzkohle-new-DmR6SYyx.js";
import { t as meiler_feuer_new_default } from "./meiler-feuer-new-CJ7tTcvT.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowDown, ArrowRight } from "lucide-react";
//#region src/assets/koehler-rauch-new.jpg
var koehler_rauch_new_default = "/charcoal/assets/koehler-rauch-new-CJzc2uq3.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsxs(PageFrame, {
		folio: "I",
		children: [
			/* @__PURE__ */ jsx(CharcoalGuide, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "hero-prologue",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "hero-smoke",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "kicker",
						children: "Anno 2016 · Dachsberg im Schwarzwald"
					}),
					/* @__PURE__ */ jsx("h1", { children: t("Vom Holz zum schwarzen Gold", "From timber to black gold") }),
					/* @__PURE__ */ jsx("p", {
						className: "hero-lead",
						children: t("Eine Reise in das uralte Handwerk des Köhlers – erzählt von Feuer, Geduld und dem Atem des Waldes.", "A journey into the ancient charcoal maker’s craft – a story of fire, patience and the breath of the forest.")
					}),
					/* @__PURE__ */ jsx(Button, {
						asChild: true,
						variant: "manuscript",
						children: /* @__PURE__ */ jsxs("a", {
							href: "#prolog",
							children: [
								t("Die Glut erwecken", "Awaken the ember"),
								" ",
								/* @__PURE__ */ jsx(ArrowDown, {})
							]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hero-rune",
						"aria-hidden": "true",
						children: "K"
					})
				]
			}),
			/* @__PURE__ */ jsx(EmberDivider, {}),
			/* @__PURE__ */ jsxs("div", {
				id: "prolog",
				className: "journey-line",
				children: [
					/* @__PURE__ */ jsxs(RevealChapter, {
						index: "I",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "chapter-copy",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "eyebrow",
									children: t("Der Ursprung", "The origin")
								}),
								/* @__PURE__ */ jsx("h2", { children: t("Der Wald gibt sein Holz", "The forest yields its timber") }),
								/* @__PURE__ */ jsx("p", { children: t("Nur sorgfältig ausgewähltes, trockenes Holz findet seinen Platz im Meiler. Lage um Lage wächst ein hölzerner Berg um den Quandelschacht – das Herz des späteren Feuers.", "Only carefully selected, seasoned timber earns its place in the kiln. Layer by layer, a wooden mound rises around the central shaft – the heart of the fire to come.") })
							]
						}), /* @__PURE__ */ jsxs("figure", {
							className: "charred-photo",
							children: [/* @__PURE__ */ jsx("img", {
								src: koehler_rauch_new_default,
								className: "w-full aspect-square object-cover",
								alt: t("Karl Josef Stoll am rauchenden Meiler", "Karl Josef Stoll beside the smoking kiln")
							}), /* @__PURE__ */ jsxs("figcaption", { children: ["Karl Josef Stoll · ", t("Köhler aus Leidenschaft", "Charcoal maker by passion")] })]
						})]
					}),
					/* @__PURE__ */ jsxs(RevealChapter, {
						index: "II",
						children: [/* @__PURE__ */ jsxs("figure", {
							className: "charred-photo",
							children: [/* @__PURE__ */ jsx("img", {
								src: meiler_feuer_new_default,
								className: "w-full aspect-square object-cover",
								loading: "lazy",
								alt: t("Brennender historischer Holzmeiler", "Burning traditional charcoal kiln")
							}), /* @__PURE__ */ jsx("figcaption", { children: t("Wenn der Meiler zu atmen beginnt", "When the kiln begins to breathe") })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "chapter-copy",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "eyebrow",
									children: t("Das Feuer", "The fire")
								}),
								/* @__PURE__ */ jsx("h2", { children: t("Die Glut wird gehütet", "The ember is guarded") }),
								/* @__PURE__ */ jsx("p", { children: t("Tage und Nächte wacht der Köhler. Nicht Flammen, sondern eine langsame, sauerstoffarme Verkohlung verwandelt das Holz. Farbe und Duft des Rauches verraten, was im Innern geschieht.", "For days and nights the charcoal maker keeps watch. Not flames, but slow carbonisation with little oxygen transforms the wood. The colour and scent of the smoke reveal what happens within.") })
							]
						})]
					}),
					/* @__PURE__ */ jsxs(RevealChapter, {
						index: "III",
						children: [/* @__PURE__ */ jsxs("figure", {
							className: "charred-photo",
							children: [/* @__PURE__ */ jsx("img", {
								src: holzkohle_new_default,
								className: "w-full aspect-square object-cover",
								loading: "lazy",
								alt: t("Fertige Holzkohlestücke aus dem Meiler", "Finished charcoal pieces from the kiln")
							}), /* @__PURE__ */ jsx("figcaption", { children: t("Das schwarze Gold – bereit aus dem Meiler", "Black gold – ready from the kiln") })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "final-inscription",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "eyebrow",
									children: t("Das Vermächtnis", "The legacy")
								}),
								/* @__PURE__ */ jsx("h2", { children: t("Ein Handwerk, das weiterglüht", "A craft that keeps glowing") }),
								/* @__PURE__ */ jsx("p", { children: t("Historische Köhlerei ist lebendige Erinnerung. Karl Josef Stoll bewahrt Wissen, das einst ganze Täler mit Wärme, Arbeit und Geschichten versorgte.", "Historic charcoal making is living memory. Karl Josef Stoll preserves knowledge that once supplied entire valleys with warmth, work and stories.") }),
								/* @__PURE__ */ jsx(Button, {
									asChild: true,
									variant: "manuscriptOutline",
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/koehlerei",
										children: [
											t("Im Buch weiterlesen", "Continue in the book"),
											" ",
											/* @__PURE__ */ jsx(ArrowRight, {})
										]
									})
								})
							]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
