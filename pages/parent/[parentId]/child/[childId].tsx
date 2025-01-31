import Link from "next/link";
// import { useRouter } from 'next/router';

export default function Page() {
  return (
    <div>
      <Link href={"/parent/12"}>Parent in AppRouter</Link>
      <Link href={"/parent/12/child/12/grand-child/12"}>
        Child in PageRouter
      </Link>
    </div>
  );
}
