import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <nav className="container h-20 flex items-center justify-between">
                {/* search */}
                <form className="max-w-sm px-4 hidden lg:block">
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

                    <svg width="91" height="10" viewBox="0 0 91 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.883 9.73685L4.939 0.636846H7.019L11.088 9.73685H8.878L5.55 1.70285H6.382L3.041 9.73685H0.883ZM2.911 7.78685L3.47 6.18785H8.15L8.722 7.78685H2.911ZM12.0321 9.73685V0.636846H13.7741L19.1431 7.18885H18.2981V0.636846H20.3781V9.73685H18.6491L13.2671 3.18485H14.1121V9.73685H12.0321ZM25.8098 6.88985V5.26485H29.4888V6.88985H25.8098ZM34.9091 9.73685V0.636846H36.6511L42.0201 7.18885H41.1751V0.636846H43.2551V9.73685H41.5261L36.1441 3.18485H36.9891V9.73685H34.9091ZM45.4081 9.73685V0.636846H47.5141V9.73685H45.4081ZM51.5587 7.65685L51.4417 5.22585L55.7967 0.636846H58.1367L54.2107 4.86185L53.0407 6.10985L51.5587 7.65685ZM49.6737 9.73685V0.636846H51.7667V9.73685H49.6737ZM55.9007 9.73685L52.6637 5.77185L54.0417 4.27685L58.3577 9.73685H55.9007ZM59.2968 9.73685V0.636846H61.0388L64.9128 7.05885H63.9898L67.7988 0.636846H69.5278L69.5538 9.73685H67.5778L67.5648 3.66585H67.9288L64.8868 8.77485H63.9378L60.8308 3.66585H61.2728V9.73685H59.2968ZM70.5168 9.73685L74.5728 0.636846H76.6528L80.7218 9.73685H78.5118L75.1838 1.70285H76.0158L72.6748 9.73685H70.5168ZM72.5448 7.78685L73.1038 6.18785H77.7838L78.3558 7.78685H72.5448ZM87.9059 0.636846H90.0119V9.73685H87.9059V0.636846ZM83.7719 9.73685H81.6659V0.636846H83.7719V9.73685ZM88.0619 6.00585H83.6159V4.22485H88.0619V6.00585Z" fill="black" />
                    </svg>

                </NavLink>

                {/* icon */}
                <div className="flex gap-2 items-center">
                    <div className="lg:hidden">
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

                    <div className="hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>



                </div>
            </nav>

            <div className=" items-center w-2/3 justify-between mx-10 hidden lg:flex md:mx-auto">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/mahkota">
                    Mahkota
                </NavLink>
                <NavLink to="/hairpiece">
                    Hairpiece
                </NavLink>
                <NavLink to="/headpiece">
                    Headpiece
                </NavLink>
                <NavLink to="/allproducts">
                    All products
                </NavLink>
            </div>
        </>
    );
}