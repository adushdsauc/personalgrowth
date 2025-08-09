import { auth, signIn, signOut } from "@/auth";

export default async function AuthStatus() {
  const session = await auth();

  if (!session?.user) {
    return (
      <form action={async () => { "use server"; await signIn("google"); }}>
        <button>Sign in with Google</button>
      </form>
    );
  }

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <img
        src={session.user.image ?? "https://avatar.vercel.sh/user"}
        alt=""
        width={28}
        height={28}
        style={{ borderRadius: "9999px" }}
      />
      <span>{session.user.name ?? session.user.email}</span>
      <form action={async () => { "use server"; await signOut(); }}>
        <button>Sign out</button>
      </form>
    </div>
  );
}
