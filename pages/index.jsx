import CalculatorModal from "components/CalculatorModal"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useRouter } from "next/router"
import {} from "react"
import Button from "ui/Button"
import ExampleUI from "ui/ExampleUI"
import Link from "ui/Link"

export default function Home() {
  const router = useRouter()
  const { theme } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50 dark:bg-gray-800">
      <header className="flex items-center justify-around w-full pt-8 text-xl max-h-24">
        <div className="flex justify-self-start">
          <Image
            onClick={() => {
              router.push("/")
            }}
            className="pt-4 pl-10 cursor-pointer"
            src={
              theme === "dark"
                ? "/images/logo-beifong-dark.png"
                : "/images/logo-beifong.png"
            }
            width={145}
            height={46}
            alt="Logo de Beifong"
          />
        </div>
        <div className="grid grid-cols-3 text-lg font-semibold gap-x-8 place-items-center">
          <Link to="/" active={router.pathname === "/"}>
            Home
          </Link>
          <Link
            to="/suscripciones"
            active={router.pathname === "/suscripciones"}
          >
            Suscripciones
          </Link>
          <Link
            to="/sobre-nosotros"
            active={router.pathname === "/sobre-nosotros"}
          >
            Sobre Nosotros
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-8">
          <Button
            onClick={() => {
              router.push("/clinica/registro")
            }}
            className="px-4"
            variant="primary"
          >
            Registrarse
          </Button>
          <Button
            onClick={() => {
              router.push("/clinica/login")
            }}
            className="px-4"
            variant="outline_primary"
          >
            Iniciar Sesión
          </Button>
        </div>
      </header>
      <main className="flex flex-col flex-1 w-screen font-semibold bg-sky-50 dark:bg-gray-800">
        <section className="flex items-center justify-center flex-1">
          <div className="flex flex-col justify-center flex-1 w-1/2 px-16">
            <h1 className="flex flex-col text-4xl font-bold leading-tight">
              Construimos páginas de clínicas oftalmológicas
              <span className="text-orange-400">
                orientadas a la <br /> accesibilidad.
              </span>
            </h1>
            <p className="my-10 text-lg font-medium text-slate-700 lg:text-xl dark:text-gray-100">
              Digitaliza la gestión completa de tu clínica.
              <br />
              Páginas de Presentación, sistema de citas, de planes
              <br />
              personalizados y mucho más.
              <br />
            </p>

            <div className="grid grid-cols-2 gap-4 place-content-center">
              <Button
                onClick={() => {
                  router.push("/suscripciones")
                }}
                variant="primary"
                size="large"
              >
                Ver suscripciones
              </Button>
              <CalculatorModal type="tryWidget" />
              <Button
                onClick={() => {
                  router.push("/medico/login")
                }}
                className="px-4"
                variant="outline_primary"
              >
                Continuar como Médico
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <ExampleUI.Box size="large" />
          </div>
        </section>
      </main>
    </div>
  )
}
