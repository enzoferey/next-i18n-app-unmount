import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Link href="/about">Go to about</Link>
      <Link href="/signup">Go to signup</Link>
    </div>
  );
}
