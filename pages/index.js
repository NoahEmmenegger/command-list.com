import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen p-10 pt-0">
        <div className="flex h-5/6">
          <div className="w-3/5 align-middle m-auto pl-10">
            <h1 className="text-6xl">Create command pages for free</h1>
            <Link href="login"><a className="btn mt-10 text-lg px-8" style={{ 'width': 'fit-content' }}>Start now</a></Link>
          </div>
          <div className="w-full h-full relative p-10">
            {/* https://www.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_10172825.htm */}
            <Image alt='' src="/bg_men_computer.svg" height={1250} width={1967.25} objectFit="contain" />
          </div>
        </div>
        <div className="h-10 px-80 mt-16">
          <div className="flex h-10 mt-10">
            <div className="w-1/4 text-center relative">
              <Image className="m-auto filter grayscale" alt='' src="/logos/discord.svg" layout="fill" objectFit="contain" />
            </div>
            <div className="w-1/4 text-center relative">
              <Image className="m-auto filter grayscale" alt='' src="/logos/github.svg" layout="fill" objectFit="contain" />
            </div>
            <div className="w-1/4 text-center relative">
              <Image className="m-auto filter grayscale" alt='' src="/logos/slack.svg" layout="fill" objectFit="contain" />
            </div>
            <div className="w-1/4 text-center relative">
              <Image className="m-auto filter grayscale" alt='' src="/logos/telegram.svg" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Image src="/triangle.svg" alt='' width="100%" height="10px"  layout="responsive"/>
          <div className="bg-primary text-white h-screen justify-center flex p-10">
            <div className="w-screen h-auto relative filter drop-shadow-xxl">
              <Image className="m-auto" alt='' src="/dashboard_preview.png" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
