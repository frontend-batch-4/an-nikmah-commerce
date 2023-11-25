import AdminLayout from "../layout/AdminLayout";
import items from "../lib/dummyData";
export default function Dashboard() {

    return (
        <>

            <AdminLayout>
                <div class="p-4 sm:ml-64">

                    <div class=" items-center justify-center mb-4 rounde">

                        <form>
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>

                    </div>

                    <div class=" items-center justify-center mb-4 rounde">



                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-16 py-3">
                                            <span class="sr-only">Image</span>
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        items.map((item, index) => (
                                            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="p-4">
                                                    <img src={item.img} class="w-16 h-16  md:w-32 md:h-32" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                    {item.title}
                                                </td>
                                                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                    {item.description}
                                                </td>
                                                <td class=" px-6 py-4">
                                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </AdminLayout >


        </>
    );
}
