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
import { motion } from "framer-motion";
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

const ITEMS_PER_PAGE = 8;
const EASE = [0.22, 1, 0.36, 1];

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

        {/* Category Filters: single scroll row on all devices (scrollbar visible from sm up) */}
        <div
          role="group"
          aria-label={t(pr.filter)}
          className="-mx-3 mt-6 flex gap-1.5 overflow-x-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-8 sm:gap-2 sm:px-0 sm:pb-3 sm:[scrollbar-color:#C9B8A6_transparent] sm:[scrollbar-width:thin]"
        >
          {chips.map((c, i) => (
            <motion.button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => handleCategoryChange(c.id)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: i * 0.05, ease: EASE },
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs transition-colors first:ml-auto last:mr-auto sm:px-4 sm:py-2 sm:text-sm ${
                cat === c.id
                  ? "border-primary bg-primary text-surface"
                  : "border-border bg-white hover:border-secondary"
              }`}
            >
              {t(c.label)}
            </motion.button>
          ))}
        </div>

        {/* Product Count */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-4 flex flex-wrap items-center justify-between gap-2 sm:mt-7"
        >
          <p className="text-xs text-muted sm:text-sm">
            {t({
              en: `Showing ${currentProducts.length} of ${filteredProducts.length} products`,
              hi: `${filteredProducts.length} में से ${currentProducts.length} उत्पाद दिखाए जा रहे हैं`,
            })}
          </p>

          
        </motion.div>

        {/* Product Cards */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {currentProducts.map((x, index) => (
            <motion.article
              key={x.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  delay: (index % 4) * 0.08,
                  ease: EASE,
                },
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              viewport={{ once: true, amount: 0.15 }}
              className="card group flex min-w-0 flex-col overflow-hidden"
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
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:mt-10 sm:gap-2"
          >
            {/* Previous */}
            <motion.button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              whileTap={page === 1 ? undefined : { scale: 0.93 }}
              aria-label={t({ en: "Previous", hi: "पिछला" })}
              className="flex h-9 items-center gap-1 rounded-md border border-border px-2.5 text-sm transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:px-3"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">
                {t({ en: "Previous", hi: "पिछला" })}
              </span>
            </motion.button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <motion.button
                  key={pageNumber}
                  type="button"
                  aria-current={page === pageNumber ? "page" : undefined}
                  onClick={() => setPage(pageNumber)}
                  whileTap={{ scale: 0.93 }}
                  className={`h-9 min-w-9 rounded-md border px-2.5 text-sm transition-colors sm:h-10 sm:min-w-10 sm:px-3 ${
                    page === pageNumber
                      ? "border-primary bg-primary text-white"
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {pageNumber}
                </motion.button>
              ),
            )}

            {/* Next */}
            <motion.button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              whileTap={page === totalPages ? undefined : { scale: 0.93 }}
              aria-label={t({ en: "Next", hi: "अगला" })}
              className="flex h-9 items-center gap-1 rounded-md border border-border px-2.5 text-sm transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:px-3"
            >
              <span className="hidden sm:inline">
                {t({ en: "Next", hi: "अगला" })}
              </span>
              <ChevronRight size={16} />
            </motion.button>
          </motion.div>
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
