import Image from 'next/image'
import styles from './page.module.css'
import Questions from './question'
import illustrationHumanOnlineMobile from '../../images/illustration-woman-online-mobile.svg'
import illustrationHumanOnlineDesktop from '../../images/illustration-woman-online-desktop.svg'

export default function Home() {
  return (
    <main className="bg-white h-6/8 lg:h-55per rounded-xl flex flex-col lg:flex-row w-4/5 md:w-3/6 lg:w-3/6 px-5 pb-10">
      <div className="w-full h-32 bg-[url('../../images/bg-pattern-mobile.svg')] lg:bg-[url('../../images/bg-pattern-desktop.svg')] lg:w-1/2 bg-white bg-top">
        <Image
          src={illustrationHumanOnlineMobile}
          alt='Human browsing internet'
          className='lg:hidden absolute top-16 left-1/2 -translate-x-1/2 lg:hidden'
        />
        <Image
          src={illustrationHumanOnlineDesktop}
          alt='Human browsing internet'
          className="hidden lg:inline relative -left-20 top-1/2"
        />
      </div>
      <div className='w-full lg:w-1/2 lg:py-12 lg:pr-12 flex flex-col'>
        <h1 className='h-1/4 lg:h-1/6 text-4xl font-bold text-center lg:text-left text-dark-blue'>FAQ</h1>
        <Questions/>
      </div>
    </main>
  )
}


