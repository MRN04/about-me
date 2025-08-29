import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Про мене</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Avatar className="size-20">
                <AvatarImage src="/vercel.svg" alt="Avatar" />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-foreground/80">
                  Я фронтенд‑розробник, який любить чистий код, продуману
                  взаємодію та швидкі інтерфейси. Працюю з React, Next.js і
                  TypeScript. Ціную прості рішення, доступність і високу якість UI.
                </p>
                <Separator className="my-6" />
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

