import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string
}

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async (input) => {
    setLoading(true)
    const response = await fetch(`/api/user/new?email=${input.email}`)
    const data = await response.json()
    if (data) {
      setLoading(false)
      setSuccess(true)
    }
  }

  return (
    <div>
      <Head>
        <title>Deku</title>
        <link rel="icon" href="/icon.svg" />
        <meta
          name="description"
          content="Wallet para tus compras en línea o físicas donde puedes utilizar Bitcoin o Soles"
        />

        <link rel="apple-touch-icon" href="/icon.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dekuwallet.vercel.app/" />
        <meta property="og:title" content="Deku Wallet" />
        <meta
          property="og:description"
          content="Wallet para tus compras en línea o físicas donde puedes utilizar Bitcoin o Soles"
        />
        <meta property="og:image" content="/metaImage.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dekuwallet.vercel.app/" />
        <meta property="twitter:title" content="Deku Wallet" />
        <meta
          property="twitter:description"
          content="Wallet para tus compras en línea o físicas donde puedes utilizar Bitcoin o Soles"
        />
        <meta property="twitter:image" content="/metaImage.png" />
      </Head>
      <main className="md:flex md:min-h-screen md:bg-gradient-to-br md:from-[#0BD6CD] md:to-[#2600FF]">
        <div className="m-auto flex min-h-screen flex-col items-center bg-[#F4F2FF] md:h-fit md:min-h-fit md:w-3/5 md:rounded-2xl md:pb-10 xl:w-2/5">
          <section className="mt-20 flex items-center gap-2">
            <div className="relative h-20 w-16 lg:h-24 lg:w-20">
              <Image src="/logo.png" layout="fill" />
            </div>
            <h1 className="bg-gradient-to-br from-[#0BD6CD] to-[#2600FF] bg-clip-text text-6xl font-bold text-transparent lg:text-7xl">
              Deku
            </h1>
          </section>
          <h2 className="mx-7 mt-8 mb-12 text-center text-2xl font-bold">
            Wallet para tus compras físicas o en línea utilizando Bitcoin y
            Soles
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
              className="border-[##AAA4CC] my-6 w-72 rounded-xl border-2 py-2 px-4 outline-none focus:border-[#78758b] xl:w-96 xl:py-3"
            />
            <button
              type="submit"
              className="mb-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#0BD6CD] to-[#2600FF] py-3 text-lg font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 md:mb-0"
              disabled={loading}
            >
              {loading && (
                <div>
                  <div
                    style={{ borderTopColor: 'transparent' }}
                    className="border-secondary mx-auto h-6 w-6 animate-spin rounded-full border-4 border-solid"
                  ></div>
                </div>
              )}
              Quiero saber más
            </button>
          </form>
          {success && (
            <p className="mx-4 mt-3 rounded-md bg-green-200 p-2 text-center font-medium text-green-500 md:mx-0">
              Gracias por tu interés, recibirás noticias pronto ✅
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
