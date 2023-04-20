import React from 'react'

import { Dismiss } from "flowbite";
import { useRef } from "react"

const UnderConstructionAlert = () => {

  const targetElement = useRef(null);
  const triggerElement = useRef(null);

  function handleClick() {
    // console.log(targetElement.current); // logs the element object

    const $targetEl = targetElement.current
    const $triggerEl = triggerElement.current

    const options = {
        transition: 'transition-opacity',
        duration: 500,
        timing: 'ease-out',

        onHide: (context, targetEl) => {
        console.log('element has been dismissed')
        console.log(targetEl)
        }
    };

    const dismiss = new Dismiss($targetEl, $triggerEl, options);

    dismiss.hide();
  }

  return (
    <div ref={targetElement}  className="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                <div  className="ml-3 text-sm font-medium">
                    Website is still under construction. Stay tuned for <a href="#" className="font-semibold underline hover:no-underline">more features</a>!
                </div>
                <button onClick={handleClick} ref={triggerElement}type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
  )
}

export default UnderConstructionAlert