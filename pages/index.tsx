import Head from 'next/head'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div>
      <Head>
        <title>Deku</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-[#F4F2FF]">
        <section className="mt-20 flex items-center gap-2">
          <div className="relative h-20 w-16">
            <Image src="/logo.png" layout="fill" />
          </div>
          <h1 className="bg-gradient-to-br from-[#0BD6CD] to-[#2600FF] bg-clip-text text-6xl font-bold text-transparent">
            Deku
          </h1>
        </section>
        <h2 className="mx-7 mt-8 mb-12 text-center text-2xl font-bold">
          Wallet para tus compras físicas o en línea utilizando Bitcoin y Soles
        </h2>
        <h3 className="mx-7 text-center text-lg font-medium text-[#535063]">
          Te interesa? Ingresa tu email para recibir novedades 🚀{' '}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            {...register('email')}
            type="email"
            placeholder="Ingresa tu email"
            required
            className="border-[##AAA4CC] my-6 w-72 rounded-xl border-2 py-2 px-4 outline-none focus:border-[#78758b]"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-br from-[#0BD6CD] to-[#2600FF] py-3 text-lg font-semibold text-white"
          >
            Quiero saber más
          </button>
        </form>
      </main>
    </div>
  )
}
