
import logo from '../../assets/logo.png'
import { useLang } from '../../i18n/LanguageContext'

export default function Logo({ light }) {
  const { t } = useLang()

  return (
    <a
      href="#home"
      className={`flex items-center gap-2 ${
        light ? 'text-[#F5EBDD]' : 'text-primary'
      }`}
    >
      <img
        src={logo}
        alt="Ravidas Exhibition Logo"
        className="h-30 w-auto  max-w-none object-contain"
      />
    </a>
  )
}
