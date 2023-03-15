import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/router"
import { BookOpenIcon } from "@heroicons/react/24/outline";



const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const router = useRouter()
    
    console.log({router});
  return (


    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <BookOpenIcon className="h-6 w-6 text-white" />
              BookStore
            </a>
            <button
              className="text-white cursor-pointer  leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             
              <svg 
                    className="w-6 h-6" 
                    aria-hidden="true" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fillRule="evenodd" 
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                            clip-rule="evenodd">
                        </path>
                </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className={"px-3 py-2 flex items-center text-xs text-white uppercase font-bold leading-snug  hover:opacity-75" + (router.pathname == "/" ? " text-black" : "text-white")} 
                  href="/"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white " ></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" + (router.pathname == "/genre-nominated" && " text-black")}
                  href="/genre-nominated"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Genre Nominated books</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" + (router.pathname == "/awarded" && " text-black")}
                  href="/awarded"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Awarded books</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" + (router.pathname == "/most-popular" && " text-black")}
                  href="most-popular"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Top 15 most popular</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar