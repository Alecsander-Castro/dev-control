import { Container } from "@/components/Container/Container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Customer() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <Container>
      <main>
        <h1>Meus Clientes</h1>
      </main>
    </Container>
  );
}
