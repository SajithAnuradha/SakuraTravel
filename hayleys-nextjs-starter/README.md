# hayleys-nextjs-starter

Next.js (App Router) + Tailwind starter for a travel agency website:
- Home
- Tour Packages list + filters + detail pages
- Visa Services, Travel Insurance, Flight Tickets, etc.
- Inquiry modal + `/api/inquiry` stub

## Run locally
```bash
npm install
npm run dev
```

## Replace content
- `content/site.ts` (branding + nav)
- `content/tours.ts` (tour packages)
- `content/news.ts` (news)
- `public/placeholder/*` (images)

## Wire inquiries to email
Implement `/app/api/inquiry/route.ts` with your email provider (Resend/Nodemailer) or CRM.
