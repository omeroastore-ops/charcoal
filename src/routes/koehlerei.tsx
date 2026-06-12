import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, EmberDivider, useLanguage } from "@/components/koehler-site";

export const Route = createFileRoute("/koehlerei")({
  head: () => ({ meta: [
    { title: "Die Köhlerei – Handwerk & Prozess | Köhler Stoll" },
    { name: "description", content: "Vom Aufschichten des Meilers bis zur fertigen Holzkohle: das historische Handwerk Schritt für Schritt." },
    { property: "og:title", content: "Die Köhlerei – Handwerk & Prozess" },
    { property: "og:description", content: "Entdecken Sie den traditionellen Aufbau und Brand eines Holzkohlemeilers." },
    { property: "og:image", content: "/charcoal/images/chapter_1_image.jpg" },
  ] }), component: CraftPage,
});

const steps = [
  { 
    n: "01", 
    de: "Der Quandelschacht", 
    en: "The central shaft", 
    deText: "Im Mittelpunkt entsteht der senkrechte Feuerschacht. Um ihn wird das Holz dicht, aufrecht und mit sicherer Hand geschichtet.", 
    enText: "At the centre, the vertical fire shaft is built. Around it, the timber is stacked tightly and upright by an experienced hand.", 
    image: "/charcoal/images/chapter_1_image.jpg" // Image for Caput 01
  },
  { 
    n: "02", 
    de: "Die schützende Decke", 
    en: "The protective cover", 
    deText: "Reisig, Gras und Erde dichten den Meiler ab. Kleine Zuglöcher lenken Luft und Hitze – der Meiler wird zum lebendigen Ofen.", 
    enText: "Brushwood, grass and earth seal the kiln. Small vents guide air and heat – the mound becomes a living oven.", 
    image: "/charcoal/images/chapter_2_image.jpg" // Image for Caput 02
  },
  { 
    n: "03", 
    de: "Der stille Brand", 
    en: "The silent burn", 
    deText: "Durch den Quandelschacht wird entzündet. Der Köhler liest den Rauch, versetzt Luftlöcher und hält den Brand Tag und Nacht im Gleichgewicht.", 
    enText: "The kiln is lit through its central shaft. The maker reads the smoke, moves the vents and keeps the burn balanced day and night.", 
    image: "/charcoal/images/chapter_3_image.jpg" // Image for Caput 03
  },
  { 
    n: "04", 
    de: "Das schwarze Gold", 
    en: "The black gold", 
    deText: "Nach dem Abkühlen wird der Meiler geöffnet. Leichte, klingende Holzkohle kommt ans Licht – geschaffen mit Zeit statt Eile.", 
    enText: "Once cooled, the kiln is opened. Light, ringing charcoal emerges – made with time rather than haste.", 
    image: "/charcoal/images/chapter_4_image.jpg" // Image for Caput 04
  },
];

function CraftPage() {
  const { language, t } = useLanguage();
  return <PageFrame folio="II">
    <header className="page-title"><p className="kicker">{t("Das zweite Buch", "The second book")}</p><h1>{t("Die Kunst der Köhlerei", "The art of charcoal making")}</h1><p>{t("Vier Kapitel zwischen Holz und Glut", "Four chapters between timber and ember")}</p></header>
    <EmberDivider />
    <div className="book-spread">
      {steps.map((step, i) => <article className="process-entry" key={step.n}>
        <div className="process-text"><span className="chapter-number">Caput {step.n}</span><h2>{step[language === "de" ? "de" : "en"]}</h2><p>{step[language === "de" ? "deText" : "enText"]}</p><div className="ink-flourish" aria-hidden="true">❧</div></div>
        <figure className="charred-photo"><img src={step.image} className="w-full aspect-square object-cover" loading={i > 0 ? "lazy" : "eager"} alt={step[language === "de" ? "de" : "en"]} /><figcaption>{t("Aus dem Bildarchiv von Karl Josef Stoll", "From Karl Josef Stoll’s photographic archive")}</figcaption></figure>
      </article>)}
    </div>
    <div className="craft-cta">
      <span aria-hidden="true">❧</span>
      <Button asChild variant="manuscript"><Link to="/kontakt">Kohle, Wort &amp; Handschlag <ArrowRight /></Link></Button>
      <span aria-hidden="true">❧</span>
    </div>
  </PageFrame>;
}