import { InquiryButton } from "@/components/forms/InquiryButton";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 grid gap-4">
      <h1 className="text-3xl font-semibold">Flight Tickets</h1>
      <p className="text-sm text-black/70">
        Describe ticketing services, real-time availability, and support.
      </p>
      
      <div className="pt-4">
        <InquiryButton label="Inquiry" subject="Flight Tickets Booking" />
      </div>

    </main>
  );
}
