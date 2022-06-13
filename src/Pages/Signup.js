import React from 'react';

const Signup = () => {
    return (
        <div className="flex items-center justify-center mt-32 bg-slate">


            <div className="w-full max-w-md">



                <form className="bg-gray-300 drop-shadow-xl rounded px-12 pt-6 pb-8 mb-4">

                    <div
                        className="text-gray-800 text-3xl flex justify-center border-b-4 py-2 mb-8 font-bold"
                    >
                        Sign Up
                    </div>

                    {/* get email  */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm mb-2 text-left font-semibold"
                        >
                            Email id
                        </label>


                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            v-model="form.email"
                            type="email"
                            required
                            placeholder="Email"
                        />


                    </div>

                    {/* get password */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm mb-2 text-left font-semibold"
                        >
                            Password
                        </label>

                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="form.password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                        />


                    </div>


                    <div className="flex items-center justify-between">

                        <input className="w-48 px-4 py-3 rounded text-white inline-block shadow-lg 
                        bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 mx-auto" type="submit" value="Log In" />

                    </div>


                </form>

            </div>


        </div>
    );
};

export default Signup;