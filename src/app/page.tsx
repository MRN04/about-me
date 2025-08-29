import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Abstract decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(120,119,198,0.18)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(120,119,198,0.22)_0%,rgba(10,10,10,0)_60%)]" />
        {/* aurora blobs */}
        <div className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-[80px]" />
        <div className="absolute left-[15%] top-[65%] h-40 w-40 rounded-full bg-indigo-500/20 blur-[70px]" />
        <div className="absolute right-[10%] top-[20%] h-44 w-44 rounded-full bg-rose-500/20 blur-[70px]" />
        {/* subtle grid */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(120,119,198,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,198,0.06)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">
          <Badge>Frontend Developer</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Привіт! Я — фронтенд‑розробник
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              створюю сучасні веб‑інтерфейси
            </span>
            .
          </h1>

          <p className="mt-6 text-base/7 text-foreground/80 sm:text-lg/8">
            Працюю з React, Next.js, TypeScript та Tailwind CSS. Зосереджуюся на
            продуктивності, адаптивності та зручності користування з акцентом на
            чистий і підтримуваний код.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#projects">Переглянути проєкти</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Зв’язатися</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-sm text-foreground/70">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind CSS</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
