export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(120,119,198,0.12)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(50%_50%_at_50%_0%,rgba(120,119,198,0.15)_0%,rgba(10,10,10,0)_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[.04] px-3 py-1 text-xs font-medium text-foreground/70">
            Frontend Developer
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Привіт! Я — фронтенд‑розробник
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              з понад 1 роком досвіду
            </span>
            .
          </h1>

          <p className="mt-6 text-base/7 text-foreground/80 sm:text-lg/8">
            Працюю з React, Next.js, TypeScript та Tailwind CSS. Створюю швидкі,
            адаптивні та доступні інтерфейси з акцентом на чистий код і сучасний
            дизайн.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background shadow-sm transition-colors hover:opacity-90"
            >
              Переглянути проєкти
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/20 bg-transparent px-6 text-sm font-medium text-foreground/90 transition-colors hover:bg-foreground/[.04]"
            >
              Зв’затися
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-sm text-foreground/70">
            <span className="rounded-full border border-foreground/15 bg-foreground/[.04] px-3 py-1">React</span>
            <span className="rounded-full border border-foreground/15 bg-foreground/[.04] px-3 py-1">Next.js</span>
            <span className="rounded-full border border-foreground/15 bg-foreground/[.04] px-3 py-1">TypeScript</span>
            <span className="rounded-full border border-foreground/15 bg-foreground/[.04] px-3 py-1">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
