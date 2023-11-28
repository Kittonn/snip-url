import { getServerAuthSession } from "@/server/auth";

export default async function Header() {
  const session = await getServerAuthSession();

  return (
    <div>
      <h1>Header</h1>
      {session && (
        <p>
          Signed in as {session.user.name} ({session.user.email})
        </p>
      )}
    </div>
  );
}
