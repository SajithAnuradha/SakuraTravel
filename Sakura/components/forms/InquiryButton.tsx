"use client";

import { useState } from "react";
import { InquiryModal } from "@/components/forms/InquiryModal";

export function InquiryButton({ label = "Inquiry", subject }: { label?: string; subject?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="rounded-xl bg-black text-white px-4 py-2" onClick={() => setOpen(true)}>
        {label}
      </button>
      <InquiryModal open={open} onClose={() => setOpen(false)} subject={subject} />
    </>
  );
}
