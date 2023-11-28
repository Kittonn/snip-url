import Link from "next/link";
import { BiRocket } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Container from "@/components/Container";

export default async function Home() {
  return (
    <main>
      <Container className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="mb-6 text-6xl sm:text-7xl font-bold">Snip Url</h1>
          <p className="text-xl font-semibold">
            A next generation url shortener
          </p>
        </div>
        <div className="mt-8 flex gap-6 flex-col sm:flex-row">
          <div>
            <Link
              href={"/auth"}
              className="flex items-center gap-2 font-semibold"
            >
              <BiRocket size={20} />
              Get Started
            </Link>
          </div>
          <div>
            <Link
              href={"https://github.com/Kittonn/snip-url"}
              target="_blank"
              className="flex items-center gap-2 font-semibold"
            >
              <FaGithub />
              Star on Github
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
