import { Navigate } from "react-router-dom"

export default function Register() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let first_name = e.target[0].value
        let last_name = e.target[1].value
        let email = e.target[2].value
        let password = e.target[3].value
        let confirm_password = e.target[4].value
        if (password != confirm_password) return false

        const form_data = new FormData()
        form_data.append('first_name', first_name)
        form_data.append('last_name', last_name)
        form_data.append('email', email)
        form_data.append('password', password)
        form_data.append('confirm_password', confirm_password)


        const response = await fetch('http://127.0.0.1:5000/users/register', {
            method: 'POST',
            body: form_data
        })
        console.log(response)
        const { message } = await response.json()
        alert(message)

        if (response.ok){
            Navigate('/login')
        }
    }



    return (
        <>

            <div className=" w-2/3 my-10 max-w-md md:max-w-4xl min-w-sm">
                <form onSubmit={handleSubmit} className="flex flex-col">
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
                            htmlFor="confirm-password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
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