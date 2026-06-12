import { i as PageFrame, n as EmberDivider, o as useLanguage, s as Button } from "./koehler-site-CoLK6kNE.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region src/routes/koehlerei.tsx?tsr-split=component
var steps = [
	{
		n: "01",
		de: "Der Quandelschacht",
		en: "The central shaft",
		deText: "Im Mittelpunkt entsteht der senkrechte Feuerschacht. Um ihn wird das Holz dicht, aufrecht und mit sicherer Hand geschichtet.",
		enText: "At the centre, the vertical fire shaft is built. Around it, the timber is stacked tightly and upright by an experienced hand.",
		image: "/charcoal/images/chapter_1_image.jpg"
	},
	{
		n: "02",
		de: "Die schützende Decke",
		en: "The protective cover",
		deText: "Reisig, Gras und Erde dichten den Meiler ab. Kleine Zuglöcher lenken Luft und Hitze – der Meiler wird zum lebendigen Ofen.",
		enText: "Brushwood, grass and earth seal the kiln. Small vents guide air and heat – the mound becomes a living oven.",
		image: "/charcoal/images/chapter_2_image.jpg"
	},
	{
		n: "03",
		de: "Der stille Brand",
		en: "The silent burn",
		deText: "Durch den Quandelschacht wird entzündet. Der Köhler liest den Rauch, versetzt Luftlöcher und hält den Brand Tag und Nacht im Gleichgewicht.",
		enText: "The kiln is lit through its central shaft. The maker reads the smoke, moves the vents and keeps the burn balanced day and night.",
		image: "/charcoal/images/chapter_3_image.jpg"
	},
	{
		n: "04",
		de: "Das schwarze Gold",
		en: "The black gold",
		deText: "Nach dem Abkühlen wird der Meiler geöffnet. Leichte, klingende Holzkohle kommt ans Licht – geschaffen mit Zeit statt Eile.",
		enText: "Once cooled, the kiln is opened. Light, ringing charcoal emerges – made with time rather than haste.",
		image: "/charcoal/images/chapter_4_image.jpg"
	}
];
function CraftPage() {
	const { language, t } = useLanguage();
	return /* @__PURE__ */ jsxs(PageFrame, {
		folio: "II",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "page-title",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "kicker",
						children: t("Das zweite Buch", "The second book")
					}),
					/* @__PURE__ */ jsx("h1", { children: t("Die Kunst der Köhlerei", "The art of charcoal making") }),
					/* @__PURE__ */ jsx("p", { children: t("Vier Kapitel zwischen Holz und Glut", "Four chapters between timber and ember") })
				]
			}),
			/* @__PURE__ */ jsx(EmberDivider, {}),
			/* @__PURE__ */ jsx("div", {
				className: "book-spread",
				children: steps.map((step, i) => /* @__PURE__ */ jsxs("article", {
					className: "process-entry",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "process-text",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "chapter-number",
								children: ["Caput ", step.n]
							}),
							/* @__PURE__ */ jsx("h2", { children: step[language === "de" ? "de" : "en"] }),
							/* @__PURE__ */ jsx("p", { children: step[language === "de" ? "deText" : "enText"] }),
							/* @__PURE__ */ jsx("div", {
								className: "ink-flourish",
								"aria-hidden": "true",
								children: "❧"
							})
						]
					}), /* @__PURE__ */ jsxs("figure", {
						className: "charred-photo",
						children: [/* @__PURE__ */ jsx("img", {
							src: step.image,
							className: "w-full aspect-square object-cover",
							loading: i > 0 ? "lazy" : "eager",
							alt: step[language === "de" ? "de" : "en"]
						}), /* @__PURE__ */ jsx("figcaption", { children: t("Aus dem Bildarchiv von Karl Josef Stoll", "From Karl Josef Stoll’s photographic archive") })]
					})]
				}, step.n))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "craft-cta",
				children: [
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						children: "❧"
					}),
					/* @__PURE__ */ jsx(Button, {
						asChild: true,
						variant: "manuscript",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/kontakt",
							children: ["Kohle, Wort & Handschlag ", /* @__PURE__ */ jsx(ArrowRight, {})]
						})
					}),
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						children: "❧"
					})
				]
			})
		]
	});
}
//#endregion
export { CraftPage as component };
