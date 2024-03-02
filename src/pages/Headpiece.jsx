import { useState, useEffect } from 'react';
export default function Headpiece() {
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Headpiece Collection</h2>
            <div className="flex flex-wrap  gap-5 justify-center md:max-w-5xl lg:max-w-full relative mt-16">
                {data ? data.slice(41).map((item) => {
                    return (
                        <a href={`/description/${item.id}`} key={item.id} className='p-2 w-1/3 md:w-1/4 lg:w-1/5 bg-slate-200 flex flex-col rounded-md'>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={item.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className='w-2/3'>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={`/description/${item.id}`} >
                                            <span aria-hidden="true" className=" inset-0"></span>
                                            {item.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{item.kategori}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{item.harga}</p>
                            </div>
                        </a>
                    )
                }) : "loading"}
            </div>
        </>
    )

}