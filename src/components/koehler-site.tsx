import { Link, useRouterState } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

type Language = "de" | "en";
type Copy = Record<string, { de: string; en: string }>;

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (value: Language) => void;
  t: (de: string, en: string) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");
  const value = useMemo(
    () => ({ language, setLanguage, t: (de: string, en: string) => (language === "de" ? de : en) }),
    [language],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

const nav: Copy = {
  journey: { de: "Die Reise", en: "The Journey" },
  craft: { de: "Die Köhlerei", en: "The Craft" },
  shop: { de: "Kohle & Kontakt", en: "Charcoal & Contact" },
};

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="manuscript-header">
      <div className="header-inner">
        <Link to="/" className="brand-mark" aria-label="Karl Josef Stoll – Startseite">
          <span className="brand-sigil"><Flame aria-hidden="true" /></span>
          <span className="brand-copy"><strong>Köhler Stoll</strong><small>Dachsberg · Schwarzwald</small></span>
        </Link>
        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Hauptnavigation">
          <Link to="/" activeOptions={{ exact: true }}>{nav.journey[language]}</Link>
          <Link to="/koehlerei">{nav.craft[language]}</Link>
          <Link to="/kontakt">{nav.shop[language]}</Link>
        </nav>
        <div className="header-actions">
          <div className="language-toggle" aria-label="Sprache wählen">
            <button className={language === "de" ? "active" : ""} onClick={() => setLanguage("de")} aria-pressed={language === "de"}>DE</button>
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span className={language === "en" ? "toggle-ember right" : "toggle-ember"} />
          </div>
          <Button variant="manuscriptIcon" size="icon" className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label={open ? "Menü schließen" : "Menü öffnen"}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </header>
  );
}

export function PageFrame({ children, folio }: { children: ReactNode; folio: string }) {
  return (
    <div className="book-world">
      <SiteHeader />
      <main className="parchment-page">
        <span className="soot soot-one" aria-hidden="true" />
        <span className="soot soot-two" aria-hidden="true" />
        {children}
        <div className="folio" aria-hidden="true">— {folio} —</div>
      </main>
      <footer className="site-footer">Karl Josef Stoll · Historische Darstellung der Köhlerei · Dachsberg</footer>
    </div>
  );
}

export function EmberDivider() {
  return <div className="ember-divider" aria-hidden="true"><span /><Flame /><span /></div>;
}

export function CharcoalGuide() {
  const coalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const coal = coalRef.current;
    if (!coal) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const checkpoints = Array.from(document.querySelectorAll<HTMLElement>(".burn-slot"));
      if (!checkpoints.length) return;

      const viewportY = window.innerHeight * 0.5;
      const anchors = checkpoints.map((checkpoint) => {
        const bounds = checkpoint.getBoundingClientRect();
        return bounds.top + window.scrollY + bounds.height / 2 - viewportY;
      });
      const lastIndex = anchors.length - 1;
      let segment = 0;
      let progress = 0;

      if (window.scrollY < anchors[0]) {
        progress = 0;
      } else if (window.scrollY >= anchors[lastIndex]) {
        segment = Math.max(lastIndex - 1, 0);
        progress = 1;
      } else {
        segment = Math.max(0, anchors.findIndex((anchor) => anchor > window.scrollY) - 1);
        const span = Math.max(anchors[segment + 1] - anchors[segment], 1);
        progress = (window.scrollY - anchors[segment]) / span;
      }

      const nearestIndex = anchors.reduce((best, anchor, index) =>
        Math.abs(anchor - window.scrollY) < Math.abs(anchors[best] - window.scrollY) ? index : best, 0);
      const snapRange = window.innerWidth >= 768 ? 90 : 64;
      const isSnapped = Math.abs(anchors[nearestIndex] - window.scrollY) <= snapRange;
      const guideBounds = document.querySelector<HTMLElement>(".journey-line")?.getBoundingClientRect();
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
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => { window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <div ref={coalRef} className="charcoal-guide" aria-hidden="true"><span className="coal-core" /><i /><b /></div>;
}

export function RevealChapter({ children, index }: { children: ReactNode; index: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) element.classList.add("revealed");
    }, { threshold: 0.28 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <section ref={ref} className="reveal-chapter"><div className="burn-slot" data-checkpoint={index}><span>{index}</span></div>{children}</section>;
}