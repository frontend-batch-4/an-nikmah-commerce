import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { redirect } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    console.log()

    useEffect(() => {
        // Check for token and navigate immediately after component mounts
        if (localStorage.getItem('token') !== null) {
            navigate('/');
        }
    }, []);

    // const [emailInput, setEmailInput] = useState('');
    // const [passwordInput, setPasswordInput] = useState('');

    const [alert, setAlert] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(e)
        const email = e.target.querySelector('[name="email"]').value;
        const password = e.target.querySelector('[name="password"]').value;
        const form_data = new FormData()
        form_data.append('email', email)
        form_data.append('password', password)

        const response = await fetch('http://127.0.0.1:5000/users/login', {
            method: 'POST',
            body: form_data
        });


        const data = await response.json();
        if (response.ok) {
            console.log("login berhasil", data)
            localStorage.setItem('token', data.token);
            // simpan token ke localstorage dengan key token
            // redirect ke halaman 
            navigate('/');
        } else {
            console.log("login gagal", data.msg)
            setAlert(data.msg)
        }

    };

    return (
        <>

            <div className="w-2/3 my-10 max-w-md md:max-w-4xl min-w-sm">
                <h1 className="text-center font-bold text-3xl mb-10">LOGIN</h1>
                <form onSubmit={handleLogin} className="flex flex-col ">
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
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                            placeholder="Your email"
                            required=""
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                            required=""
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                defaultValue=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-slate-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required=""
                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm m-auto sm:w-auto px-10 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 mb-5"
                    >
                        Login
                    </button>
                </form>


                <div className="self-center">
                    <NavLink to="/register">
                        <button className="text-center underline p-5">Create an account</button>
                    </NavLink>
                </div>


            </div>
        </>
    )
}