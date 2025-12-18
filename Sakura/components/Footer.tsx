import Link from "next/link";
import { SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div className="grid gap-2">
          <div className="font-semibold">{SITE.name}</div>
          <div className="text-sm text-black/70">{SITE.address}</div>
          <div className="text-sm">
            <a className="underline" href={`tel:${SITE.phone.replaceAll(" ", "")}`}>{SITE.phone}</a>
            <span className="mx-2 text-black/40">•</span>
            <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>

        <div className="grid gap-2 text-sm">
          <div className="font-medium">Quick Links</div>
          <Link className="underline w-fit" href="/privacy-policy">Privacy Policy</Link>
          <Link className="underline w-fit" href="/cookie-policy">Cookie Policy</Link>
          <Link className="underline w-fit" href="/legal">Legal</Link>
          <Link className="underline w-fit" href="/sitemap">Sitemap</Link>
        </div>

        <div className="grid gap-2 text-sm">
          <div className="font-medium">Get in touch</div>
          <Link className="underline w-fit" href="/contact">Contact</Link>
          <Link className="underline w-fit" href="/tour-packages">Tour Packages</Link>
          <Link className="underline w-fit" href="/visa-services">Visa Services</Link>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-black/60">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
