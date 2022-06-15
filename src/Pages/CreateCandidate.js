import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateCandidate = () => {

    const handleForm = (event) => {
        event.preventDefault()

        const inputName = event.target.name.value
        const inputAddress = event.target.address.value
        const inputBirth = event.target.birth.value
        const inputState = event.target.state.value
        const inputAge = event.target.age.value
        const inputPin = event.target.pin.value

        console.log(inputName, inputAddress, inputBirth, inputState, inputAge, inputPin)


        axios.post('http://localhost:5000/create', {
            name: inputName,
            address: inputAddress,
            birth: inputBirth,
            state: inputState,
            age: inputAge,
            pin: inputPin
        })
            .then(function (response) {
                console.log(response)

            })
            .catch(function (error) {
                console.log(error)
            })
    }


    return (

        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 my-14">
            <div className=" bg-gray-300 rounded-lg">

                <p className="text-3xl font-semibold text-left text-zinc-900  mx-9 pt-4 ">Create Candidate</p>

                <form className='pb-14' onSubmit={handleForm}>

                    <div className="md:flex items-center mt-6 mb-3">

                        {/* name */}
                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="text-left mx-9 ">Name</label>

                            <input
                                type="text"
                                className="py-3 mx-8 rounded border-2 bg-gray-300"
                                placeholder='enter your name'
                                name='name'
                                required
                            />
                        </div>

                        {/* address */}
                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-left mx-9">Address</label>


                            <input
                                type="text"
                                className="py-3 mx-8 rounded border-2 bg-gray-300"
                                placeholder='enter your address'
                                name='address'
                                required
                            />
                        </div>

                    </div>


                    <div className="md:flex items-center mt-6 mb-3">

                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="text-left mx-9 ">Date of Birth</label>
                            <input
                                type="date"
                                className="py-3 mx-8 rounded border-2 bg-gray-300"
                                placeholder='enter your date of birth'
                                name='birth'
                                required
                            />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-left mx-9">State</label>
                            <input
                                type="text"
                                className="py-3 mx-8 rounded border-2 bg-gray-300"
                                placeholder='select your state'
                                name='state'
                                required
                            />
                        </div>

                    </div>


                    <div className="md:flex items-center mt-6 mb-3">

                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="text-left mx-9 ">Age</label>
                            <input
                                type="number"
                                className="py-3 mx-8 rounded border-2 bg-gray-300"
                                placeholder='enter your age'
                                name='age'
                                required
                            />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-left mx-9">Pin Code</label>
                            <input
                                type="number"
                                className="py-3 mx-8 rounded border-2 bg-gray-300"
                                placeholder='enter your 6-digit pin code'
                                name='pin'
                                required
                            />
                        </div>

                    </div>



                    <div className='flex justify-end mr-4 mt-10'>
                        <Link to="/" className="w-32 px-4 py-3 mx-5 rounded text-zinc-900 inline-block shadow-lg
                        bg-gray-200 hover:bg-blue-500 border border-blue-600 ">Cancel</Link>

                        <input className="w-32 px-4 py-3 mx-5 rounded text-zinc-900 inline-block shadow-lg
                        bg-gray-200 hover:bg-blue-500 border border-blue-600 " type="submit" value="Sign Up" />
                    </div>

                </form>


            </div >
        </div >


    );
};

export default CreateCandidate;