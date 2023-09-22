import Image from 'next/image'
import VideoBg from './VideoBg'
import WorkPortfolio from './components/Work'

export default function Home() {
  return (
    <main className="">
      <VideoBg />
      <WorkPortfolio />
    </main>
  )
}
