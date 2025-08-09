import Link from "next/link";
import AuthStatus from "./AuthStatus";

export default function Navbar() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      borderBottom: "1px solid #222"
    }}>
      <strong>Personal Growth OS</strong>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      <AuthStatus />
    </header>
  );
}
