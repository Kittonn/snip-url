import { api } from "@/trpc/server";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import LinkCard from "@/components/dashboard/LinkCard";
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const allLinks = await api.link.getLinks.query();

  return (
    <main>
      <Container>
        <div className="flex items-center justify-between border-b-[2px] border-b-slate-200 pb-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Link href={"/dashboard/create"} className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            Create New Link
          </Link>
        </div>

        <div className="my-6">
        {allLinks.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allLinks.map((link, index) => (
              <LinkCard {...link} key={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="mb-3 text-xl font-semibold">
              Let us create your first link!
            </p>
            <Button variant={"outline"}>
              <Link href={"/dashboard/create"}>Create New Link</Link>
            </Button>
          </div>
        )}
        </div>
      </Container>
    </main>
  );
}
