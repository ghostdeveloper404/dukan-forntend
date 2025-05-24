
import Image from "next/image";

// app/loading.jsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
      <Image
        src="/loading.gif" // ⬅️ this should match the filename in public/
        alt="Loading..."
        width={80}
        height={80}
        className="w-20 h-20"
        priority
      />
    </div>
  );
}


// This is a loading component that will be displayed while the page is loading.