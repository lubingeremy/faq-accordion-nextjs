'use client'
import { useState } from "react";
import Image from 'next/image'
import arrowDown from '../../images/icon-arrow-down.svg'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <Image
          className={`ml-auto mt-2 transition-transform duration-200 ease-out ${isEnter && "rotate-180"}`}
          src={arrowDown}
          alt="Arrow down"
          style={{ position: 'relative', width: '15px', height: '12px' }}
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:text-soft-red transition-text duration-200 ${
          isEnter && "font-bold"
        }`
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out"
    }}
    panelProps={{ className: "px-4 pb-4" }}
  />
);


export default function Questions() {
  return (
    <Accordion className="w-full h-3/4 flex flex-col justify-center" transition transitionTimeout={250}>
      <AccordionItem header="Question 1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores cupiditate vitae.
      </AccordionItem>
      <AccordionItem header="Question 2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores cupiditate vitae.
      </AccordionItem>
      <AccordionItem header="Question 3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores cupiditate vitae.
      </AccordionItem>
      <AccordionItem header="Question 4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores cupiditate vitae.
      </AccordionItem>
      <AccordionItem header="Question 5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores cupiditate vitae.
      </AccordionItem>
    </Accordion>
  );
  }
  // <ul className='h-3/4 flex flex-col justify-between bg-green-500'>
  //   <li className=''>
  //     <div className='flex flex-row justify-between items-center'>
  //       <p className='font-bold'>Question question question?</p>
  //       <div style={{ position: 'relative', width: '12px', height: '9px' }}>
  //         <Image
  //           src={arrowDown}
  //           alt=''
  //           // width={10}
  //           // height={7}
  //           layout="fill"
  //           objectFit='cover'
  //         />
  //       </div>
  //     </div>
  //     <div>
  //       <p>Answer answer answer answer answer answer answer answer answer answer</p>
  //     </div>
  //   </li>
  // </ul>