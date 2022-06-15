import { MdDelete } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CandidateTable = ({ user, index }) => {


    const handleDelete = (data) => {
        const id = user._id
        console.log(id)

        axios.delete(`http://localhost:5000/userinfo/${id}`, {
        })
            .then(function (response) {
                console.log(response)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    return (

        <tr>
            <td className='p-2'>
                {index + 1}
            </td>

            <td className="p-2">

                <h1 className="font-medium text-gray-800 text-left">{user.name}</h1>

            </td>

            <td className="p-2">
                <div className="text-left">{user?.birthDate}</div>
            </td>

            <td className="p-2">
                <div className="text-left font-medium">{user.state}</div>
            </td>

            <td className="p-2">
                <div className="flex justify-center">


                    <Link to={`update/${user._id}`} className="text-lg pt-2 rounded-full hover:bg-gray-100 py-1 px-2">
                        <GrEdit />
                    </Link>


                    <button onClick={() => handleDelete(user)} className="text-xl rounded-full hover:bg-gray-100 py-1 px-2">
                        <MdDelete />
                    </button>

                </div>
            </td>


        </tr>

    );
};

export default CandidateTable;