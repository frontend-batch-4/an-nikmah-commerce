export default function Search({ children, kondisi, togglesSearch }) {
    return (
        <>
            <div className={`transition-all delay-200 flex justify-center  items-center p-5 md:p-10 gap-5 h-[150px] w-full bg-slate-400 absolute z-20 lg:hidden ${kondisi ? 'top-0 left-0' : '-top-full'}`}>

                <form className="w-full" action="/searchpage/" method="get">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            name="keyword"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                            placeholder="Search product ..."
                            required=""
                        />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <button className="" onClick={() => { togglesSearch() }}>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 2L12 12M2 12L12 2"
                            stroke="#222222"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

            </div>
            <div onClick={() => togglesSearch()} className={`transition-all delay-[230ms] flex flex-col p-10 gap-5 h-screen w-screen bg-black absolute bottom-0 right-0 lg:hidden ${kondisi ? 'opacity-50 z-10' : 'opacity-0 -z-10'}`}>
            </div>
            {children}
        </>
    )
}