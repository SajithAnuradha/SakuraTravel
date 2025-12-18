import Link from "next/link";
import Image from "next/image";
import { TOURS } from "@/content/tours";
import { TourFilters } from "@/components/tours/TourFilters";
import { InquiryButton } from "@/components/forms/InquiryButton";

export default async function TourPackagesPage({
  searchParams,
}: {
  searchParams?: Promise<{ price?: string; days?: string; type?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const price = resolvedSearchParams?.price;
  const days = resolvedSearchParams?.days;
  const type = resolvedSearchParams?.type;

  const filtered = TOURS.filter((t) => {
    if (price && t.priceRange !== price) return false;
    if (days && t.daysRange !== days) return false;
    if (type && t.packageType !== type) return false;
    return true;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div className="grid gap-2">
          <h1 className="text-3xl font-semibold">Tours</h1>
          <p className="text-sm text-black/70 max-w-2xl">
            Explore tour packages. Filter by price, duration, and type, then inquire instantly.
          </p>
        </div>
        <InquiryButton label="Inquiry" subject="Tour Packages Inquiry" />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
        <aside className="md:sticky md:top-6 h-fit">
          <TourFilters />
        </aside>

        <section className="grid gap-4">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border p-6 text-sm">No results found.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tour-packages/${t.slug}`}
                  className="rounded-2xl border overflow-hidden hover:shadow-soft transition"
                >
                  <div className="relative h-40 bg-black/5">
                    <Image src={t.heroImage.src} alt={t.heroImage.alt} fill className="object-cover" />
                  </div>
                  <div className="p-4 grid gap-2">
                    <div className="text-xs uppercase tracking-wide text-black/60">{t.tag ?? "TOUR"}</div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-black/70">{t.nights} Nights | {t.days} Days</div>
                    <div className="text-sm underline w-fit">Read more</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
