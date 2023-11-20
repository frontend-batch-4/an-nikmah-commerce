
import { NavLink } from "react-router-dom"
// SIDEBAR THIRD STEP : masukkan parameter yang berisi nilai useState (disini namanya *kondisi*) kedalam parameter props
export default function Sidebar({ kondisi, toggleSidebar }) {
    return (
        <>

            {/* SIDEBAR FOURTH STEP : buat kondisi pada class pembungkus sidebar, buat kondisi tampilan ketika true dan false */}
            <div className={`transition-all delay-200 flex flex-col items-end p-5 md:p-10 gap-5 h-screen w-[200px] md:w-1/3 bg-slate-400 absolute z-20 lg:hidden ${kondisi ? 'top-0 left-0' : 'top-0 -left-full'}`}>
                <button className="absolute left-5 top-7 md:left-8" onClick={() => toggleSidebar()}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <svg
                            width={14}
                            height={14}
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

                    </svg>

                </button>


                <NavLink to="/" onClick={() => toggleSidebar()} className={'text-xl font-semibold hover:underline md:p-5'}>
                    Home
                </NavLink>
                <NavLink to="/mahkota" onClick={() => toggleSidebar()} className={'text-xl font-semibold hover:underline md:p-5'}>
                    Mahkota
                </NavLink>
                <NavLink to="/hairpiece" onClick={() => toggleSidebar()} className={'text-xl font-semibold hover:underline md:p-5'}>
                    Hairpiece
                </NavLink>
                <NavLink to="/headpiece" onClick={() => toggleSidebar()} className={'text-xl font-semibold hover:underline md:p-5'}>
                    Headpiece
                </NavLink>
                <NavLink to="/allproducts" onClick={() => toggleSidebar()} className={'text-xl font-semibold hover:underline md:p-5'}>
                    All products
                </NavLink>

                <div className="justify-self-end absolute bottom-10 flex gap-5">
                    <NavLink to="/login">
                        <div onClick={() => toggleSidebar()} className="flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h1>Login</h1>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div onClick={() => toggleSidebar()} className={`transition-all delay-[220ms] flex flex-col p-10 gap-5 h-screen w-screen bg-black absolute top-0 right-0 lg:hidden ${kondisi ? 'opacity-50 z-10' : 'opacity-0 -z-10'}`}>
            </div>
        </>
    )
}