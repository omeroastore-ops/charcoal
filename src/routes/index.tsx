import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CharcoalGuide, EmberDivider, PageFrame, RevealChapter, useLanguage } from "@/components/koehler-site";
import fireAsset from "@/assets/meiler-feuer-new.jpg";
import karlAsset from "@/assets/koehler-rauch-new.jpg";
import coalAsset from "@/assets/holzkohle-new.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Die Reise der Kohle | Köhler Stoll" },
      { name: "description", content: "Erleben Sie die traditionelle Köhlerei mit Karl Josef Stoll in Dachsberg im Schwarzwald." },
      { property: "og:title", content: "Die Reise der Kohle | Köhler Stoll" },
      { property: "og:description", content: "Eine glühende Reise durch das historische Handwerk der Köhlerei." },
      { property: "og:image", content: fireAsset },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLanguage();
  return (
    <PageFrame folio="I">
      <CharcoalGuide />
      <section className="hero-prologue">
        <div className="hero-smoke" aria-hidden="true" />
        <p className="kicker">Anno 2016 · Dachsberg im Schwarzwald</p>
        <h1>{t("Vom Holz zum schwarzen Gold", "From timber to black gold")}</h1>
        <p className="hero-lead">{t("Eine Reise in das uralte Handwerk des Köhlers – erzählt von Feuer, Geduld und dem Atem des Waldes.", "A journey into the ancient charcoal maker’s craft – a story of fire, patience and the breath of the forest.")}</p>
        <Button asChild variant="manuscript"><a href="#prolog">{t("Die Glut erwecken", "Awaken the ember")} <ArrowDown /></a></Button>
        <div className="hero-rune" aria-hidden="true">K</div>
      </section>
      <EmberDivider />
      <div id="prolog" className="journey-line">
        <RevealChapter index="I">
          <div className="chapter-copy"><p className="eyebrow">{t("Der Ursprung", "The origin")}</p><h2>{t("Der Wald gibt sein Holz", "The forest yields its timber")}</h2><p>{t("Nur sorgfältig ausgewähltes, trockenes Holz findet seinen Platz im Meiler. Lage um Lage wächst ein hölzerner Berg um den Quandelschacht – das Herz des späteren Feuers.", "Only carefully selected, seasoned timber earns its place in the kiln. Layer by layer, a wooden mound rises around the central shaft – the heart of the fire to come.")}</p></div>
          <figure className="charred-photo"><img src={karlAsset} width={1024} height={768} alt={t("Karl Josef Stoll am rauchenden Meiler", "Karl Josef Stoll beside the smoking kiln")} /><figcaption>Karl Josef Stoll · {t("Köhler aus Leidenschaft", "Charcoal maker by passion")}</figcaption></figure>
        </RevealChapter>
        <RevealChapter index="II">
          <figure className="charred-photo"><img src={fireAsset} width={1024} height={768} loading="lazy" alt={t("Brennender historischer Holzmeiler", "Burning traditional charcoal kiln")} /><figcaption>{t("Wenn der Meiler zu atmen beginnt", "When the kiln begins to breathe")}</figcaption></figure>
          <div className="chapter-copy"><p className="eyebrow">{t("Das Feuer", "The fire")}</p><h2>{t("Die Glut wird gehütet", "The ember is guarded")}</h2><p>{t("Tage und Nächte wacht der Köhler. Nicht Flammen, sondern eine langsame, sauerstoffarme Verkohlung verwandelt das Holz. Farbe und Duft des Rauches verraten, was im Innern geschieht.", "For days and nights the charcoal maker keeps watch. Not flames, but slow carbonisation with little oxygen transforms the wood. The colour and scent of the smoke reveal what happens within.")}</p></div>
        </RevealChapter>
        <RevealChapter index="III">
          <figure className="charred-photo"><img src={coalAsset} width={1024} height={768} loading="lazy" alt={t("Fertige Holzkohlestücke aus dem Meiler", "Finished charcoal pieces from the kiln")} /><figcaption>{t("Das schwarze Gold – bereit aus dem Meiler", "Black gold – ready from the kiln")}</figcaption></figure>
          <div className="final-inscription"><p className="eyebrow">{t("Das Vermächtnis", "The legacy")}</p><h2>{t("Ein Handwerk, das weiterglüht", "A craft that keeps glowing")}</h2><p>{t("Historische Köhlerei ist lebendige Erinnerung. Karl Josef Stoll bewahrt Wissen, das einst ganze Täler mit Wärme, Arbeit und Geschichten versorgte.", "Historic charcoal making is living memory. Karl Josef Stoll preserves knowledge that once supplied entire valleys with warmth, work and stories.")}</p><Button asChild variant="manuscriptOutline"><Link to="/koehlerei">{t("Im Buch weiterlesen", "Continue in the book")} <ArrowRight /></Link></Button></div>
        </RevealChapter>
      </div>
    </PageFrame>
  );
}
