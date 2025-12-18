import Link from "next/link";

export function SectionCards() {
  const items = [
    { href: "/tour-packages", title: "Packages", desc: "Curated packages across destinations." },
    { href: "/visa-services", title: "Visa Services", desc: "Consultancy + processing support." },
    { href: "/deals", title: "Deals", desc: "Promotions and payment plans." },
    { href: "/pay-online", title: "Pay Online", desc: "Integrate your payment gateway." },
  ];

  return (
    <section className="grid md:grid-cols-4 gap-4">
      {items.map((i) => (
        <Link key={i.href} href={i.href} className="rounded-2xl border p-5 hover:shadow-soft transition">
          <div className="font-semibold">{i.title}</div>
          <div className="text-sm text-black/70 mt-1">{i.desc}</div>
        </Link>
      ))}
    </section>
  );
}
