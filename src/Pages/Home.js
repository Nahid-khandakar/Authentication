import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CandidateTable from './CandidateTable';

const Home = () => {

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/userinfo')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserInfo(data)
            })
    }, [])

    return (

        <section className="antialiased bg-white text-gray-600 h-screen px-4" x-data="app">
            <div className="flex flex-col justify-center mt-14">

                <div className="w-full max-w-4xl mx-auto  shadow-lg rounded-sm border bg-gray-300 border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <div className="font-semibold text-gray-800 text-left">Candidate List : {userInfo.length}</div>
                    </header>

                    <div className="overflow-x-auto p-3">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th></th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Name</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Date of Birth</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">State</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">Action</div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-sm divide-y divide-gray-100">

                                {
                                    userInfo?.map((user, index) => <CandidateTable
                                        key={index}
                                        user={user}
                                        index={index}
                                    ></CandidateTable>)
                                }

                            </tbody>
                        </table>
                    </div>

                    <div className='text-blue-500 font-semibold my-6 text-left mx-10'>
                        <Link to='/createcandidate'>+ Add new candidate</Link>
                    </div>

                </div>

            </div>
        </section>


    );
};

export default Home;