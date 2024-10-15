"use client";

import { useRouter } from "next/navigation";
import { FiRefreshCw } from "react-icons/fi";

export function ButtonRefresh() {
  const router = useRouter();
  return (
    <button
      className="bg-green-600 px-4 py-1 rounded"
      onClick={() => router.refresh()}
    >
      <FiRefreshCw size={24} color="#fff" />
    </button>
  );
}
