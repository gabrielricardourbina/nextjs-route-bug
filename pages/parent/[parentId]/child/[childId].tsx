// import Link from "next/link";
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push('/parent/12');
        }}
      >
        Parent in AppRouter
      </button>
      <button
        onClick={() => {
          router.push('/parent/12/child/12/grand-child/12');
        }}
      >
        Child in PageRouter
      </button>
    </div>
  );
}
