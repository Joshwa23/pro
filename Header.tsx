
'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">JS</span>
          <span className="text-lg font-semibold">JobSea</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/find-jobs" className="hover:text-blue-600">Find Jobs</Link>
          <Link href="/find-talents" className="hover:text-blue-600">Find Talents</Link>
          <Link href="/about-us" className="hover:text-blue-600">About us</Link>
          <Link href="/testimonials" className="hover:text-blue-600">Testimonials</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/create-job" className="btn btn-primary rounded-full">Create Jobs</Link>
          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="mobile menu">
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/find-jobs" onClick={() => setOpen(false)}>Find Jobs</Link>
            <Link href="/find-talents" onClick={() => setOpen(false)}>Find Talents</Link>
            <Link href="/about-us" onClick={() => setOpen(false)}>About us</Link>
            <Link href="/testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
          </div>
        </div>
      )}
    </header>
  );
}
