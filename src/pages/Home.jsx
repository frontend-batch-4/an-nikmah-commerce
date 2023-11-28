import { useState, useEffect } from 'react';

import Img1 from './../assets/IMG_2196.png';
import CarouselProduk from "../components/CarouselProduk"
import Navbar from "../components/Navbar";
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';

export default function Home() {

    // const [data, setData] = useState();

    // const getData = async() => {
    //     fetch('https://dummyjson.com/products')
    //     .then(res => res.json()).then((data)=>setData(data))
    // }

    // useEffect(()=>{getData();console.log(data)},[])
    useEffect(() => {
        getData();
    }, []);
    const [data, setData] = useState();

    const getData = async () => {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setData(data); console.log(data)
    };



    return (
        <>
            
            {/* <section>
            {data ? data.map((item)=>{
                return(
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <img src={item.image} alt="" />
                        <p>{item.harga}</p>
                    </div>
                )
            }): "loading"}
        </section> */}

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
                <div className='max-w-md md:w-1/2 p-10 md:p-15 lg:h-1/2 order-1 md:order-2'>
                    {/* <img className='' src={Img1} alt="annikmah produk" /> */}
                    <CarouselProduk />
                </div>
            </div>




            {/* sample produk */}
            {/* <div className=' hidden md:flex p-5 md:flex-row md:justify-evenly items-center md:max-w-2xl lg:max-w-5xl'>
                {data ? data.slice(0, 3).map((item) => {
                    return (
                        <div key={item.id} className='p-5 max-w-sm relative flex flex-col '>
                            <img src={item.image} className='rounded-t-xl shadow-lg' alt="Gambar Produk" />
                            <button className='h-16 bg-slate-200 rounded-b-xl shadow-lg hover:border hover:outline-none hover:text-slate-100 hover:delay-150 hover:shadow-2xl hover:bg-slate-400 hover: text-center text-2xl p-2'>{item.name}</button>
                        </div>
                    )
                }) : "laoding"}
            </div>
            <div className='flex p-5 md:hidden'>
                {data ? data.slice(0, 2).map((item) => {
                    return (
                        <div key={item.id} className='p-5 max-w-sm relative flex flex-col '>
                            <img src={item.image} className='rounded-t-xl shadow-lg' alt="Gambar Produk" />
                            <button className='h-16 bg-slate-200 rounded-b-xl shadow-lg hover:border hover:outline-none hover:text-slate-100 hover:delay-150 hover:shadow-2xl hover:bg-slate-400 hover: text-center text-2xl p-2'>{item.name}</button>
                        </div>
                    )
                }) : "laoding"}
            </div> */}

            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>


            <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center md:max-w-5xl relative mt-16">
                {data ? data.slice(0, 4).map((item) => {
                    return (
                        <div key={item.id} className='p-2 w-1/3 md:max-w-5xl bg-slate-200 flex flex-col rounded-md'>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={item.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {item.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{item.kategori}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{item.harga}</p>
                            </div>
                        </div>
                    )
                }) : "loading"}
            </div>

        </>

    )

}