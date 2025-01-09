import { Link } from "react-router-dom";
import Button from "../../ui/Button";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">Get in touch</h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">Fill in the form to start a conversation</p>
                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +44 1234567890
                            </div>
                        </div>
                        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                <a href="https://veilmail.io/irish-geoff">https://veilmail.io/irish-geoff</a>
                            </div>
                        </div>
                    </div>
                    <form action="https://fabform.io/f/xxxxx" method="post" className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label for="name" className="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-2">
                            <label for="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-2">
                            <label for="message" className="hidden">Message</label>
                            <textarea name="message" id="message" placeholder="Your Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                        </div>
                        <button type="submit" className="md:w-32 bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


    // <section className="text-gray-600 body-font relative">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-col text-center w-full mb-12">
    //       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
    //       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hubungi kami, kapan pun, dimana pun</p>
    //     </div>

    //     <div className="lg:w-1/2 md:w-2/3 mx-auto">
    //       <div className="flex flex-wrap -m-2">
    //         <div className="p-2 w-1/2">
    //           <div className="relative">
    //             <label htmlFor="" className="leading-7 text-sm text-gray-600">Name</label>
    //             <input type="text" name="" id="" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    //             </div>
    //         </div>
    //         <div className="p-2 w-1/2">
    //           <div className="relative">
    //             <label htmlFor="" className="leading-7 text-sm text-gray-600">Email</label>
    //             <input type="email" name="" id="" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    //             </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //             <label htmlFor="" className="leading-7 text-sm text-gray-600">Message</label>
    //             <textarea className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea> 
    //             </div>
    //         </div>
  
    //         <div className="p-2 w-full">
    //           <Button txt="Send" />
    //           {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{btn}</button> */}
    //         </div>
    //         <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
    //           <Link to="" className="text-indigo-500">info@booksales.com
    //             <p className="leading-normal my-5">
    //             Jakarta Selatan
    //             <br />
    //             Indonesia
    //             </p>
    //           </Link>
    //           </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}