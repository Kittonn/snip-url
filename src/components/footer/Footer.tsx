import Container from "../shared/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <Container className="text-center">
      <p>
        Made with ❤️ by{" "}
        <Link href={"https://github.com/kittonn"} target="_blank">
          Kitton
        </Link>
      </p>
    </Container>
  );
}
