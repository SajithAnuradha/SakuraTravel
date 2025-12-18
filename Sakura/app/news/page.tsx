import Link from "next/link";
import { NEWS } from "@/content/news";

export default function NewsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold">News</h1>
        <p className="text-sm text-black/70 mt-2">Updates, advisories, and announcements.</p>
      </div>

      <div className="grid gap-3">
        {NEWS.map((n) => (
          <Link key={n.slug} href={`/news/${n.slug}`} className="rounded-2xl border p-5 hover:shadow-soft transition">
            <div className="text-xs text-black/60">{new Date(n.date).toDateString()}</div>
            <div className="font-semibold mt-1">{n.title}</div>
            <div className="text-sm text-black/70 mt-2">{n.excerpt}</div>
            <div className="text-sm underline mt-3 w-fit">Read more</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
