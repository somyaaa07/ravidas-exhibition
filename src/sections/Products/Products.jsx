// import { useState } from 'react'
// import { Package, Ruler, Weight, Mail } from 'lucide-react'
// import { products, productCategories } from '../../data/products'
// import { productImage } from '../../data/images'
// import { event } from '../../data/event'
// import { ui } from '../../data/ui'
// import { useLang } from '../../i18n/LanguageContext'
// import MediaImage from '../../components/ui/MediaImage'
// import Reveal from '../../components/animation/Reveal'

// const rupees = n => '₹' + n.toLocaleString('en-IN')
// export default function Products() {
//   const { t } = useLang(), pr = ui.products, [cat, setCat] = useState('all')
//   const list = cat === 'all' ? products : products.filter(x => x.category === cat)
//   const chips = [{ id: 'all', label: pr.all }, ...productCategories]
//   return (<section id="products" className="bg-surface py-16"><div className="mx-auto max-w-7xl px-5">
//     <Reveal className="text-center"><p className="text-xs tracking-widest text-secondary">{t(pr.label)}</p>
//       <h2 className="font-heading text-4xl text-primary">{t(pr.title)}</h2>
//       <p className="mx-auto mt-3 max-w-xl text-sm text-muted">{t(pr.sub)}</p></Reveal>
//     <div role="group" aria-label={t(pr.filter)} className="mt-8 flex flex-wrap justify-center gap-2">{chips.map(c => (
//       <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}
//         className={`rounded-full border px-4 py-2 text-sm transition ${cat === c.id ? 'border-primary bg-primary text-surface' : 'border-border bg-white hover:border-secondary'}`}>{t(c.label)}</button>))}</div>
//     <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{list.map(x => (
//       <article key={x.id} className="card flex flex-col overflow-hidden">
//         <div className="relative aspect-square"><MediaImage src={/^https?:\/\//.test(x.image || '') ? x.image : productImage(x.image)} alt={t(x.name)} icon={Package} label={t(pr.photo)} className='aspect-7/5'/>
//          </div>
//         <div className="flex flex-1 flex-col p-5">
//           <h3 className="font-heading text-lg leading-snug text-primary">{t(x.name)}</h3>
//           <p className="mt-2 text-sm leading-relaxed text-muted">{t(x.description)}</p>
//           <dl className="mt-4 space-y-1.5 border-t border-border pt-3 text-sm">
//             <div className="flex items-center justify-between gap-3"><dt className="flex items-center gap-2 text-muted"><Ruler size={14} className="text-secondary" />{t(pr.size)}</dt><dd className="text-right">{t(x.size)}</dd></div>
//             <div className="flex items-center justify-between gap-3"><dt className="flex items-center gap-2 text-muted"><Weight size={14} className="text-secondary" />{t(pr.weight)}</dt><dd className="text-right">{t(x.weight)}</dd></div></dl>
//           <div className="mt-auto gap-3 pt-4">

//             <a href={`mailto:${event.email}?subject=${encodeURIComponent(t(pr.mailSubject) + ': ' + x.name.en)}`} className="btn btn-ghost !px-4 !py-2"><Mail size={14} />{t(pr.enquire)}</a></div>
//         </div></article>))}</div>
//     <p className="mt-6 text-center text-xs text-muted">{t(pr.note)}</p>
//   </div></section>)
// }

import { useState } from "react";
import {
  Package,
  Ruler,
  Weight,
  Mail,
  ChevronLeft,
  ChevronRight,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import { products, productCategories } from "../../data/products";
import { productImage } from "../../data/images";
import { event } from "../../data/event";
import { ui } from "../../data/ui";
import { useLang } from "../../i18n/LanguageContext";
import MediaImage from "../../components/ui/MediaImage";
import Reveal from "../../components/animation/Reveal";

const ITEMS_PER_PAGE = 12;

export default function Products() {
  const { t } = useLang();
  const pr = ui.products;

  const [cat, setCat] = useState("all");
  const [page, setPage] = useState(1);

  // Filter products by category
  const filteredProducts =
    cat === "all"
      ? products
      : products.filter((product) => product.category === cat);

  // Pagination calculations
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
  );

  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Change category and reset pagination
  const handleCategoryChange = (category) => {
    setCat(category);
    setPage(1);
  };

  const chips = [{ id: "all", label: pr.all }, ...productCategories];

  return (
    <section id="products" className="bg-surface py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-5">
        {/* Section Heading */}
        <Reveal className="text-center">
          <p className="text-[10px] tracking-widest text-secondary sm:text-xs">
            {t(pr.label)}
          </p>

          <h2 className="font-heading text-3xl text-primary sm:text-4xl">
            {t(pr.title)}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs text-muted sm:text-sm">
            {t(pr.sub)}
          </p>
        </Reveal>

        {/* Category Filters */}
        <div
          role="group"
          aria-label={t(pr.filter)}
          className="mt-6 flex flex-wrap justify-center gap-1.5 sm:mt-8 sm:gap-2"
        >
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => handleCategoryChange(c.id)}
              className={`rounded-full border px-3 py-1.5 text-xs transition sm:px-4 sm:py-2 sm:text-sm ${
                cat === c.id
                  ? "border-primary bg-primary text-surface"
                  : "border-border bg-white hover:border-secondary"
              }`}
            >
              {t(c.label)}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 sm:mt-7">
          <p className="text-xs text-muted sm:text-sm">
            {t({
              en: `Showing ${currentProducts.length} of ${filteredProducts.length} products`,
              hi: `${filteredProducts.length} में से ${currentProducts.length} उत्पाद दिखाए जा रहे हैं`,
            })}
          </p>

          <span className="flex items-center gap-1 text-[11px] font-medium text-secondary sm:text-xs">
            <BadgeCheck size={14} />
            GI Tagged
          </span>
        </div>

        {/* Product Cards */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {currentProducts.map((x) => (
            <article
              key={x.id}
              className="card flex min-w-0 flex-col overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EBDD]">
                <MediaImage
                  src={
                    x.image
                      ? /^https?:\/\//.test(x.image)
                        ? x.image
                        : productImage(x.image)
                      : undefined
                  }
                  alt={t(x.name)}
                  icon={Package}
                  label={t(pr.photo)}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Information */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <h3 className="font-heading text-sm leading-snug text-primary sm:text-base">
                  {t(x.name)}
                </h3>

                {/* Location */}
                <div className="mt-1.5 flex items-start gap-1 text-[11px] text-secondary sm:text-xs">
                  <MapPin size={12} className="mt-0.5 shrink-0" />
                  <span className="min-w-0 break-words">
                    {t(x.city)}, {t(x.state)}
                  </span>
                </div>

                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted sm:text-[13px]">
                  {t(x.description)}
                </p>

                {/* Size & Weight */}
                <dl className="mt-3 space-y-1.5 border-t border-border pt-2.5 text-xs">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <dt className="flex shrink-0 items-center gap-1.5 text-muted">
                      <Ruler size={12} className="text-secondary" />
                      {t(pr.size)}
                    </dt>

                    <dd className="break-words text-[11px] sm:text-right sm:text-xs">
                      {t(x.size)}
                    </dd>
                  </div>

                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <dt className="flex shrink-0 items-center gap-1.5 text-muted">
                      <Weight size={12} className="text-secondary" />
                      {t(pr.weight)}
                    </dt>

                    <dd className="break-words text-[11px] sm:text-right sm:text-xs">
                      {t(x.weight)}
                    </dd>
                  </div>
                </dl>

                {/* Enquiry Button */}
                <div className="mt-auto pt-3 sm:pt-4">
                  <a
                    href={`mailto:${event.email}?subject=${encodeURIComponent(
                      `${t(pr.mailSubject)}: ${x.name.en}`,
                    )}`}
                    className="btn btn-ghost w-full justify-center text-xs sm:text-sm !px-3 !py-1.5"
                  >
                    <Mail size={13} />
                    {t(pr.enquire)}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:mt-10 sm:gap-2">
            {/* Previous */}
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              aria-label={t({ en: "Previous", hi: "पिछला" })}
              className="flex h-9 items-center gap-1 rounded-md border border-border px-2.5 text-sm transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:px-3"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">
                {t({ en: "Previous", hi: "पिछला" })}
              </span>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  aria-current={page === pageNumber ? "page" : undefined}
                  onClick={() => setPage(pageNumber)}
                  className={`h-9 min-w-9 rounded-md border px-2.5 text-sm transition sm:h-10 sm:min-w-10 sm:px-3 ${
                    page === pageNumber
                      ? "border-primary bg-primary text-white"
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {pageNumber}
                </button>
              ),
            )}

            {/* Next */}
            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              aria-label={t({ en: "Next", hi: "अगला" })}
              className="flex h-9 items-center gap-1 rounded-md border border-border px-2.5 text-sm transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:px-3"
            >
              <span className="hidden sm:inline">
                {t({ en: "Next", hi: "अगला" })}
              </span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Page Information */}
        <p className="mt-3 text-center text-[11px] text-muted sm:mt-4 sm:text-xs">
          {t({
            en: `Page ${page} of ${totalPages}`,
            hi: `पृष्ठ ${page} / ${totalPages}`,
          })}
        </p>
      </div>
    </section>
  );
}