import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <>
      <h1>Dashboard</h1>
      <p>You are signed in as {session.user?.email}</p>
    </>
  );
}
