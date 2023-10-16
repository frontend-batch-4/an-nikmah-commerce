import Img1 from './../assets/IMG_2196.png';
import CarouselProduk from "../components/CarouselProduk"
export default function Home() {
    return (
        <>
            {/* section hero */}
            <div className="container flex flex-col md:flex-row justify-center md:justify-evenly items-center mb-10">

                {/* cta */}
                <div className="flex flex-col max-w-md md:w-1/2 p-5 md:p-5 items-center gap-5 md:gap-10 order-2 md:order-1">
                    <h1 className="text-2xl md:text-5xl font-bold text-center">Elegansi dalam setiap sentuhan</h1>
                    <p className="text-center w-3/4 md:w-full">Kunjungi toko kami atau jelajahi koleksi kami secara online dan temukan keindahan fashion Anda bersama An-Nikmah Collection.</p>
                    <button className="py-2 px-3 md:py-3 md:px-4 lg:py-4 lg:px-5 border hover:outline hover:shadow-md border-black rounded-lg">
                        Get now
                    </button>

                </div>

                {/* pict */}
                <div className='max-w-md md:w-1/2 p-5 md:p-10 lg:h-1/2 order-1 md:order-2'>
                    {/* <img className='' src={Img1} alt="annikmah produk" /> */}
                    <CarouselProduk />
                </div>
            </div>

            {/* sample produk */}
            <div className='flex flex-col md:flex-row md:justify-evenly items-center md:max-w-2xl lg:max-w-5xl'>
                <div className='p-5 max-w-sm relative flex flex-col'>
                    <img src={Img1} className='rounded-t-xl shadow-lg' alt="Gambar Produk"/>
                    <button className='h-16 bg-slate-200 rounded-b-xl shadow-lg hover:border hover:outline-none hover:text-slate-100 hover:delay-150 hover:shadow-2xl hover:bg-slate-400 hover: text-center text-2xl p-2'>Lihat detail</button>
                </div>
                <div className='p-5 max-w-sm relative flex flex-col'>
                    <img src={Img1} className='rounded-t-xl shadow-lg' alt="Gambar Produk"/>
                    <button className='h-16 bg-slate-200 rounded-b-xl shadow-lg hover:border hover:outline-none hover:text-slate-100 hover:delay-150 hover:shadow-2xl hover:bg-slate-400 hover: text-center text-2xl p-2'>Lihat detail</button>
                </div>
                <div className='p-5 max-w-sm relative flex flex-col'>
                    <img src={Img1} className='rounded-t-xl shadow-lg' alt="Gambar Produk"/>
                    <button className='h-16 bg-slate-200 rounded-b-xl shadow-lg hover:border hover:outline-none hover:text-slate-100 hover:delay-150 hover:shadow-2xl hover:bg-slate-400 hover: text-center text-2xl p-2'>Lihat detail</button>
                </div>
                
            </div>
        </>

    )

}