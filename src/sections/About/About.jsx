import { ArrowRight, Scale, Flower2, Landmark } from "lucide-react";
import { images } from "../../data/images";
import { pillars } from "../../data/content";
import { ui } from "../../data/ui";
import { useLang } from "../../i18n/LanguageContext";
import Reveal from "../../components/animation/Reveal";

const icons = [Scale, Flower2, Landmark];
export default function About() {
  const { t } = useLang(),
    a = ui.about;
  return (
    <section id="about" className="parchment py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_.9fr_.8fr]">
        <Reveal>
          <p className="text-xs tracking-widest text-secondary">{t(a.label)}</p>
          <h2 className="font-heading text-5xl text-primary">{t(a.title)}</h2>
          <h3 className="mt-2 font-heading text-xl text-dark">{t(a.sub)}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">{t(a.body)}</p>
          <a href="#exhibition" className="btn btn-primary mt-6">
            {t(a.more)} <ArrowRight size={16} />
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <img
            loading="lazy"
            src={images.about}
            alt={t(a.alt)}
            className="mx-auto w-full max-w-sm rounded-md shadow-xl
               md:max-w-none
               lg:max-w-sm"
          />
        </Reveal>{" "}
        <Reveal delay={0.2} className="space-y-6">
          {pillars.map(([title, text], i) => {
            const I = icons[i];
            return (
              <div key={title.en} className="flex gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-secondary text-secondary">
                  <I size={22} />
                </span>
                <div>
                  <h4 className="font-heading text-lg text-primary">
                    {t(title)}
                  </h4>
                  <p className="text-xs text-muted">{t(text)}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
