'use client'
import { useState } from "react";
import Image from 'next/image'
import arrowDown from '../../images/icon-arrow-down.svg'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({ header, ...rest }: {header: any}) => (
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
        `flex w-full py-4 lg:px-0 text-left hover:text-soft-red transition-text duration-200  ${
          isEnter && "font-bold text-dark-blue"
        }`
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out"
    }}
    panelProps={{ className: "px-0 pr-5 pb-4" }}
  />
);


export default function Questions() {
  return (
    <Accordion className="w-full h-3/4 lg:h-4/5 flex flex-col text-xs text-grayish-blue" transition transitionTimeout={250}>
      <AccordionItem header="How many team members can I invite?">
        You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
      </AccordionItem>
      <AccordionItem header="What is the maximum file upload size?">
        No more than 2GB. All files in your account must fit your allotted storage space.
      </AccordionItem>
      <AccordionItem header="How do I reset my password?">
      Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
      </AccordionItem>
      <AccordionItem header="Can I cancel my subscription?">
        Yes! Send us a message and we’ll process your request no questions asked.
      </AccordionItem>
      <AccordionItem header="Do you provide additional support?">
        Chat and email support is available 24/7. Phone lines are open during normal business hours.
      </AccordionItem>
    </Accordion>
  );
  }