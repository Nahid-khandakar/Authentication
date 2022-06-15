import React from 'react';
import { Link } from 'react-router-dom';

const CreateCandidate = () => {
    return (




        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 my-14">
            <div className=" bg-gray-300">

                <p className="text-3xl font-semibold text-left text-zinc-900  mx-9 pt-4">Create Candidate</p>

                <form className='pb-14'>

                    <div className="md:flex items-center mt-6 mb-3">

                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="text-left mx-9 ">Name</label>
                            <input type="text" className="py-3 mx-8 rounded border-2 bg-gray-300 " />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-left mx-9">Address</label>
                            <input type="email" className="py-3 mx-8 rounded border-2 bg-gray-300 " />
                        </div>

                    </div>


                    <div className="md:flex items-center mt-6 mb-3">

                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="text-left mx-9 ">Date of Birth</label>
                            <input type="text" className="py-3 mx-8 rounded border-2 bg-gray-300 " />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-left mx-9">State</label>
                            <input type="email" className="py-3 mx-8 rounded border-2 bg-gray-300 " />
                        </div>

                    </div>


                    <div className="md:flex items-center mt-6 mb-3">

                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="text-left mx-9 ">Age</label>
                            <input type="text" className="py-3 mx-8 rounded border-2 bg-gray-300 " />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-left mx-9">Pin Code</label>
                            <input type="email" className="py-3 mx-8 rounded border-2 bg-gray-300 " />
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