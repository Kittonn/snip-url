import CreateLinkForm from "@/components/dashboard/CreateLinkForm";
import Container from "@/components/Container";

export default async function CreateLink() {
  return (
    <div>
      <Container>
        <div className="max-w-lg mx-auto w-full">
        <h1 className="text-4xl text-center font-bold">Create New Link</h1>
          <CreateLinkForm />
        </div>
      </Container>
    </div>
  );
}
