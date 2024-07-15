import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="text-xl font-semibold">
      <Header />
      <h2 className="text-2xl">
        Halo. Ini Template Project Next.js versi Canary.
      </h2>
      <h2 className="text-2xl">
        Ada tambahan setup daisyUI, Prisma ORM, dan AWS S3 untuk Cloudflare R2
        🔥
      </h2>
    </main>
  );
}
