import { useState } from "react";
import Image from 'next/image'
import arrowDown from '../../images/icon-arrow-down.svg'

export default function Questions() {
  return (
    <ul className='h-3/4 flex flex-col justify-between bg-green-500'>
      <li className=''>
        <div className='flex flex-row justify-between items-center'>
          <p className='font-bold'>Question question question?</p>
          <div style={{ position: 'relative', width: '12px', height: '9px' }}>
            <Image
              src={arrowDown}
              alt=''
              // width={10}
              // height={7}
              layout="fill"
              objectFit='cover'
            />
          </div>
        </div>
        <div>
          <p>Answer answer answer answer answer answer answer answer answer answer</p>
        </div>
      </li>
      <hr/>
      <li className=''>
        <div className='flex flex-row justify-between items-center'>
          <p className='font-bold'>Question question question?</p>
          <div style={{ position: 'relative', width: '12px', height: '9px' }}>
            <Image
              src={arrowDown}
              alt=''
              // width={10}
              // height={7}
              layout="fill"
              objectFit='cover'
            />
          </div>
        </div>
        <div>
          <p>Answer answer answer answer answer answer answer answer answer answer</p>
        </div>
      </li>
      <hr/>
      <li className=''>
        <div className='flex flex-row justify-between items-center'>
          <p className='font-bold'>Question question question?</p>
          <div style={{ position: 'relative', width: '12px', height: '9px' }}>
            <Image
              src={arrowDown}
              alt=''
              // width={10}
              // height={7}
              layout="fill"
              objectFit='cover'
            />
          </div>
        </div>
        <div>
          <p>Answer answer answer answer answer answer answer answer answer answer</p>
        </div>
      </li>
      <hr/>
    </ul>
  )
}