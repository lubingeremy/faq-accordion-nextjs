import Image from 'next/image'
import styles from './page.module.css'
import Questions from './question'
import illustrationHumanOnlineMobile from '../../images/illustration-woman-online-mobile.svg'

export default function Home() {
  return (
    <main className="bg-white h-6/8 lg:h-55per rounded-xl flex flex-col lg:flex-row w-4/5 md:w-3/6 lg:w-3/4 px-5 pb-10">
      <div className="w-full h-1/3 lg:w-1/2 bg-[url('../../images/bg-pattern-mobile.svg')] bg-no-repeat bg-center bg-top">
        <Image
          src={illustrationHumanOnlineMobile}
          alt='Human browsing internet'
          className='lg:hidden'
        />
      </div>
      <div className='w-full lg:w-1/2 lg:py-12 lg:pr-12 flex flex-col'>
        <h1 className='h-1/4 lg:h-1/6 text-4xl font-bold text-center lg:text-left text-dark-blue'>FAQ</h1>
        <Questions/>
      </div>
    </main>
  )
}


