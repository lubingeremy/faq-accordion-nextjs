import Image from 'next/image'
import styles from './page.module.css'
import Questions from './question'

export default function Home() {
  return (
    <main className="bg-red-500 h-3/6 rounded-xl flex flex-row w-4/5">
      <div className='w-1/2'>left with IMG</div>
      <div className='w-1/2 bg-blue-300 py-12 pr-12 flex flex-col'>
        <h1 className='h-1/4 text-4xl font-bold bg-yellow-500'>FAQ</h1>
        <Questions/>
      </div>
    </main>
  )
}
