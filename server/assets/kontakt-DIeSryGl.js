import { i as PageFrame, n as EmberDivider, o as useLanguage, s as Button } from "./koehler-site-CoLK6kNE.js";
import { t as holzkohle_new_default } from "./holzkohle-new-DmR6SYyx.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
//#region src/assets/karl-stoll-new.jpg
var karl_stoll_new_default = "/charcoal/assets/karl-stoll-new-BsPpT_s_.jpg";
//#endregion
//#region src/routes/kontakt.tsx?tsr-split=component
function ContactPage() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsxs(PageFrame, {
		folio: "III",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "page-title",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "kicker",
						children: t("Das Schlusskapitel", "The final chapter")
					}),
					/* @__PURE__ */ jsx("h1", { children: t("Kohle, Wort & Handschlag", "Charcoal, word & handshake") }),
					/* @__PURE__ */ jsx("p", { children: t("Bestellung, Vorführung und persönliche Nachricht", "Orders, demonstrations and personal messages") })
				]
			}),
			/* @__PURE__ */ jsx(EmberDivider, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "ledger-layout",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "order-ledger",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: t("Aus dem Meiler", "From the kiln")
						}),
						/* @__PURE__ */ jsx("h2", { children: t("Echte Holzkohle anfragen", "Enquire about real charcoal") }),
						/* @__PURE__ */ jsx("img", {
							src: holzkohle_new_default,
							width: 1024,
							height: 768,
							alt: t("Handgemachte Holzkohle", "Handmade charcoal")
						}),
						/* @__PURE__ */ jsx("p", { children: t("Für Verfügbarkeit, Menge und Abholung nehmen Sie bitte direkt Kontakt auf. Jede Charge folgt dem Rhythmus des Meilers – kein Massenprodukt, sondern echtes Handwerk.", "For availability, quantity and collection, please get in touch directly. Every batch follows the rhythm of the kiln – not a mass product, but genuine craft.") }),
						/* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "manuscript",
							children: /* @__PURE__ */ jsxs("a", {
								href: "mailto:karl-dachsberg@web.de?subject=Anfrage%20Holzkohle",
								children: [
									t("Anfrage schreiben", "Send an enquiry"),
									" ",
									/* @__PURE__ */ jsx(Mail, {})
								]
							})
						})
					]
				}), /* @__PURE__ */ jsxs("aside", {
					className: "contact-manuscript",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "wax-seal",
							"aria-hidden": "true",
							children: "KS"
						}),
						/* @__PURE__ */ jsx("img", {
							className: "portrait",
							src: karl_stoll_new_default,
							width: 768,
							height: 768,
							loading: "lazy",
							alt: "Karl Josef Stoll"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: t("Der Köhler", "The charcoal maker")
						}),
						/* @__PURE__ */ jsx("h2", { children: "Karl Josef Stoll" }),
						/* @__PURE__ */ jsx("p", {
							className: "concept",
							children: "Historische Darstellung der Köhlerei"
						}),
						/* @__PURE__ */ jsxs("address", { children: [
							/* @__PURE__ */ jsxs("a", {
								href: "https://maps.google.com/?q=Schmiedebachstrasse+9,+79875+Dachsberg",
								children: [
									/* @__PURE__ */ jsx(MapPin, {}),
									" ",
									/* @__PURE__ */ jsxs("span", { children: [
										"Schmiedebachstrasse 9",
										/* @__PURE__ */ jsx("br", {}),
										"79875 Dachsberg",
										/* @__PURE__ */ jsx("br", {}),
										"Ortsteil: Wittenschwand"
									] })
								]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "mailto:karl-dachsberg@web.de",
								children: [
									/* @__PURE__ */ jsx(Mail, {}),
									" ",
									/* @__PURE__ */ jsx("span", { children: "karl-dachsberg@web.de" })
								]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "tel:07672922176",
								children: [
									/* @__PURE__ */ jsx(Phone, {}),
									" ",
									/* @__PURE__ */ jsx("span", { children: "07672 922176" })
								]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "tel:01748647074",
								children: [
									/* @__PURE__ */ jsx(Smartphone, {}),
									" ",
									/* @__PURE__ */ jsx("span", { children: "0174 8647074" })
								]
							})
						] }),
						/* @__PURE__ */ jsx("div", {
							className: "signature",
							children: "Karl Josef Stoll"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
