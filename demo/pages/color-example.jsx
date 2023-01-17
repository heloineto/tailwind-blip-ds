import Head from 'next/head'
import Colors from '../components/Colors/Colors'

export default function Index() {
  return (
    <div className="antialiased text-neutral-light-box bg-neutral-dark-city min-h-screen">
      <Head>
        <title>Tailwind CSS Plugin for Blip Design System</title>
      </Head>
      <div className="flex justify-center items-center py-10 flex-col gap-10">
        <div className="w-96 h-40 bg-neutral-dark-ico border-2 rounded border-neutral-dark-skate p-5 flex flex-col">
          <p className="text-primary-main uppercase text-fs-12 font-extrabold mb-1">
            Tailwind CSS Plugin
          </p>
          <h1 className="text-fs-24 font-semibold text-neutral-light-whisper">Tailwind ❤ Blip</h1>
          <div className="flex-grow grid grid-cols-3 gap-2">
            <div className="bg-extend-reds-lipstick rounded" />
            <div className="bg-primary-pinks-barbie rounded" />
            <div className="bg-primary-oranges-doritos rounded" />
          </div>
        </div>
        <div className="bg-neutral-dark-ico border-neutral-dark-skate border-2 rounded p-5 grid grid-cols-3 gap-2 w-96">
          <div className="bg-primary-main rounded h-20" />
          <div className="bg-extend-reds-lipstick rounded h-20" />
          <div className="bg-primary-greens-true rounded h-20" />
          <div className="text-primary-light col-span-full font-bold">I'm some blue text!</div>
        </div>
      </div>
    </div>
  )
}
