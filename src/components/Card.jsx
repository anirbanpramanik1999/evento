import React from "react";

export default function card() {
  return (
    <>
      {/* mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 */}
      <div
        id="service"
        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 overflow-auto"
      >
        <div className="my-3 w-[300px] rounded-md border mx-auto shadow-lg items-center hover:bg-indigo-400 hover:text-white ">
          <img
            src="https://images.pexels.com/photos/2635390/pexels-photo-2635390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Holi"
            className="h-[200px] w-full rounded-t-md object-cover md:w-auto"
          />
          <div className="p-4">
            <h1 className="items-center text-center text-2xl font-semibold">
              Holi
            </h1>
            <div className="w-full text-center  flex-none mt-2 order-1 text-xl font-bold text-violet-800 hover:text-white">
              ₹3499
            </div>
            <p className="mt-3 text-sm text-gray-600 hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Holi
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #enjoy
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Kokata
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Booknow
            </button>
          </div>
        </div>

        <div className=" my-3 w-[300px] rounded-md border mx-auto shadow-lg hover:bg-indigo-400 hover:text-white">
          <img
            src="https://images.pexels.com/photos/7686304/pexels-photo-7686304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover md:w-auto"
          />
          <div className="p-4">
            <h1 className="inline-flex text-center text-2xl font-semibold">
              Diwali
            </h1>
            <div className="w-full text-center  flex-none mt-2 order-1 text-xl font-bold text-violet-800 hover:text-white">
               ₹2999
            </div>
            <p className="mt-3 text-sm text-gray-600 hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Diwali
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Family
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Delhi
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Booknow
            </button>
          </div>
        </div>

        <div className="my-3 w-[300px] rounded-md border mx-auto shadow-lg hover:bg-indigo-400 hover:text-white">
          <img
            src="https://images.pexels.com/photos/8566097/pexels-photo-8566097.jpeg"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover md:w-auto"
          />
          <div className="p-4">
            <h1 className="flex-none text-center text-2xl font-semibold">
              Onam
            </h1>

            <div className="w-full text-center  flex-none mt-2 order-1 text-xl font-bold text-violet-800 hover:text-white">
               ₹4999 
            </div>

            <p className="mt-3 text-sm text-gray-900 hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Onam
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Enjoy
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Keral
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Booknow
            </button>
          </div>
        </div>

        <div className="my-3 w-[300px] rounded-md border mx-auto shadow-lg hover:bg-indigo-400 hover:text-white">
          <img
            src="https://images.pexels.com/photos/3163677/pexels-photo-3163677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover md:w-auto"
          />
          <div className="p-4">
            <h1 className="flex-none text-center text-2xl font-semibold">
              Eid
            </h1>
            <div className="w-full text-center  flex-none mt-2 order-1 text-xl font-bold text-violet-800 hover:text-white">
              ₹3999
            </div>
            <p className="mt-3 text-sm text-gray-600 hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Eid
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #mosque
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Lucknow
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Booknow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
