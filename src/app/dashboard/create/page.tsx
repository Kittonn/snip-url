import CreateLinkForm from "@/components/link/CreateLinkForm";
import Container from "@/components/Container";

export default async function CreateLink() {
  return (
    <div>
      <Container>
        <h1>Create New Link</h1>
        <CreateLinkForm />
      </Container>
    </div>
  );
}
