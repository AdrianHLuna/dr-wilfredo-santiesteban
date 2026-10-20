import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        No encontramos la página que buscas. Puede que el enlace esté roto o la página se haya movido.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="rounded-2xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm">
          Ir al inicio
        </Link>
        <Link href="/servicios" className="rounded-2xl border border-border px-7 py-3.5 text-base font-semibold">
          Ver servicios
        </Link>
      </div>
    </main>
  );
}
