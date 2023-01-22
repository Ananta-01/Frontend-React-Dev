import React from "react";
import Apidata from "./Apidata";
// import { useNavigate } from "react-router-dom";
import Adduser from "./Adduser";

function MainPage() {
  
  return (
    <>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left mx-2">
        Company Settings
      </p>

      <div className="m-8 flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 light:bg-gray-700 light:border-gray-600 light:text-white light:hover:text-white light:hover:bg-gray-600 light:focus:ring-blue-500 light:focus:text-white"
        >
          General
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-gray-200 bg-white border border-gray-200 bg-gray-100 text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 light:bg-gray-700 light:border-gray-600 light:text-white light:hover:text-white light:hover:bg-gray-600 light:focus:ring-blue-500 light:focus:text-white"
        >
          User
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 light:bg-gray-700 light:border-gray-600 light:text-white light:hover:text-white light:hover:bg-gray-600 light:focus:ring-blue-500 light:focus:text-white"
        >
          Plan
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 light:bg-gray-700 light:border-gray-600 light:text-white light:hover:text-white light:hover:bg-gray-600 light:focus:ring-blue-500 light:focus:text-white"
        >
          Billing
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 light:bg-gray-700 light:border-gray-600 light:text-white light:hover:text-white light:hover:bg-gray-600 light:focus:ring-blue-500 light:focus:text-white"
        >
          Integrations
        </button>
      </div>

      <div className="w-11/12 m-auto  p-4  bg-white border rounded-lg shadow-md sm:p-8 light:bg-gray-800 light:border-gray-700">
        <div className="flex  ">
          <div className="mr-96">
            <div className="flex items-center ">
              <h5 className="mb-2  text-2xl font-bold tracking-tight text-start text-gray-900 dark:text-black">
                Users
              </h5>
              <span className="bg-green-100 m-2 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                12 user{" "}
              </span>
            </div>
            <p className="text-left">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className="m-4 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white light:border-white light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Download CSV
            </button>
            <button
            
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white light:border-white light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:bg-gray-700"
              >
              <svg className="w-4 h-4 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
              Add User 
            </button>
          </div>
        </div>
        {/* <div className=" bg-white border shadow-md sm:p-8 light:bg-gray-800 light:border-gray-700">


        </div> */}
        <div className="border">
       <Apidata></Apidata>   


        </div>
      </div>
    </>
  );
}

export default MainPage;
