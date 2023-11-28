import { api } from "@/trpc/server";
import Link from "next/link";

export default async function Dashboard() {
  const allLinks = await api.link.getAllLinks.query();

  return (
    <main>
      <h1>Dashboard</h1>
      <Link href={"/dashboard/create"}>Create New Link</Link>
      {allLinks.map((link) => (
        <div key={link.id}>
          <a href={link.url}>{link.slug}</a>
          <p>{link.url}</p>
          <p>{link.description}</p>
        </div>
      ))}
    </main>
  );
}
