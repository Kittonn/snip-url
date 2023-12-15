import Link from "next/link";
import { Github, Rocket } from "lucide-react";
import Container from "@/components/shared/Container";

export default async function Home() {
  return (
    <main>
      <Container className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-bold sm:text-7xl">Snip Url</h1>
          <p className="text-xl font-semibold">
            A next generation url shortener
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row">
          <div>
            <Link href={"/auth"} className="flex items-center font-semibold">
              <Rocket className="mr-2 h-6 w-6" />
              Get Started
            </Link>
          </div>
          <div>
            <Link
              href={"https://github.com/Kittonn/snip-url"}
              target="_blank"
              className="flex items-center font-semibold"
            >
              <Github className="mr-2 h-6 w-6" />
              Star on Github
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
