
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BuildingIcon className="h-6 w-6" />
          <span className="sr-only">Construção Civil Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Serviços
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Portfólio
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre Nós
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Construção Civil de Excelência
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Oferecemos serviços de construção de casas, edifícios comerciais e reformas com qualidade e
                  eficiência.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Nossos Serviços
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contato
                  </Link>
                </div>
              </div>
              <img
                src="/cv1.jpg"
                width="550"
                height="550"
                alt="Construção Civil"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nosso Portfólio</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos Realizados</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira alguns dos nossos projetos concluídos com sucesso.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/p1.jpg"
                width="550"
                height="310"
                alt="Projeto 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Construção de Edifício Comercial</h3>
                <p className="text-muted-foreground">
                  Construímos um edifício comercial de 10 andares no centro da cidade, atendendo aos mais altos padrões
                  de qualidade e segurança.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/p2.jpg"
                width="550"
                height="310"
                alt="Projeto 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Reforma de Residência</h3>
                <p className="text-muted-foreground">
                  Realizamos uma ampla reforma em uma residência de 3 andares, modernizando a estrutura e a aparência da
                  propriedade.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Sobre Nós</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa História e Valores</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos uma empresa de construção civil com mais de 20 anos de experiência, comprometida em oferecer
                  serviços de alta qualidade e atendimento personalizado a nossos clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/p4.jpeg"
                width="550"
                height="310"
                alt="Sobre Nós"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Nossos Valores</h3>
                <ul className="grid gap-4">
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Qualidade</h4>
                      <p className="text-muted-foreground">
                        Comprometidos em entregar projetos com os mais altos padrões de qualidade.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Eficiência</h4>
                      <p className="text-muted-foreground">
                        Utilizamos técnicas e tecnologias avançadas para garantir a eficiência em nossos projetos.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Sustentabilidade</h4>
                      <p className="text-muted-foreground">
                        Buscamos soluções sustentáveis em nossos projetos, minimizando o impacto ambiental.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contato</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Solicite um Orçamento</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Preencha o formulário abaixo para solicitar um orçamento personalizado para seu projeto.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-4">
                  <Input type="text" placeholder="Nome" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="E-mail" className="max-w-lg flex-1" />
                  <Textarea placeholder="Descrição do Projeto" rows={4} className="max-w-lg flex-1" />
                  <Button type="submit" className="w-full">
                    Enviar Solicitação
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
        <p className="text-xs">&copy; 2024 Osmane Machavate Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BuildingIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}