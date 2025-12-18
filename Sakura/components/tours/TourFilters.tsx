"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PRICE = [
  { label: "Below 100k", value: "below-100k" },
  { label: "100k – 200k", value: "100k-200k" },
  { label: "200k – 300k", value: "200k-300k" },
  { label: "Above 300k", value: "above-300k" },
] as const;

const DAYS = ["10-11", "3-4", "4-5", "5-6", "6-7", "7-8", "9-10"] as const;

const TYPE = [
  { label: "Adventure", value: "adventure" },
  { label: "Family & Holiday", value: "family-holiday" },
] as const;

export function TourFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const setParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(sp.toString());
    if (!value) next.delete(key);
    else next.set(key, value);
    router.push(`${pathname}?${next.toString()}`);
  };

  const selected = {
    price: sp.get("price"),
    days: sp.get("days"),
    type: sp.get("type"),
  };

  return (
    <div className="rounded-2xl border p-4 grid gap-5">
      <div className="font-semibold">Filtered By</div>

      <section className="grid gap-2">
        <div className="text-sm font-medium">Price Range</div>
        <div className="grid gap-2">
          {PRICE.map((p) => (
            <label key={p.value} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="price"
                checked={selected.price === p.value}
                onChange={() => setParam("price", p.value)}
              />
              {p.label}
            </label>
          ))}
          <button className="text-sm underline w-fit" onClick={() => setParam("price", null)}>
            Clear
          </button>
        </div>
      </section>

      <section className="grid gap-2">
        <div className="text-sm font-medium">Days Range</div>
        <div className="flex flex-wrap gap-2">
          {DAYS.map((d) => (
            <button
              key={d}
              className={`px-3 py-1 rounded-full border text-sm ${selected.days === d ? "bg-black text-white" : ""}`}
              onClick={() => setParam("days", selected.days === d ? null : d)}
            >
              {d}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-2">
        <div className="text-sm font-medium">Package Type</div>
        <div className="grid gap-2">
          {TYPE.map((t) => (
            <label key={t.value} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="type"
                checked={selected.type === t.value}
                onChange={() => setParam("type", t.value)}
              />
              {t.label}
            </label>
          ))}
          <button className="text-sm underline w-fit" onClick={() => setParam("type", null)}>
            Clear
          </button>
        </div>
      </section>
    </div>
  );
}
