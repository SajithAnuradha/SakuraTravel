import { InquiryButton } from "@/components/forms/InquiryButton";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 grid gap-4">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-sm text-black/70">
        Contact form + branch details (replace with your client’s real info).
      </p>
      
      <div className="pt-4">
        <InquiryButton label="Inquiry" subject="Contact Form" />
      </div>

    </main>
  );
}
