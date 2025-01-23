"use client";
// import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/parent/12/child/12");
        }}
      >
        Child in PageRouter
      </button>
      <button
        onClick={() => {
          router.push("/parent/12/child/12/grand-child/12");
        }}
      >
        Grandchild in PageRouter
      </button>
    </div>
  );
}
