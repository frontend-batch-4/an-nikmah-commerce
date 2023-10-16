export default function Register() {
    return (
        <>
        <div className=" w-2/3 my-10 max-w-md md:max-w-4xl min-w-sm">
            <form className="flex flex-col">
            <h1 className="text-center font-bold text-3xl mb-10">Create New Account</h1>
                <div className="mb-6">
                    <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
                        placeholder="Input first name"
                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="Lastname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your last name
                    </label>
                    <input
                        type="text"
                        id="Lastname"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
                        placeholder="Input last name"
                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
                        placeholder="Your email"
                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        placeholder="Your password"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="input your password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="repeat-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Repeat password
                    </label>
                    <input
                        type="password"
                        id="repeat-password"
                        placeholder="Repeat your password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"
                        required=""
                    />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-slate-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-slate-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required=""
                        />
                    </div>
                    <label
                        htmlFor="terms"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        I agree with the{" "}
                        <a href="#" className="text-slate-600 hover:underline dark:text-slate-500">
                            terms and conditions
                        </a>
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm mx-auto px-2 md:px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
                >
                    Register new account
                </button>
            </form>
        </div>

        </>
    )
}