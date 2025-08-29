import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AboutSection from "@/components/sections/about-section";

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen flex items-center">
      {/* Background abstraction */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,oklch(0.7_0.12_280_/_0.18)_0%,transparent_60%)] dark:bg-[radial-gradient(50%_50%_at_50%_0%,oklch(0.7_0.12_280_/_0.22)_0%,transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 size-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-[conic-gradient(from_180deg_at_50%_50%,oklch(0.78_0.16_302_/_0.18)_0deg,oklch(0.84_0.14_350_/_0.16)_120deg,oklch(0.85_0.16_20_/_0.14)_240deg,oklch(0.78_0.16_302_/_0.18)_360deg)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">
          <Badge variant="secondary" className="rounded-full px-3 py-1">Frontend Developer</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Привіт! Я — фронтенд‑розробник
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              я створюю сучасні веб‑інтерфейси
            </span>
            .
          </h1>

          <p className="mt-6 text-base/7 text-foreground/80 sm:text-lg/8">
            Працюю з React, Next.js, TypeScript та Tailwind CSS. Створюю швидкі,
            адаптивні та доступні інтерфейси з акцентом на чистий код і сучасний
            дизайн.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">Переглянути проєкти</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Зв’язатися</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
          </div>
        </div>
      </div>
    </section>
    <AboutSection />
    </>
  );
}

// moved AboutSection to components/sections/about-section
