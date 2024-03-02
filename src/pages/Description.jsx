import Navbar from "../components/Navbar";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


export default function Description() {

    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        getData();
    }, []);
    const [data, setData] = useState();

    const getData = async () => {
        const response = await fetch('http://localhost:3000/product/detail/' + id);
        const data = await response.json();
        setData(data); console.log(data)
    };


    return (
        <>

            <section className="text-gray-700 body-font overflow-hidden bg-white">
                {data ? data.slice(0, 4).map((item) => {
                    return (
                        <div key={item.id} className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <img alt="barang" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={item.image} />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                        {item.name}
                                    </h1>
                                    <br />

                                    <p className="text-sm text-gray-500 leading-relaxed mb-1">Description:</p>
                                    <p className="leading-relaxed">
                                        {item.description}
                                    </p>
                                    <br />
                                    <p className="text-sm text-gray-500 leading-relaxed mb-1">Product Details:</p>
                                    <p className="leading-relaxed">
                                        {item.kategori}
                                    </p>
                                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                                        <div className="flex py-4 ">
                                            <div className="relative">
                                                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                                                <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-5 pr-5 h-14 flex items-end pb-1">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="flex justify-between">
                                        <span className="title-font font-medium text-2xl text-gray-900">Rp {item.harga}.000</span>
                                        <a href="/cart">
                                            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to cart</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex flex-col items-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                                <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-center md:max-w-5xl relative mt-16">
                                    
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
                                     
                                </div>
                            </div> */}

                        </div>
                    )
                }) : "loading"}

            </section>
        </>
    );
}