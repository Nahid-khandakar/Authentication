import React from 'react';
import { MdDelete } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import axios from 'axios';


const CandidateTable = ({ user, index }) => {

    const handleEdit = (data) => {
        console.log(data)
    }

    const handleDelete = (data) => {
        const id = user._id
        console.log(id)

        axios.delete(`http://localhost:5000/userinfo/${id}`, {
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    return (

        <tr>
            <td class='p-2'>
                {index + 1}
            </td>

            <td class="p-2">

                <h1 class="font-medium text-gray-800 text-left">{user.name}</h1>

            </td>

            <td class="p-2">
                <div class="text-left">{user?.birthDate}</div>
            </td>

            <td class="p-2">
                <div class="text-left font-medium">{user.state}</div>
            </td>

            <td class="p-2">
                <div class="flex justify-center">


                    <button onClick={() => handleEdit(user)} className="text-lg pt-1 rounded-full hover:bg-gray-100 py-1 px-2">
                        <GrEdit />
                    </button>


                    <button onClick={() => handleDelete(user)} className="text-xl rounded-full hover:bg-gray-100 py-1 px-2">
                        <MdDelete />
                    </button>

                </div>
            </td>


        </tr>

    );
};

export default CandidateTable;