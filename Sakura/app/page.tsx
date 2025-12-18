import Image from "next/image";
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
            <Link
              key={t.slug}
              href={`/tour-packages/${t.slug}`}
              className="rounded-2xl border overflow-hidden hover:shadow-soft transition"
            >
              <div className="relative h-40 bg-black/5">
                <Image src={t.heroImage.src} alt={t.heroImage.alt} fill className="object-cover" />
              </div>
              <div className="p-5 grid gap-2">
                <div className="text-xs uppercase tracking-wide text-black/60">{t.tag ?? "TOUR"}</div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-black/70">{t.nights} Nights | {t.days} Days</div>
                <div className="text-sm underline w-fit">Read more</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
