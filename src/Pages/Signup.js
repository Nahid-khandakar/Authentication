import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const userEmail = data.email
        const userPhoneNumber = data.phone
        const userPassword = data.password


        axios.post('https://immense-badlands-37907.herokuapp.com/signup', {
            email: userEmail,
            phoneNumber: userPhoneNumber,
            password: userPassword
        })
            .then(function (response) {

                reset()
                if (response.status === 200) {
                    toast.success('Sign up complete')
                    navigate('../home', { replace: true })
                }

            })
            .catch(function (error) {
                console.log(error)
                if (error.response.status === 409) {
                    toast.error('This email already use')
                }

            })

    }


    return (
        <div className="flex items-center justify-center mt-20">


            <div className="w-full max-w-md">



                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-300 drop-shadow-xl rounded px-12 pt-6 pb-8 mb-4">

                    <div
                        className="text-gray-800 text-3xl flex justify-center border-b-2 py-2 mb-8 font-bold"
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
                            placeholder="enter your email id"

                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /^[a-z0-9](\.?[a-z0-9]){4,}@g(oogle)?mail\.com$/,
                                    message: 'Invalid email'
                                }
                            })}
                        />

                        <div className='text-left text-red-700 ml-2 mt-1 text-sm'>
                            {errors.email?.type === "required" && <span>{errors.email.message}</span>}
                            {errors.email?.type === "pattern" && <span>{errors.email.message}</span>}
                        </div>

                    </div>


                    {/* get phone number  */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm mb-2 text-left font-semibold"
                        >
                            Phone number
                        </label>


                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="enter your phone number"

                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone number is required'
                                },
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: '10 digit phone number'
                                }
                            })}

                        />

                        <div className='text-left text-red-700 ml-2 mt-1 text-sm'>
                            {errors.phone?.type === "required" && <span>{errors.phone.message}</span>}
                            {errors.phone?.type === "pattern" && <span>{errors.phone.message}</span>}
                        </div>

                    </div>

                    {/* get password */}
                    <div>
                        <label
                            className="block text-gray-700 text-sm mb-2 text-left font-semibold"
                        >
                            Password
                        </label>

                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="enter your password"

                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                pattern: {
                                    value: /^(?=.{3,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
                                    message: <p>password must contain one uppercase, one lowercase, one numeric, one special character</p>
                                }
                            })}
                        />

                        <div className='text-left text-red-700 ml-2 mt-0 text-sm'>
                            {errors.password?.type === "required" && <span>{errors.password.message}</span>}
                            {errors.password?.type === "pattern" && <span>{errors.password.message}</span>}
                        </div>


                    </div>

                    {/* go to login page */}
                    <div className="text-blue-500 text-right mt-2 mb-8">
                        <Link to="/login">Already Have an Account</Link>
                    </div>


                    <div className="flex items-center justify-between">

                        <input className="w-48 px-4 py-3 rounded text-white inline-block shadow-lg 
                        bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 mx-auto" type="submit" value="Sign Up" />

                    </div>




                </form>

            </div>


        </div>
    );
};

export default Signup;