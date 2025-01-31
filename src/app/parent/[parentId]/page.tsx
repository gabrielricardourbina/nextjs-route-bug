"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Page() {
  return (
    <div>
      <Link href={"/parent/12/child/12"}>Child in PageRouter</Link>
      <Link href={"/parent/12/child/12/grand-child/12"}>
        Grandchild in PageRouter
      </Link>
    </div>
  );
}
