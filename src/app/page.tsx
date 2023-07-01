import Image from 'next/image'
import styles from './page.module.css'
import Questions from './question'

export default function Home() {
  return (
    <main className="bg-white h-3/4 lg:h-3/5 rounded-xl flex flex-col lg:flex-row w-4/5 md:w-3/6 lg:w-3/4 px-5">
      <div className='w-full lg:w-1/2'>left with IMG</div>
      <div className='w-full lg:w-1/2 lg:py-12 lg:pr-12 flex flex-col'>
        <h1 className='h-1/4 text-4xl font-bold text-center lg:text-left'>FAQ</h1>
        <Questions/>
      </div>
    </main>
  )
}
