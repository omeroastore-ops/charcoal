import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, EmberDivider, useLanguage } from "@/components/koehler-site";
import karlAsset from "@/assets/karl-stoll-new.jpg";
import coalAsset from "@/assets/holzkohle-new.jpg";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [
    { title: "Holzkohle kaufen & Kontakt | Karl Josef Stoll" },
    { name: "description", content: "Traditionelle Holzkohle kaufen und Karl Josef Stoll in Dachsberg kontaktieren." },
    { property: "og:title", content: "Holzkohle kaufen & Kontakt | Köhler Stoll" },
    { property: "og:description", content: "Kontakt, Abholung und Anfragen zur historischen Darstellung der Köhlerei." },
    { property: "og:image", content: coalAsset },
  ] }), component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  return <PageFrame folio="III">
    <header className="page-title"><p className="kicker">{t("Das Schlusskapitel", "The final chapter")}</p><h1>{t("Kohle, Wort & Handschlag", "Charcoal, word & handshake")}</h1><p>{t("Bestellung, Vorführung und persönliche Nachricht", "Orders, demonstrations and personal messages")}</p></header>
    <EmberDivider />
    <section className="ledger-layout">
      <div className="order-ledger">
        <p className="eyebrow">{t("Aus dem Meiler", "From the kiln")}</p><h2>{t("Echte Holzkohle anfragen", "Enquire about real charcoal")}</h2>
        <img src={coalAsset} width={1024} height={768} alt={t("Handgemachte Holzkohle", "Handmade charcoal")} />
        <p>{t("Für Verfügbarkeit, Menge und Abholung nehmen Sie bitte direkt Kontakt auf. Jede Charge folgt dem Rhythmus des Meilers – kein Massenprodukt, sondern echtes Handwerk.", "For availability, quantity and collection, please get in touch directly. Every batch follows the rhythm of the kiln – not a mass product, but genuine craft.")}</p>
        <Button asChild variant="manuscript"><a href="mailto:karl-dachsberg@web.de?subject=Anfrage%20Holzkohle">{t("Anfrage schreiben", "Send an enquiry")} <Mail /></a></Button>
      </div>
      <aside className="contact-manuscript">
        <div className="wax-seal" aria-hidden="true">KS</div>
        <img className="portrait" src={karlAsset} width={768} height={768} loading="lazy" alt="Karl Josef Stoll" />
        <p className="eyebrow">{t("Der Köhler", "The charcoal maker")}</p><h2>Karl Josef Stoll</h2><p className="concept">Historische Darstellung der Köhlerei</p>
        <address>
          <a href="https://maps.google.com/?q=Schmiedebachstrasse+9,+79875+Dachsberg"><MapPin /> <span>Schmiedebachstrasse 9<br />79875 Dachsberg<br />Ortsteil: Wittenschwand</span></a>
          <a href="mailto:karl-dachsberg@web.de"><Mail /> <span>karl-dachsberg@web.de</span></a>
          <a href="tel:07672922176"><Phone /> <span>07672 922176</span></a>
          <a href="tel:01748647074"><Smartphone /> <span>0174 8647074</span></a>
        </address>
        <div className="signature">Karl Josef Stoll</div>
      </aside>
    </section>
  </PageFrame>;
}