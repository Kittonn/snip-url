import Container from "../shared/Container";
import { Button } from "../ui/button";
import Link from "next/link";
import Profile from "./Profile";
import { getServerAuthSession } from "@/server/auth";

export default async function Navbar() {
  const session = await getServerAuthSession();
  return (
    <Container>
      <nav className="flex items-center justify-between">
        <div className="text-xl font-semibold">
          <Link href={"/"}>SnipUrl.</Link>
        </div>
        <div>
          {session ? (
            <Profile
              name={session?.user.name as string}
              image={session.user.image as string}
            />
          ) : (
            <Link href={"/auth"}>
              <Button>Get Started</Button>
            </Link>
          )}
        </div>
      </nav>
    </Container>
  );
}
