import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOURS } from "@/content/tours";
import { InquiryButton } from "@/components/forms/InquiryButton";

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-sm text-black/60">
        <Link className="underline" href="/tour-packages">Tours</Link> / {tour.name}
      </div>

      <div className="mt-3 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-wide text-black/60">{tour.tag ?? "TOUR"}</div>
          <h1 className="text-3xl font-semibold mt-1">{tour.name}</h1>
          <div className="text-sm text-black/70 mt-2">{tour.nights} Nights | {tour.days} Days</div>
          {tour.phone && <div className="text-sm mt-2">☎ {tour.phone}</div>}
        </div>

        <InquiryButton label="Inquiry" subject={`Tour Inquiry: ${tour.name}`} />
      </div>

      <div className="mt-6 rounded-3xl overflow-hidden border bg-black/5">
        <div className="relative h-64">
          <Image src={tour.heroImage.src} alt={tour.heroImage.alt} fill className="object-cover" />
        </div>
      </div>

      <section className="mt-8 grid gap-6">
        <div>
          <h2 className="text-xl font-semibold">Tour Highlights</h2>
          <p className="text-sm text-black/70 mt-2">{tour.highlights.join(" | ")}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Package Includes</h2>
          <ul className="list-disc pl-5 text-sm text-black/80 mt-2 grid gap-1">
            {tour.includes.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Itinerary</h2>
          <div className="mt-3 grid gap-3">
            {tour.itinerary.map((d) => (
              <div key={d.day} className="rounded-2xl border p-4">
                <div className="font-medium">Day {d.day}</div>
                <ul className="list-disc pl-5 text-sm text-black/80 mt-2 grid gap-1">
                  {d.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
