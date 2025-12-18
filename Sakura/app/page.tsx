import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionCards } from "@/components/SectionCards";
import { TOURS } from "@/content/tours";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 grid gap-10">
      <Hero />
      <SectionCards />

      <section className="grid gap-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Packages</h2>
          <Link className="text-sm underline" href="/tour-packages">View all</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOURS.slice(0, 3).map((t) => (
            <Link key={t.slug} href={`/tour-packages/${t.slug}`} className="rounded-2xl border p-5 hover:shadow-soft transition">
              <div className="text-xs uppercase tracking-wide text-black/60">{t.tag ?? "TOUR"}</div>
              <div className="font-semibold mt-1">{t.name}</div>
              <div className="text-sm text-black/70 mt-1">{t.nights} Nights | {t.days} Days</div>
              <div className="text-sm underline mt-3 w-fit">Read more</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
