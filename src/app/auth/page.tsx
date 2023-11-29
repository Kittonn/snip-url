import Container from "@/components/Container";
import SignInButton from "@/components/auth/SignInButton";

export default async function Auth() {
  return (
    <main>
      <Container className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Welcome 👋</h1>
        <SignInButton />
      </Container>
    </main>
  );
}
