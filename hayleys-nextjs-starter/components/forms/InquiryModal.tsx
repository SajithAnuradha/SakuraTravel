"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  subject?: string;
};

export function InquiryModal({ open, onClose, subject = "General Inquiry" }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [agree, setAgree] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agree) return;

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    setPending(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ subject, ...payload }),
      });
      if (!res.ok) throw new Error("Request failed");
      alert("Sent! (Wire this to email/CRM later)");
      onClose();
    } catch {
      alert("Could not send. Check server logs.");
    } finally {
      setPending(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="w-[min(560px,92vw)] rounded-2xl p-0 backdrop:bg-black/40"
      onClose={onClose}
    >
      <div className="p-5 border-b flex items-center justify-between">
        <div className="font-semibold">Inquire Now</div>
        <button className="px-3 py-1 rounded-lg border" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>

      <form className="p-5 grid gap-3" onSubmit={onSubmit}>
        <input type="hidden" name="subject" value={subject} />

        <label className="grid gap-1">
          <span className="text-sm">Phone number *</span>
          <input required name="phone" className="border rounded-xl px-3 py-2" />
        </label>

        <label className="grid gap-1">
          <span className="text-sm">Name *</span>
          <input required name="name" className="border rounded-xl px-3 py-2" />
        </label>

        <label className="grid gap-1">
          <span className="text-sm">Email *</span>
          <input required type="email" name="email" className="border rounded-xl px-3 py-2" />
        </label>

        <label className="grid gap-1">
          <span className="text-sm">Message *</span>
          <textarea required rows={4} name="message" className="border rounded-xl px-3 py-2" />
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <span>
            I agree to the <a className="underline" href="/privacy-policy">privacy policy</a>
          </span>
        </label>

        <button
          type="submit"
          disabled={!agree || pending}
          className="mt-2 rounded-xl bg-black text-white px-4 py-2 disabled:opacity-50"
        >
          {pending ? "Sending..." : "Submit"}
        </button>
      </form>
    </dialog>
  );
}
