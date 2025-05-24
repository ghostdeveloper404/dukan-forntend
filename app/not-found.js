// app/not-found.js
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-white text-black">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-4xl mb-6">Page Not Found</p>
      <Link href="/">
        <button className="px-4 py-2 font-bold bg-red-500 text-white rounded hover:bg-red-600">
          Back to Home Page
        </button>
      </Link>
    </div>
  );
}
