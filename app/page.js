import Image from 'next/image'
import VideoBg from './VideoBg'
import WorkPortfolio from './components/Work'
import Footer from './components/Footer'
import EmailSection from './components/EmailSection'

export default function Home() {
  return (
    <main className="">
      <VideoBg />
      <WorkPortfolio />
      <EmailSection />
      <Footer />
    </main>
  )
}
