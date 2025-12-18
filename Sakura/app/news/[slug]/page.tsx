import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS } from "@/content/news";

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const item = NEWS.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 grid gap-4">
      <div className="text-sm text-black/60">
        <Link className="underline" href="/news">News</Link> / {item.title}
      </div>

      <h1 className="text-3xl font-semibold">{item.title}</h1>
      <div className="text-xs text-black/60">{new Date(item.date).toDateString()}</div>

      <div className="grid gap-3 text-sm text-black/80">
        {item.content.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </main>
  );
}
