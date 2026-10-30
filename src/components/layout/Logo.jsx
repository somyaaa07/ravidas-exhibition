import { Lotus } from '../decor/Lotus'
export default function Logo({ light }) {
  return (<a href="#home" className={`flex items-center gap-2 ${light ? 'text-[#F5EBDD]' : 'text-primary'}`}>
    <Lotus className="h-10 w-10 text-secondary" /><span className="font-heading leading-tight text-lg">Sant Ravidas Ji<br /><span className="text-base">Exhibition</span></span></a>)
}
