
import React from "react";

export default function SubmitButton({ icon, isLoading, buttonTitle,loadingButtonTitle }) {
  return (
    <div className="sm:col-span-1">
      {isLoading ? (
        <button
          disabled
          type="button"
          className="mt-4 text-white bg-slate-900
            hover:bg-slate-950
           focus:ring-4 focus:outline-none focus:ring-slate-300 
           font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2
             dark:text-slate-50 
            dark:bg-lime-600 dark:hover:bg-lime-700
             dark:focus:ring-lime-800 inline-flex items-center"
        >
         {loadingButtonTitle}
        </button>
      ) : (
        <button
          type="submit"
          className="bg-black dark:bg-lime-700  dark:text-slate-50 inline-flex items-center px-5 py-2.5  sm:mt-6 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-lime-800"
        >
          
        
          <span> {buttonTitle}</span>
        </button>
      )}
    </div>
  );
}