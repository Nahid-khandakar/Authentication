import React, { useEffect, useState } from 'react';

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
        < div >
            <h1>Candidate List : {userInfo.length}</h1>
            {
                userInfo?.map((user, index) => <h1>{user.name}</h1>)
            }

        </div >
    );
};

export default Home;