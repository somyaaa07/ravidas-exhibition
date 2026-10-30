import Reveal from '../../components/animation/Reveal'
import useRegistrationForm from '../../hooks/useRegistrationForm'
import { useLang } from '../../i18n/LanguageContext'
import { ui } from '../../data/ui'
import RegistrationSidebar from './RegistrationSidebar'
import RegistrationForm from './RegistrationForm'
import SuccessPanel from './SuccessPanel'

export default function Registration() {
  const form = useRegistrationForm(), { t } = useLang(), r = ui.reg
  return (<section id="register" className="bg-surface py-16"><div className="mx-auto max-w-7xl px-5 ">
    <Reveal className="mb-8 text-center"><p className="text-xs tracking-widest text-secondary">{t(r.label)}</p>
      <h2 className="font-heading text-4xl text-primary">{t(r.title)}</h2>
      <p className="mx-auto mt-2 max-w-lg text-sm text-muted">{t(r.sub)}</p></Reveal>
    <Reveal className="grid overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-[.8fr_1.2fr]">
      <RegistrationSidebar />
      <div className="bg-background p-6 sm:p-10">{form.status.state === 'success' ? <SuccessPanel onReset={form.reset} /> : <RegistrationForm form={form} />}</div>
    </Reveal></div></section>)
}
