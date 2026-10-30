import { Lotus } from '../decor/Lotus'
import { useLang } from '../../i18n/LanguageContext'
import { ui } from '../../data/ui'
export default function Logo({ light }) {
  const { t } = useLang()
  return (<a href="#home" className={`flex items-center gap-2 ${light ? 'text-[#F5EBDD]' : 'text-primary'}`}>
    <Lotus className="h-10 w-10 text-secondary" /><span className="font-heading leading-tight text-lg">{t(ui.common.brand1)}<br /><span className="text-base">{t(ui.common.brand2)}</span></span></a>)
}
