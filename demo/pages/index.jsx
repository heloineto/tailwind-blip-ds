import Head from 'next/head'
import Colors from '../components/Colors/Colors'
import blipColors from 'blip-tokens/build/json/colors.json'

export default function Index() {
  console.log(blipColors)
  return (
    <div className="antialiased text-neutral-light-box bg-neutral-dark-city min-h-screen">
      <Head>
        <title>Tailwind CSS Plugin for Blip Design System</title>
      </Head>
      <div className="flex justify-center items-center py-10">
        <Colors />
      </div>
    </div>
  )
}

export const config = {
  unstable_runtimeJS: false,
}
