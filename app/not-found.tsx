import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "24px"
      }}
    >
      <span style={{ color: "var(--accent)" }}>
        ERROR / 404
      </span>
      <h1 style={{ fontSize: "clamp(70px, 12vw, 160px)", margin: "20px 0" }}>
        Lost?
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: "30px" }}>
        This page doesn&apos;t exist.
      </p>
      <Link href="/" className="button button-primary">
        <ArrowLeft size={18} />
        Back to home
      </Link>
    </main>
  );
}
