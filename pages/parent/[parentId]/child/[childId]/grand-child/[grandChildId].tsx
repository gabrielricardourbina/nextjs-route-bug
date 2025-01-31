import Link from "next/link";
// import { useRouter } from "next/router";

export default function Page() {
  return (
    <div>
      <Link href={"/parent/12/child/12"}>Parent in PageRouter</Link>
      <Link href={"/parent/12"}>Grandparent in AppRouter</Link>
    </div>
  );
}
