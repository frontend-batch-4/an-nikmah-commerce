import { useState, useEffect } from 'react';
export default function Bandana() {
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
            <div className="flex flex-wrap  gap-5 justify-center md:max-w-5xl relative mt-16">
                {data ? data.slice(0, 21).map((item) => {
                    return (
                        <div key={item.id} className='p-2 w-1/3 md:w-1/5 md:max-w-5xl bg-slate-200 flex flex-col rounded-md'>
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