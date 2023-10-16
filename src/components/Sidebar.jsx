
import { NavLink } from "react-router-dom"
// SIDEBAR THIRD STEP : masukkan parameter yang berisi nilai useState (disini namanya *kondisi*) kedalam parameter props
export default function Sidebar({ kondisi, toggleSidebar }) {
    return (
        <>

            {/* SIDEBAR FOURTH STEP : buat kondisi pada class pembungkus sidebar, buat kondisi tampilan ketika true dan false */}
            <div className={`transition-all delay-300 flex flex-col items-end p-5 md:p-10 gap-5 h-screen w-1/2 md:w-1/3 bg-slate-400 absolute z-20 lg:hidden ${kondisi ? 'top-0 left-0' : 'top-0 -left-full'}`}>
                <button className="absolute left-5 top-7 md:left-8" onClick={() => toggleSidebar()}>
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12 12M2 12L12 2" stroke="#222222" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>

                <NavLink to="/" className={'text-xl font-semibold hover:underline md:p-5'}>
                    Home
                </NavLink>
                <NavLink to="/mahkota" className={'text-xl font-semibold hover:underline md:p-5'}>
                    Mahkota
                </NavLink>
                <NavLink to="/hairpiece" className={'text-xl font-semibold hover:underline md:p-5'}>
                    Hairpiece
                </NavLink>
                <NavLink to="/headpiece" className={'text-xl font-semibold hover:underline md:p-5'}>
                    Headpiece
                </NavLink>
                <NavLink to="/allproducts" className={'text-xl font-semibold hover:underline md:p-5'}>
                    All products
                </NavLink>
            </div>
            <div className={`transition-all delay-[320ms] flex flex-col p-10 gap-5 h-screen w-screen bg-black absolute top-0 right-0 lg:hidden ${kondisi ? 'opacity-50 z-10' : 'opacity-0 -z-10'}`}>
            </div>
        </>
    )
}