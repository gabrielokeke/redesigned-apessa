"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 6000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white gap-6">
     <img src="/loading.png" alt="loading" /> <br />
     <div className="w-24 h-24 border-8 border-red-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
