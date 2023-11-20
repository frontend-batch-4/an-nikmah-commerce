import { NavLink } from "react-router-dom";
import LogoAnnikmah from "./../assets/logo an-nikmah.png"
import { Routes, Route } from 'react-router-dom'
import Login from "../pages/login";


export default function Navbar({ toggleSidebar, toggleSearch }) {


    return (

        <>
            <nav className="container h-20 flex items-center justify-between mb-10 px-3">
                {/* toggler button */}
                <button className="lg:hidden relative" onClick={() => { toggleSidebar() }}>
                    <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 3H27M3 15H27M3 27H27"
                            stroke="#222222"
                            strokeWidth={5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </button>

                {/* search */}
                <form className="max-w-sm px-4 hidden lg:block z">
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Cari produk"
                            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-[12px] outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        />
                    </div>
                </form>

                {/* logo */}
                <NavLink to="/">
                    <img src={LogoAnnikmah} style={{ height: 36 }} alt="" />
                </NavLink>

                {/* icon */}
                <div className="flex gap-2 items-center " >
                    <div className="lg:hidden" onClick={() => { toggleSearch() }}>
                        <svg width="24" height="24" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9846 18L10.6846 11.7C10.1846 12.1 9.60964 12.4167 8.95964 12.65C8.30964 12.8833 7.61798 13 6.88464 13C5.06798 13 3.53064 12.3707 2.27264 11.112C1.01464 9.85333 0.38531 8.316 0.384644 6.5C0.384644 4.68333 1.01398 3.146 2.27264 1.888C3.53131 0.63 5.06864 0.000666667 6.88464 0C8.70131 0 10.2386 0.629333 11.4966 1.888C12.7546 3.14667 13.384 4.684 13.3846 6.5C13.3846 7.23333 13.268 7.925 13.0346 8.575C12.8013 9.225 12.4846 9.8 12.0846 10.3L18.3846 16.6L16.9846 18ZM6.88464 11C8.13464 11 9.19731 10.5623 10.0726 9.687C10.948 8.81167 11.3853 7.74933 11.3846 6.5C11.3846 5.25 10.947 4.18733 10.0716 3.312C9.19631 2.43667 8.13398 1.99933 6.88464 2C5.63464 2 4.57198 2.43767 3.69664 3.313C2.82131 4.18833 2.38398 5.25067 2.38464 6.5C2.38464 7.75 2.82231 8.81267 3.69764 9.688C4.57298 10.5633 5.63531 11.0007 6.88464 11Z" fill="#888888" />
                        </svg>
                    </div>

                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>

                    <div>

                    </div>

                    <NavLink to="/login">
                        <div className="hidden lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </NavLink>


                </div>
            </nav>

            <div className=" items-center w-2/3 justify-between mx-10 hidden lg:flex md:mx-auto mb-10">
                <NavLink to="/" className={'text-xl font-bold hover:underline hover:animate-pulse'}>
                    Home
                </NavLink>
                <NavLink to="/mahkota" className={'text-xl font-bold hover:underline hover:animate-pulse'}>
                    Mahkota
                </NavLink>
                <NavLink to="/hairpiece" className={'text-xl font-bold hover:underline hover:animate-pulse'}>
                    Hairpiece
                </NavLink>
                <NavLink to="/headpiece" className={'text-xl font-bold hover:underline hover:animate-pulse'}>
                    Headpiece
                </NavLink>
                <NavLink to="/allproducts" className={'text-xl font-bold hover:underline hover:animate-pulse'}>
                    All products
                </NavLink>
            </div>
        </>
    );
}