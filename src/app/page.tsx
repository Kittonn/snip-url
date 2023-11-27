import Link from "next/link";
import { BiRocket } from "react-icons/bi";

export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Snip Url</h1>
        <p className="text-xl font-semibold">A next generation url shortener</p>
      </div>
      <div>
        <Link href={"/auth"} className="text-sm font-semibold flex items-center gap-2">
          <BiRocket />
          Get Started
        </Link>
      </div>
    </main>
  );
}
