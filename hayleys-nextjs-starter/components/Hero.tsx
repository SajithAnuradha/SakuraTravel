import Link from "next/link";
import { SITE } from "@/content/site";

export function Hero() {
  return (
    <section className="rounded-3xl border bg-gradient-to-b from-black/[0.03] to-transparent p-8 md:p-12 shadow-soft">
      <div className="max-w-2xl grid gap-4">
        <div className="text-xs uppercase tracking-wider text-black/60">{SITE.tagline}</div>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Book your next vacation with a premium travel partner.
        </h1>
        <p className="text-sm md:text-base text-black/70">
          This is a full-site starter: packages, visa services, travel insurance, deals, and inquiries—
          ready for your client’s branding and content.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="rounded-xl bg-black text-white px-4 py-2" href="/tour-packages">
            View Tour Packages
          </Link>
          <Link className="rounded-xl border px-4 py-2" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
