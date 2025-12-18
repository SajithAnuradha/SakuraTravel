"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/content/site";
import { cn } from "@/components/ui";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {SITE.name}
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className="hover:underline underline-offset-4">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone.replaceAll(" ", "")}`}
            className="hidden sm:inline text-sm px-3 py-2 rounded-xl border"
          >
            Call
          </a>
          <button
            className="md:hidden px-3 py-2 rounded-xl border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div className={cn("md:hidden border-t", open ? "block" : "hidden")}>
        <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className="py-2" onClick={() => setOpen(false)}>
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
